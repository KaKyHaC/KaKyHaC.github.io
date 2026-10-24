import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import experience from '../locales/en/experience.js';
import education from '../locales/en/education.js';
import research from '../locales/en/research.js';
import projectData from '../locales/en/projects.js';
import {
    summaries, focusLines, proofPoints, independentWork, career,
    androidSkills, softwareSkills, projects, additionalEngineering, languages
} from '../src/resume/content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const link = (url, label) => `<a href="${esc(url)}">${esc(label)}</a>`;
const section = (title, body, className = '') => `<section class="${esc(className)}"><h2>${esc(title)}</h2>${body}</section>`;
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const date = value => value === 'Present' ? value : `${months[Number(value.split('.')[0]) - 1]} ${value.split('.')[1]}`;
const period = item => `${date(item.start_date)} - ${date(item.end_date)}`;

const getJob = company => {
    const found = experience.find(item => item.company_name === company);
    if (!found) throw new Error(`Missing employer: ${company}`);
    return found;
};

const getProject = id => {
    const found = projectData.find(item => item.id === id);
    if (!found) throw new Error(`Missing project: ${id}`);
    return found;
};

const richBullets = items => `<ul>${items.map(item => `<li><strong>${esc(item.lead)}</strong> ${esc(item.text)}</li>`).join('')}</ul>`;

function jobArticle(company, items, compact = false) {
    const job = getJob(company);
    return `<article class="experience-item${compact ? ' compact' : ''}">
        <div class="article-heading"><h3>${esc(job.company_name)}</h3><p class="job-title">${esc(job.role)}</p></div>
        <p class="meta">${esc(period(job))}</p>${richBullets(items)}
    </article>`;
}

function independentArticle(items) {
    const job = getJob(independentWork.company);
    return `<article class="experience-item current-work">
        <div class="article-heading"><h3>${esc(independentWork.displayCompany)}</h3><p class="job-title">Independent Product Developer & Publisher</p></div>
        <p class="meta">${esc(period(job))} · Current independent product work</p>${richBullets(items)}
    </article>`;
}

function projectArticles(items) {
    return items.map(item => {
        const project = getProject(item.id);
        const url = project.playStoreLink || project.liveLink || project.githubLink || `https://dvbarannik.github.io/projects/${project.id}/`;
        return `<article class="project-item">
            <div class="article-heading"><h3>${link(url, project.title.replaceAll('—', '-'))}</h3><p class="job-title">${esc(project.role)}</p></div>
            <p class="meta">${esc(project.date.replaceAll('–', '-'))}</p>
            <p><strong>${esc(item.lead)}</strong> ${esc(item.text)}</p>
        </article>`;
    }).join('');
}

const skillsHtml = skills => `<dl class="skills-list">${skills.map(([name, value]) => `<div><dt>${esc(name)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`;
const degrees = education.higher_education.degrees;
const educationHtml = degrees.map(degree => `<p class="degree"><strong>${esc(degree.level)} · ${esc(degree.specialty)}</strong><br><span>${esc(degree.institution)} · ${esc(degree.start_year)}-${esc(degree.end_year)}</span></p>`).join('');
const currentAcademic = getJob('KhNUIA');
const formerAcademic = getJob('MITI');
const teachingHtml = `<p class="credential"><strong>${esc(currentAcademic.company_name)} · ${esc(currentAcademic.role)}</strong><br><span>${esc(period(currentAcademic))}</span></p>
<p class="credential"><strong>${esc(formerAcademic.company_name)} · ${esc(formerAcademic.role)}</strong><br><span>${esc(period(formerAcademic))}</span></p>`;
const patent = research.patents[0];
const researchHtml = `<p class="research-copy">PhD research in steganographic coding and secure video transmission. Co-inventor of utility model patent <strong>${esc(patent.patent_number)}</strong> (${esc(patent.year)}): ${esc(patent.title)}.</p>`;

const contact = `<p class="availability">Ukraine · Available for full-time remote work · B2B</p>
<p class="contacts">${link('mailto:d.v.barannik@gmail.com','d.v.barannik@gmail.com')} · ${link('tel:+380661748228','+380 66 174 82 28')} · ${link('https://t.me/dima_barannik','t.me/dima_barannik')}<br>${link('https://dvbarannik.github.io/','dvbarannik.github.io')} · ${link('https://www.linkedin.com/in/dmitry-barannik','linkedin.com/in/dmitry-barannik')} · ${link('https://github.com/KaKyHaC','github.com/KaKyHaC')} · ${link('https://play.google.com/store/apps/dev?id=7572188664286438813','Google Play portfolio')}</p>`;

function header(variant, title) {
    const proofs = proofPoints[variant].map(([value, label]) => `<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join('');
    return `<header><p class="document-label">Curriculum Vitae · ${esc(title)}</p><h1>Dmytro Barannik</h1><p class="role">${esc(title)}</p>${contact}</header>
        ${section('Profile', `<p class="summary">${esc(summaries[variant])}</p><p class="focus-line">${esc(focusLines[variant])}</p>`, 'profile-section')}
        <div class="proof-strip" aria-label="Selected evidence">${proofs}</div>`;
}

function page(body, number, title) {
    return `<div class="resume-page"><div class="page-content">${body}</div><footer><span>Dmytro Barannik · ${esc(title)}</span><span>Page ${number} of 2</span></footer></div>`;
}

function androidPages() {
    const title = 'Android Developer';
    const pageOne = header('android', title)
        + section('Current product work', independentArticle(independentWork.androidBullets), 'featured-section')
        + section('Commercial Android experience',
            jobArticle('MEGOGO', career.MEGOGO.android)
            + jobArticle('CHI Software', career['CHI Software'].android)
            + jobArticle('Nitrix Studio', career['Nitrix Studio'].shared, true));

    const pageTwo = section('Earlier commercial experience',
            jobArticle('IT Company', career['IT Company'].shared, true))
        + section('Technical capabilities', skillsHtml(androidSkills), 'skills-section')
        + section('Additional published products', projectArticles(projects.androidSecondary), 'projects-section')
        + section('Education', educationHtml, 'education-section')
        + section('Teaching & applied research', teachingHtml + researchHtml, 'credentials-section')
        + section('Additional engineering & languages', `<p>${esc(additionalEngineering)}</p><p><strong>Languages:</strong> ${esc(languages)}</p>`, 'closing-section');
    return page(pageOne, 1, title) + page(pageTwo, 2, title);
}

function softwarePages() {
    const title = 'Software Engineer';
    const pageOne = header('software', title)
        + section('Current product work', independentArticle(independentWork.softwareBullets), 'featured-section')
        + section('Selected engineering work', projectArticles(projects.softwarePrimary), 'projects-section')
        + section('Relevant commercial experience',
            jobArticle('MEGOGO', career.MEGOGO.software, true)
            + jobArticle('CHI Software', career['CHI Software'].software, true));

    const pageTwo = section('Additional commercial experience',
            jobArticle('Nitrix Studio', career['Nitrix Studio'].shared, true)
            + jobArticle('IT Company', career['IT Company'].shared, true))
        + section('Selected systems, web & IoT work', projectArticles(projects.softwareSecondary), 'projects-section')
        + section('Technical capabilities', skillsHtml(softwareSkills), 'skills-section')
        + section('Education', educationHtml, 'education-section')
        + section('Teaching & applied research', teachingHtml + researchHtml, 'credentials-section')
        + section('Languages', `<p>${esc(languages)}</p>`, 'closing-section');
    return page(pageOne, 1, title) + page(pageTwo, 2, title);
}

export function renderResumeHtml() {
    const variants = [
        ['android', 'android.html', 'Android Developer', androidPages()],
        ['software', 'staff.html', 'Software Engineer', softwarePages()]
    ];
    for (const [variant, filename, title, pages] of variants) {
        const html = `<!doctype html>\n<!-- Generated by scripts/render-resume-html.mjs; edit content.mjs or source locale data. -->\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Dmytro Barannik - ${title} CV</title><link rel="stylesheet" href="resume-common.css"></head><body class="${variant}"><main>${pages}</main></body></html>\n`;
        fs.writeFileSync(path.join(root, 'src/resume', filename), html);
    }
}

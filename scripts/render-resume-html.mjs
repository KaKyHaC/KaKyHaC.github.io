import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import experience from '../locales/en/experience.js';
import education from '../locales/en/education.js';
import research from '../locales/en/research.js';
import projects from '../locales/en/projects.js';
import { summaries, career, skills, products, engineeringProjects, languages } from '../src/resume/content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const link = (url, label) => `<a href="${esc(url)}">${esc(label)}</a>`;
const section = (title, body) => `<section><h2>${esc(title)}</h2>${body}</section>`;
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const date = value => value === 'Present' ? value : `${months[Number(value.split('.')[0])-1]} ${value.split('.')[1]}`;
const period = item => `${date(item.start_date)} - ${date(item.end_date)}`;
const job = company => {
    const found = experience.find(item => item.company_name === company);
    if (!found) throw new Error(`Missing employer: ${company}`);
    return found;
};
const project = id => {
    const found = projects.find(item => item.id === id);
    if (!found) throw new Error(`Missing project: ${id}`);
    return found;
};
const bullets = items => `<ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
const careerHtml = career.map(({company, bullets: items}) => {
    const item = job(company);
    return `<article><h3>${esc(item.company_name)} <span class="divider">|</span> ${esc(item.role)}</h3><p class="meta">${esc(period(item))}</p>${bullets(items)}</article>`;
}).join('');
const skillsHtml = `<dl>${skills.map(([name, value]) => `<div><dt>${esc(name)}:</dt> <dd>${esc(value)}</dd></div>`).join('')}</dl>`;
function selectedProjects(items) {
    return items.map(({id,text}) => {
        const p = project(id);
        return `<article><h3>${link(p.playStoreLink || p.liveLink || p.githubLink || `https://dvbarannik.github.io/projects/${p.id}/`, p.title.replaceAll('—','-'))}</h3><p class="meta">${esc(p.date.replaceAll('–','-'))}</p><p>${esc(text)}</p></article>`;
    }).join('');
}
const degrees = education.higher_education.degrees;
const educationHtml = degrees.map((degree) => `<p class="degree"><strong>${esc(degree.level)} - ${esc(degree.specialty)}</strong><br>${esc(degree.institution)} · ${esc(degree.start_year)} - ${esc(degree.end_year)}</p>`).join('');
const teachingHtml = ['KhNUIA', 'MITI'].map(company => {
    const item = job(company);
    return `<p><strong>${esc(item.company_name)} - ${esc(item.role)}</strong><br><span class="meta">${esc(period(item))}</span></p>`;
}).join('');
const independent = experience.find(item => item.category === 'Independent Development');
const indieIntro = `<p class="meta">Dimalina Studio · ${esc(period(independent))} · Independent product development</p><p>Design, implementation and Google Play publishing, including Firebase integration, local storage and monetization with Play Billing and AdMob.</p>`;
const patent = research.patents[0];
const researchHtml = `<p>Research in steganographic coding and secure video transmission. Co-inventor of utility model patent ${esc(patent.patent_number)} (${esc(patent.year)}): ${esc(patent.title)}.</p>`;
const contact = `<p class="availability">Ukraine · Remote · Full-time / B2B</p><p class="contacts">${link('mailto:d.v.barannik@gmail.com','d.v.barannik@gmail.com')} · ${link('tel:+380661748228','+380 66 174 82 28')} · ${link('https://t.me/dima_barannik','t.me/dima_barannik')}<br>${link('https://dvbarannik.github.io/','dvbarannik.github.io')} · ${link('https://www.linkedin.com/in/dmitry-barannik','linkedin.com/in/dmitry-barannik')}<br>${link('https://github.com/KaKyHaC','github.com/KaKyHaC')} · ${link('https://play.google.com/store/apps/dev?id=7572188664286438813','Google Play apps')}</p>`;
function page(body, number, title) {
    return `<div class="resume-page"><div class="page-content">${body}</div><footer>Dmytro Barannik · ${esc(title)} <span>Page ${number} of 2</span></footer></div>`;
}
export function renderResumeHtml() {
    for (const [variant, filename, title] of [['android','android.html','Android Developer'], ['software','staff.html','Software Engineer']]) {
        const header = `<header><h1>Dmytro Barannik</h1><p class="role">${title}</p>${contact}</header>`;
        const page1 = header + section('Profile', `<p>${esc(summaries[variant])}</p>`) + section('Experience', careerHtml);
        let page2;
        if (variant === 'android') {
            page2 = section('Technical skills', skillsHtml)
                + section('Independent Android products', indieIntro + selectedProjects(products.slice(0,2)))
                + section('Education', educationHtml)
                + section('Teaching & research', teachingHtml + researchHtml)
                + section('Additional engineering', '<p>Flutter / Dart and Kotlin Multiplatform; web applications with Next.js and Astro; C++20 compression and ESP32 / LoRa telemetry. Project details: ' + link('https://dvbarannik.github.io/','dvbarannik.github.io') + '.</p>')
                + section('Languages', `<p>${esc(languages)}</p>`);
        } else {
            page2 = section('Selected engineering projects', selectedProjects(engineeringProjects))
                + section('Independent products', indieIntro + '<p>Published Android games and utilities including Tic-Tac-Toe: 3 Player Game, People Notes and Brainrot Clicker. Kotlin, Compose, Room, Firebase and Play Billing; additional mobile work in Flutter / Dart and Kotlin Multiplatform.</p>')
                + section('Education', educationHtml)
                + section('Teaching & research', teachingHtml + researchHtml)
                + section('Languages', `<p>${esc(languages)}</p>`);
        }
        const html = `<!doctype html>\n<!-- Generated by scripts/render-resume-html.mjs; edit content.mjs or source locale data. -->\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Dmytro Barannik - ${title} CV</title><link rel="stylesheet" href="resume-common.css"></head><body class="${variant}"><main>${page(page1,1,title)}${page(page2,2,title)}</main></body></html>\n`;
        fs.writeFileSync(path.join(root,'src/resume',filename), html);
    }
}

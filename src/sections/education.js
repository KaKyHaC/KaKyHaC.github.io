import { $, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';

export function renderEducation(data) {
  const c = copy();
  const degrees = [...(data.higher_education?.degrees || [])].reverse();
  const certificates = [...(data.secondary_education?.certificates || [])].sort((a, b) => Number(a.graduation_year) - Number(b.graduation_year));
  
  const path = `
    <div class="education-track-heading reveal">
      <p class="eyebrow">${c.educationHigher}</p>
    </div>
    <div class="education-path">
      <svg class="education-connector" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 20 122 L 340 73 L 675 24"/>
      </svg>
      ${degrees.map((degree, index) => `
        <article class="education-stage ${degree.research_focus ? 'education-stage-phd' : ''} reveal">
          <div class="education-node"><span>0${index + 1}</span></div>
          <div class="education-stage-content">
            <span class="education-date">${safe(degree.start_year)} — ${safe(degree.end_year)}</span>
            <h3>${safe(degree.level)}</h3>
            <p class="education-specialty">${safe(degree.specialty)}</p>
            ${degree.research_focus ? `<div class="education-focus"><span>${c.educationFocus}</span><p>${safe(degree.research_focus)}</p></div>` : ''}
            <details class="education-details">
              <summary>${c.educationDetails}<i class="fas fa-chevron-down" aria-hidden="true"></i></summary>
              <div>
                ${degree.educational_program ? `<p><strong>${c.educationProgram}</strong><br>${safe(degree.educational_program)}</p>` : ''}
                <p>${safe(degree.graduation_details)}</p>
                ${degree.diploma_id ? `<p class="diploma-id">${c.educationDiploma} · ${safe(degree.diploma_id)}</p>` : ''}
              </div>
            </details>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  const secondary = `
    <aside class="secondary-education reveal">
      <div class="secondary-heading">
        <p class="eyebrow">${c.educationFoundation}</p>
        <p>${c.educationFoundationIntro}</p>
      </div>
      <div class="secondary-path">
        ${certificates.map((item, index) => `
          <article class="secondary-stage">
            <div class="secondary-node">0${index + 1}</div>
            <div>
              <span class="secondary-date">${safe(item.graduation_year)}</span>
              <h3>${safe(item.level)}</h3>
              <p>${safe(item.graduation_details)}</p>
              ${item.achievements ? `<strong class="secondary-award"><i class="fas fa-medal" aria-hidden="true"></i> ${safe(item.achievements)}</strong>` : ''}
            </div>
          </article>
        `).join('')}
      </div>
    </aside>
  `;

  const timeline = $('#education-timeline');
  if (timeline) timeline.innerHTML = path + secondary;
}

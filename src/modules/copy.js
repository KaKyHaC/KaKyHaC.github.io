import enUi from '../../locales/en/ui.js';
import ukUi from '../../locales/uk/ui.js';
import { getLang } from '../i18n/index.js';
import { $, $$ } from '../utils/dom.js';

export const COPY = {
  en: {
    sidebarRole: 'Senior / Staff Software Engineer · Tech Lead · PhD',
    download: 'Download CV',
    language: 'Українська',
    light: 'Light theme',
    dark: 'Dark theme',
    nav: {
      about: 'About',
      directions: 'Directions',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      research: 'Research',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      kicker: 'Senior / Staff Software Engineer · Tech Lead · PhD',
      title: 'I turn complex ideas into reliable products.',
      lead: 'I analyze the challenge, architect the system, build, verify, and support the outcome — across mobile, web, low-level systems, IoT, and applied research.',
      projects: 'Explore projects',
      contact: 'Start a conversation',
      cv: 'Download CV',
      years: 'years in software',
      directions: 'technology directions',
      research: 'research & engineering',
      place: 'Based in Ukraine · Working internationally'
    },
    sections: {
      directions: ['Capabilities', 'One engineering mindset. Different technological contexts.', 'Choose a direction to see related work. Every project receives the same attention to context, decisions and delivery.'],
      projects: ['Project registry', 'Work across products, platforms and research.', 'Equal presentation, clear responsibilities and enough technical detail to understand the work.'],
      experience: ['Experience & approach', 'From problem framing to long-term support.', 'Commercial work, independent products, technical leadership and teaching form one continuous engineering practice.'],
      skills: ['Competencies', 'Tools connected to real work.', 'Select a competency to see its practical use and the projects where it appears.'],
      research: ['Research & R&D', 'Research translated into engineering value.'],
      education: ['Education', 'A foundation for continuous learning.'],
      contact: ['Let’s work together', 'A team role, a product idea or a research challenge?', 'Tell me what you are building and what makes it difficult. I will be glad to discuss where my experience can help.']
    },
    filters: {
      all: 'All',
      search: 'Search projects and technologies…',
      reset: 'Reset filters',
      found: n => `${n} project${n === 1 ? '' : 's'}`,
      empty: 'No projects match these filters.'
    },
    directionText: {
      android: 'Native mobile products, TV experiences and platform integrations.',
      kmp: 'Shared Kotlin foundations for products across platforms.',
      flutter: 'Cross-platform apps, product UI and application architecture.',
      web: 'Fast, accessible platforms deployed at the edge.',
      iot: 'Connected devices, telemetry and reliable radio communication.',
      embedded: 'Native libraries, hardware integration, and resource-constrained systems.',
      research: 'Applied algorithms, publications, patents, grants and technical competitions.'
    },
    approach: [
      { num: '01', title: 'Understand', icon: 'fas fa-compass' },
      { num: '02', title: 'Design', icon: 'fas fa-sitemap' },
      { num: '03', title: 'Build', icon: 'fas fa-code' },
      { num: '04', title: 'Verify', icon: 'fas fa-shield-alt' },
      { num: '05', title: 'Support', icon: 'fas fa-sync-alt' }
    ],
    project: 'View project',
    companyProjects: 'Related projects',
    skillProjects: 'Related projects',
    current: 'Current',
    educationHigher: 'Higher education',
    educationFoundation: 'Secondary education',
    educationFoundationIntro: 'Earlier milestones that established the academic foundation for engineering study.',
    educationDetails: 'Degree details',
    educationProgram: 'Programme',
    educationDiploma: 'Diploma',
    researchLabels: {
      patents: 'Patents',
      publications: 'Scientific publications',
      conferences: 'Conference proceedings',
      awards: 'Awards & activities'
    },
    researchHub: {
      phdBadge: 'PhD Dissertation',
      patentBadge: 'Utility Model Patent',
      monographBadge: 'Academic Monograph',
      coreMilestones: 'Core Research Milestones',
      archiveTitle: 'Scientific Publications Archive',
      archiveSubtitle: '68 peer-reviewed publications and conference proceedings across 12 years of research.',
      searchPlaceholder: 'Search publications, topics, authors, or venues…',
      allYears: 'All years',
      allPublishers: 'All venues',
      copyCitation: 'Copy citation',
      copied: 'Copied!',
      viewDoi: 'Open DOI',
      publications: 'publications',
      empty: 'No publications match your search criteria.',
      awardsTitle: 'Academic Honors & Activities'
    },
    educationFocus: 'Research focus:',
    cvModal: enUi.cvModal
  },
  uk: {
    sidebarRole: 'Senior / Staff інженер-програміст · Техлід · PhD',
    download: 'Завантажити CV',
    language: 'English',
    light: 'Світла тема',
    dark: 'Темна тема',
    nav: {
      about: 'Про мене',
      directions: 'Напрями',
      projects: 'Проєкти',
      experience: 'Досвід',
      skills: 'Компетенції',
      research: 'Дослідження',
      education: 'Освіта',
      contact: 'Контакти'
    },
    hero: {
      kicker: 'Senior / Staff інженер-програміст · Техлід · PhD',
      title: 'Перетворюю складні ідеї на надійні продукти.',
      lead: 'Досліджую задачу, проєктую архітектуру, розробляю, верифікую та підтримую результат — у mobile, web, системній розробці, IoT і наукових дослідженнях.',
      projects: 'Переглянути проєкти',
      contact: 'Обговорити співпрацю',
      cv: 'Завантажити CV',
      years: 'років у розробці',
      directions: 'технологічних напрямів',
      research: 'дослідження та інженерія',
      place: 'Україна · Міжнародна співпраця'
    },
    sections: {
      directions: ['Технологічні напрями', 'Один інженерний підхід. Різні технологічні контексти.', 'Оберіть напрям, щоб побачити пов’язані роботи. Кожен проєкт отримує однакову увагу до контексту, рішень і реалізації.'],
      projects: ['Реєстр проєктів', 'Продукти, платформи та дослідження.', 'Рівноправна подача, чітка відповідальність і достатньо технічних деталей, щоб зрозуміти виконану роботу.'],
      experience: ['Досвід і підхід', 'Від формулювання задачі до довгострокової підтримки.', 'Комерційна розробка, власні продукти, технічне лідерство й викладання формують єдину інженерну практику.'],
      skills: ['Компетенції', 'Інструменти, пов’язані з реальною роботою.', 'Оберіть компетенцію, щоб побачити практичне застосування та пов’язані проєкти.'],
      research: ['Дослідження та R&D', 'Наукові результати з практичною інженерною цінністю.'],
      education: ['Освіта', 'Основа для безперервного розвитку.'],
      contact: ['Поговорімо про співпрацю', 'Роль у команді, продуктова ідея чи дослідницький виклик?', 'Розкажіть, що ви створюєте і в чому складність. Обговоримо, як мій досвід може допомогти.']
    },
    filters: {
      all: 'Усі',
      search: 'Пошук за проєктами й технологіями…',
      reset: 'Скинути фільтри',
      found: n => `${n} проєктів`,
      empty: 'За цими фільтрами проєктів не знайдено.'
    },
    directionText: {
      android: 'Нативні мобільні продукти, TV-досвід та інтеграції з платформою.',
      kmp: 'Спільна Kotlin-основа для продуктів на різних платформах.',
      flutter: 'Кросплатформні застосунки, продуктовий UI та архітектура.',
      web: 'Високошвидкісні доступні (a11y) веб-платформи з edge-розгортанням.',
      iot: 'Підключені пристрої, телеметрія та надійний радіозв’язок.',
      embedded: 'Нативні бібліотеки, інтеграція з апаратним забезпеченням та системи з обмеженими ресурсами.',
      research: 'Прикладні алгоритми, публікації, патенти, гранти й технічні конкурси.'
    },
    approach: [
      { num: '01', title: 'Зрозуміти', icon: 'fas fa-compass' },
      { num: '02', title: 'Спроєктувати', icon: 'fas fa-sitemap' },
      { num: '03', title: 'Створити', icon: 'fas fa-code' },
      { num: '04', title: 'Перевірити', icon: 'fas fa-shield-alt' },
      { num: '05', title: 'Підтримувати', icon: 'fas fa-sync-alt' }
    ],
    project: 'Відкрити проєкт',
    companyProjects: 'Пов’язані проєкти',
    skillProjects: 'Пов’язані проєкти',
    current: 'Зараз',
    educationHigher: 'Вища освіта',
    educationFoundation: 'Середня освіта',
    educationFoundationIntro: 'Ранні освітні етапи, що заклали академічну основу для подальшого інженерного навчання.',
    educationDetails: 'Деталі диплома',
    educationProgram: 'Освітня програма',
    educationDiploma: 'Диплом',
    researchLabels: {
      patents: 'Патенти',
      publications: 'Наукові публікації',
      conferences: 'Матеріали конференцій',
      awards: 'Нагороди та діяльність'
    },
    researchHub: {
      phdBadge: 'Дисертація PhD',
      patentBadge: 'Патент на корисну модель',
      monographBadge: 'Академічна монографія',
      coreMilestones: 'Ключові наукові досягнення',
      archiveTitle: 'Реєстр наукових праць',
      archiveSubtitle: '68 рецензованих публікацій у наукових журналах та матеріалах конференцій за 12 років досліджень.',
      searchPlaceholder: 'Пошук публікацій, тем, авторів або видань…',
      allYears: 'Усі роки',
      allPublishers: 'Усі видання',
      copyCitation: 'Скопіювати цитування',
      copied: 'Скопійовано!',
      viewDoi: 'Відкрити DOI',
      publications: 'публікацій',
      empty: 'За цим запитом публікацій не знайдено.',
      awardsTitle: 'Відзнаки та академічна діяльність'
    },
    educationFocus: 'Напрям досліджень:',
    cvModal: ukUi.cvModal
  }
};

export const copy = () => COPY[getLang()];

export function updateThemeLabel() {
  const light = document.documentElement.dataset.theme === 'light';
  const label = $('#theme-label');
  const icon = $('#theme-icon');
  if (label) label.textContent = light ? copy().dark : copy().light;
  if (icon) icon.className = light ? 'fas fa-moon' : 'fas fa-sun';
}

export function applyCopy() {
  const c = copy();
  document.documentElement.lang = getLang();
  
  const role = $('#sidebar-role');
  if (role) role.textContent = c.sidebarRole;
  
  const cvLabel = $('#sidebar-cv-label');
  if (cvLabel) cvLabel.textContent = c.download;
  
  const langLabel = $('#lang-label');
  if (langLabel) langLabel.textContent = c.language;
  
  Object.entries(c.nav).forEach(([k, v]) => {
    const el = $(`[data-nav="${k}"]`);
    if (el) el.textContent = v;
  });

  [
    ['hero-kicker', 'kicker'],
    ['hero-title', 'title'],
    ['hero-lead', 'lead'],
    ['proof-years', 'years'],
    ['proof-directions', 'directions'],
    ['proof-research', 'research'],
    ['portrait-caption', 'place']
  ].forEach(([id, k]) => {
    const el = $('#' + id);
    if (el) el.textContent = c.hero[k];
  });

  const heroProjects = $('#hero-projects');
  if (heroProjects?.childNodes[0]) heroProjects.childNodes[0].textContent = c.hero.projects + ' ';
  
  const heroContact = $('#hero-contact');
  if (heroContact) heroContact.textContent = c.hero.contact;
  
  const heroCv = $('#hero-cv');
  if (heroCv) heroCv.innerHTML = c.hero.cv + ' <i class="fas fa-arrow-down"></i>';

  ['directions', 'projects', 'experience', 'skills', 'research', 'education'].forEach(section => {
    const values = c.sections[section];
    if (!values) return;
    const kicker = $(`#${section}-kicker`);
    if (kicker) kicker.textContent = values[0];
    const title = $(`#${section}-title`);
    if (title) title.textContent = values[1];
    const intro = $(`#${section}-intro`);
    if (intro && values[2]) intro.textContent = values[2];
  });

  const contactKicker = $('#contact-kicker');
  if (contactKicker) contactKicker.textContent = c.sections.contact[0];
  const contactTitle = $('#contact-title');
  if (contactTitle) contactTitle.textContent = c.sections.contact[1];
  const contactCopy = $('#contact-copy');
  if (contactCopy) contactCopy.textContent = c.sections.contact[2];

  const searchInput = $('#project-search');
  if (searchInput) searchInput.placeholder = c.filters.search;
  
  const clearBtn = $('#clear-filter-btn span');
  if (clearBtn) clearBtn.textContent = c.filters.reset;

  if ($('#cv-dialog-title') && c.cvModal) {
    $('#cv-dialog-title').textContent = c.cvModal.title;
    $('#cv-dialog-subtitle').textContent = c.cvModal.subtitle;
    $('#cv-staff-badge').textContent = c.cvModal.staffBadge;
    $('#cv-staff-title').textContent = c.cvModal.staffTitle;
    $('#cv-staff-desc').textContent = c.cvModal.staffDesc;
    $('#cv-staff-btn').textContent = c.cvModal.staffBtn;
    $('#cv-android-badge').textContent = c.cvModal.androidBadge;
    $('#cv-android-title').textContent = c.cvModal.androidTitle;
    $('#cv-android-desc').textContent = c.cvModal.androidDesc;
    $('#cv-android-btn').textContent = c.cvModal.androidBtn;
    $('#cv-dialog-footer-note').textContent = c.cvModal.footerNote;
    $('#cv-dialog-close')?.setAttribute('aria-label', c.cvModal.closeLabel);
    const kickerLabel = $('#cv-kicker-label');
    if (kickerLabel) kickerLabel.textContent = c.cvModal.kicker;
    const directLink = $('.cv-direct-link');
    if (directLink) {
      directLink.textContent = c.cvModal.directLabel;
      directLink.title = c.cvModal.directLabel;
    }
    $$('[data-cv-format]').forEach(el => el.textContent = c.cvModal.format);
    $$('[data-cv-text-format]').forEach(el => el.textContent = c.cvModal.textFormat);
  }

  updateThemeLabel();
}

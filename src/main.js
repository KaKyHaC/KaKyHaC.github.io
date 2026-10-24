import enUi from '../locales/en/ui.js';
import ukUi from '../locales/uk/ui.js';
import './style.css';
import {getCompanyConfig} from './companies.js';
import {loadNamespace,getLang,setLang} from './i18n/index.js';
import {trackNavigationClick,trackProjectView,trackResumeDownload,trackSocialClick,trackThemeSwitch} from './analytics.js';
import {DOMAIN_META,DOMAIN_ORDER,enrichProject,projectUrl} from './project-data.js';

let projects=[];let activeDomain='all';let activeCompany=null;let searchQuery='';
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
if(!location.search&&location.hash==='#projects'){try{const state=JSON.parse(sessionStorage.getItem('portfolioFilters')||'{}');activeDomain=DOMAIN_ORDER.includes(state.domain)?state.domain:'all';activeCompany=state.company||null;searchQuery=state.query||''}catch{}}
document.addEventListener('click',event=>{if(event.target.closest('[data-project]'))sessionStorage.setItem('portfolioFilters',JSON.stringify({domain:activeDomain,company:activeCompany,query:searchQuery}))});
const safe=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const COPY={
  en:{sidebarRole:'Senior / Staff Software Engineer · Tech Lead · PhD',download:'Download CV',language:'Українська',light:'Light theme',dark:'Dark theme',nav:{about:'About',directions:'Directions',projects:'Projects',experience:'Experience',skills:'Skills',research:'Research',education:'Education',contact:'Contact'},hero:{kicker:'Senior / Staff Software Engineer · Tech Lead · PhD',title:'I turn complex ideas into reliable products.',lead:'I analyze the challenge, architect the system, build, verify, and support the outcome — across mobile, web, low-level systems, IoT, and applied research.',projects:'Explore projects',contact:'Start a conversation',cv:'Download CV',years:'years in software',directions:'technology directions',research:'research & engineering',place:'Based in Ukraine · Working internationally'},sections:{directions:['Capabilities','One engineering mindset. Different technological contexts.','Choose a direction to see related work. Every project receives the same attention to context, decisions and delivery.'],projects:['Project archive','Work across products, platforms and research.','Equal presentation, clear responsibilities and enough technical detail to understand the work.'],experience:['Experience & approach','From problem framing to long-term support.','Commercial work, independent products, technical leadership and teaching form one continuous engineering practice.'],skills:['Competencies','Tools connected to real work.','Select a competency to see its practical use and the projects where it appears.'],research:['Research & R&D','Research translated into engineering value.'],education:['Education','A foundation for continuous learning.'],contact:['Let’s work together','A team role, a product idea or a research challenge?','Tell me what you are building and what makes it difficult. I will be glad to discuss where my experience can help.']},filters:{all:'All',search:'Search projects and technologies…',reset:'Reset filters',found:n=>`${n} project${n===1?'':'s'}`,empty:'No projects match these filters.'},directionText:{android:'Native mobile products, TV experiences and platform integrations.',kmp:'Shared Kotlin foundations for products across platforms.',flutter:'Cross-platform apps, product UI and application architecture.',web:'Fast, accessible platforms deployed at the edge.',iot:'Connected devices, telemetry and reliable radio communication.',embedded:'Native libraries, hardware integration, and resource-constrained systems.',research:'Applied algorithms, publications, patents, grants and technical competitions.'},approach:[{num:'01',title:'Understand',icon:'fas fa-compass'},{num:'02',title:'Design',icon:'fas fa-sitemap'},{num:'03',title:'Build',icon:'fas fa-code'},{num:'04',title:'Verify',icon:'fas fa-shield-alt'},{num:'05',title:'Support',icon:'fas fa-sync-alt'}],project:'View project',companyProjects:'Related projects',skillProjects:'Related projects',current:'Current',educationHigher:'Higher education',educationFoundation:'Secondary education',educationFoundationIntro:'Earlier milestones that established the academic foundation for engineering study.',educationDetails:'Degree details',educationProgram:'Programme',educationDiploma:'Diploma',researchLabels:{patents:'Patents',publications:'Scientific publications',conferences:'Conference proceedings',awards:'Awards & activities'},researchHub:{phdBadge:'PhD Dissertation',patentBadge:'Utility Model Patent',monographBadge:'Academic Monograph',coreMilestones:'Core Research Milestones',archiveTitle:'Scientific Publications Archive',archiveSubtitle:'68 peer-reviewed publications and conference proceedings across 12 years of research.',searchPlaceholder:'Search publications, topics, authors, or venues…',allYears:'All years',allPublishers:'All venues',copyCitation:'Copy citation',copied:'Copied!',viewDoi:'Open DOI',publications:'publications',empty:'No publications match your search criteria.',awardsTitle:'Academic Honors & Activities'},educationFocus:'Research focus:',cvModal:enUi.cvModal},
  uk:{sidebarRole:'Senior / Staff інженер-програміст · Техлід · PhD',download:'Завантажити CV',language:'English',light:'Світла тема',dark:'Темна тема',nav:{about:'Про мене',directions:'Напрями',projects:'Проєкти',experience:'Досвід',skills:'Компетенції',research:'Дослідження',education:'Освіта',contact:'Контакти'},hero:{kicker:'Senior / Staff інженер-програміст · Техлід · PhD',title:'Перетворюю складні ідеї на надійні продукти.',lead:'Досліджую задачу, проєктую архітектуру, розробляю, верифікую та підтримую результат — у mobile, web, системній розробці, IoT і наукових дослідженнях.',projects:'Переглянути проєкти',contact:'Обговорити співпрацю',cv:'Завантажити CV',years:'років у розробці',directions:'технологічних напрямів',research:'дослідження та інженерія',place:'Україна · Міжнародна співпраця'},sections:{directions:['Технологічні напрями','Один інженерний підхід. Різні технологічні контексти.','Оберіть напрям, щоб побачити пов’язані роботи. Кожен проєкт отримує однакову увагу до контексту, рішень і реалізації.'],projects:['Архів проєктів','Продукти, платформи та дослідження.','Рівноправна подача, чітка відповідальність і достатньо технічних деталей, щоб зрозуміти виконану роботу.'],experience:['Досвід і підхід','Від формулювання задачі до довгострокової підтримки.','Комерційна розробка, власні продукти, технічне лідерство й викладання формують єдину інженерну практику.'],skills:['Компетенції','Інструменти, пов’язані з реальною роботою.','Оберіть компетенцію, щоб побачити практичне застосування та пов’язані проєкти.'],research:['Дослідження та R&D','Наукові результати з практичною інженерною цінністю.'],education:['Освіта','Основа для безперервного розвитку.'],contact:['Поговорімо про співпрацю','Роль у команді, продуктова ідея чи дослідницький виклик?','Розкажіть, що ви створюєте і в чому складність. Обговоримо, як мій досвід може допомогти.']},filters:{all:'Усі',search:'Пошук за проєктами й технологіями…',reset:'Скинути фільтри',found:n=>`${n} проєктів`,empty:'За цими фільтрами проєктів не знайдено.'},directionText:{android:'Нативні мобільні продукти, TV-досвід та інтеграції з платформою.',kmp:'Спільна Kotlin-основа для продуктів на різних платформах.',flutter:'Кросплатформні застосунки, продуктовий UI та архітектура.',web:'Високошвидкісні доступні (a11y) веб-платформи з edge-розгортанням.',iot:'Підключені пристрої, телеметрія та надійний радіозв’язок.',embedded:'Нативні бібліотеки, інтеграція з апаратним забезпеченням та системи з обмеженими ресурсами.',research:'Прикладні алгоритми, публікації, патенти, гранти й технічні конкурси.'},approach:[{num:'01',title:'Зрозуміти',icon:'fas fa-compass'},{num:'02',title:'Спроєктувати',icon:'fas fa-sitemap'},{num:'03',title:'Створити',icon:'fas fa-code'},{num:'04',title:'Перевірити',icon:'fas fa-shield-alt'},{num:'05',title:'Підтримувати',icon:'fas fa-sync-alt'}],project:'Відкрити проєкт',companyProjects:'Пов’язані проєкти',skillProjects:'Пов’язані проєкти',current:'Зараз',educationHigher:'Вища освіта',educationFoundation:'Середня освіта',educationFoundationIntro:'Ранні освітні етапи, що заклали академічну основу для подальшого інженерного навчання.',educationDetails:'Деталі диплома',educationProgram:'Освітня програма',educationDiploma:'Диплом',researchLabels:{patents:'Патенти',publications:'Наукові публікації',conferences:'Матеріали конференцій',awards:'Нагороди та діяльність'},researchHub:{phdBadge:'Дисертація PhD',patentBadge:'Патент на корисну модель',monographBadge:'Академічна монографія',coreMilestones:'Ключові наукові досягнення',archiveTitle:'Реєстр наукових праць',archiveSubtitle:'68 рецензованих публікацій у наукових журналах та матеріалах конференцій за 12 років досліджень.',searchPlaceholder:'Пошук публікацій, тем, авторів або видань…',allYears:'Усі роки',allPublishers:'Усі видання',copyCitation:'Скопіювати цитування',copied:'Скопійовано!',viewDoi:'Відкрити DOI',publications:'публікацій',empty:'За цим запитом публікацій не знайдено.',awardsTitle:'Відзнаки та академічна діяльність'},educationFocus:'Напрям досліджень:',cvModal:ukUi.cvModal},
};
const copy=()=>COPY[getLang()];
function renderProfile(ui){
  const uk = getLang() === 'uk';
  if(!ui?.about?.bento) return;
  const sections = ui.about.bento;

  $('#profile-notes').innerHTML=sections.map(s=>`
    <article class="profile-note profile-note-${s.kind}${s.isWide ? ' profile-note-wide' : ''} reveal" style="--card-color:${s.color};--card-rgb:${s.rgb}">
      <div class="profile-note-top">
        <span class="profile-note-index">${s.index}</span>
        <span class="profile-note-icon"><i class="${s.icon}" aria-hidden="true"></i></span>
      </div>
      <div class="profile-note-metric-group">
        <span class="profile-note-metric">${s.metric}</span>
        <span class="profile-note-metric-label">${s.metricLabel}</span>
      </div>
      <h3 class="profile-note-title">${s.title}</h3>
      <ul class="profile-note-points">
        ${s.points.map(p=>`<li><strong>${safe(p.lead)}:</strong> ${safe(p.text)}</li>`).join('')}
      </ul>
      <div class="profile-note-tags">
        ${s.tags.map(t=>`<span class="profile-note-tag">${safe(t)}</span>`).join('')}
      </div>
    </article>
  `).join('');

  $$('.profile-note').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.setProperty('--spotlight-opacity', '0');
    });
  });

  $('#approach-kicker').textContent=uk?'Робочий цикл':'Delivery loop';
  $('#approach-title').textContent=uk?'Як я рухаю технологічний проєкт уперед.':'How I move a technical project forward.';
}

function applyCopy(){const c=copy();document.documentElement.lang=getLang();$('#sidebar-role').textContent=c.sidebarRole;if($('#sidebar-cv-label'))$('#sidebar-cv-label').textContent=c.download;$('#lang-label').textContent=c.language;Object.entries(c.nav).forEach(([k,v])=>{const el=$(`[data-nav="${k}"]`);if(el)el.textContent=v});[['hero-kicker','kicker'],['hero-title','title'],['hero-lead','lead'],['proof-years','years'],['proof-directions','directions'],['proof-research','research'],['portrait-caption','place']].forEach(([id,k])=>$('#'+id).textContent=c.hero[k]);$('#hero-projects').childNodes[0].textContent=c.hero.projects+' ';$('#hero-contact').textContent=c.hero.contact;if($('#hero-cv'))$('#hero-cv').innerHTML=c.hero.cv+' <i class="fas fa-arrow-down"></i>';['directions','projects','experience','skills','research','education'].forEach(section=>{const values=c.sections[section];$(`#${section}-kicker`).textContent=values[0];$(`#${section}-title`).textContent=values[1];const intro=$(`#${section}-intro`);if(intro&&values[2])intro.textContent=values[2]});$('#contact-kicker').textContent=c.sections.contact[0];$('#contact-title').textContent=c.sections.contact[1];$('#contact-copy').textContent=c.sections.contact[2];$('#project-search').placeholder=c.filters.search;$('#clear-filter-btn span').textContent=c.filters.reset;if($('#cv-dialog-title')&&c.cvModal){$('#cv-dialog-title').textContent=c.cvModal.title;$('#cv-dialog-subtitle').textContent=c.cvModal.subtitle;$('#cv-staff-badge').textContent=c.cvModal.staffBadge;$('#cv-staff-title').textContent=c.cvModal.staffTitle;$('#cv-staff-desc').textContent=c.cvModal.staffDesc;$('#cv-staff-btn').textContent=c.cvModal.staffBtn;$('#cv-android-badge').textContent=c.cvModal.androidBadge;$('#cv-android-title').textContent=c.cvModal.androidTitle;$('#cv-android-desc').textContent=c.cvModal.androidDesc;$('#cv-android-btn').textContent=c.cvModal.androidBtn;$('#cv-dialog-footer-note').textContent=c.cvModal.footerNote;$('#cv-dialog-close').setAttribute('aria-label',c.cvModal.closeLabel);$('#cv-kicker-label').textContent=c.cvModal.kicker;$('.cv-direct-link').textContent=c.cvModal.directLabel;$('.cv-direct-link').title=c.cvModal.directLabel;$$('[data-cv-format]').forEach(el=>el.textContent=c.cvModal.format);$$('[data-cv-text-format]').forEach(el=>el.textContent=c.cvModal.textFormat);}updateThemeLabel()}

function initCvModal() {
  const dialog = $('#cv-dialog');
  if (!dialog) return;
  let trigger = null;
  const openModal = event => {
    trigger = event.currentTarget;
    const sidebar = $('#sidebar');
    if (window.innerWidth <= 768 && sidebar?.classList.contains('open')) {
      sidebar.classList.remove('open');
      $('#mobile-overlay')?.classList.remove('active');
      $('#mobile-menu-btn')?.setAttribute('aria-expanded', 'false');
    }
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    $('#cv-dialog-close').focus();
  };
  const closeModal = () => dialog.close();
  $('#sidebar-cv')?.addEventListener('click', openModal);
  $('#hero-cv')?.addEventListener('click', openModal);
  $('#cv-dialog-close')?.addEventListener('click', closeModal);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeModal(); });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    trigger?.focus();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href]')];
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  $$('[data-track-cv]').forEach(button => button.addEventListener('click', () => {
    trackResumeDownload(button.dataset.trackCv || 'android');
    setTimeout(closeModal, 300);
  }));
}

function initSidebar(){const sidebar=$('#sidebar'),menu=$('#mobile-menu-btn'),overlay=$('#mobile-overlay'),pin=$('#sidebar-pin');let timer;const setExpanded=expanded=>{sidebar.classList.toggle('expanded',expanded);pin.setAttribute('aria-expanded',String(expanded));if(!expanded&&document.activeElement===pin)pin.blur()};const closeMobile=()=>{sidebar.classList.remove('open');overlay.classList.remove('active');menu.setAttribute('aria-expanded','false');document.body.style.overflow='';menu.focus({preventScroll:true})};pin.addEventListener('click',()=>setExpanded(!sidebar.classList.contains('expanded')));sidebar.addEventListener('mouseleave',()=>{timer=setTimeout(()=>{if(!sidebar.matches(':focus-within')&&!matchMedia('(hover: none)').matches)setExpanded(false)},150)});sidebar.addEventListener('mouseenter',()=>clearTimeout(timer));menu.addEventListener('click',()=>{const open=!sidebar.classList.contains('open');sidebar.classList.toggle('open',open);overlay.classList.toggle('active',open);menu.setAttribute('aria-expanded',open);document.body.style.overflow=open?'hidden':'';if(open)sidebar.querySelector('a').focus()});overlay.addEventListener('click',closeMobile);$$('.nav-link').forEach(a=>a.addEventListener('click',()=>{trackNavigationClick(a.hash.slice(1));if(innerWidth<=768)closeMobile()}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){setExpanded(false);if(sidebar.classList.contains('open'))closeMobile()}if(e.key==='Tab'&&sidebar.classList.contains('open'))trapFocus(e,sidebar)});const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)$$('.nav-link').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}),{rootMargin:'-35% 0px -55%'});$$('main>section[id]').forEach(s=>io.observe(s))}
function trapFocus(e,container){const focus=$$('a[href],button,input').filter(el=>container.contains(el)&&!el.disabled);if(!focus.length)return;const first=focus[0],last=focus.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
function initTheme(){const btn=$('#theme-toggle');btn.addEventListener('click',()=>{const light=document.documentElement.dataset.theme==='light';if(light){delete document.documentElement.dataset.theme;localStorage.setItem('theme','dark');trackThemeSwitch('dark')}else{document.documentElement.dataset.theme='light';localStorage.setItem('theme','light');trackThemeSwitch('light')}updateThemeLabel()});updateThemeLabel()}
function updateThemeLabel(){const light=document.documentElement.dataset.theme==='light';$('#theme-label').textContent=light?copy().dark:copy().light;$('#theme-icon').className=light?'fas fa-moon':'fas fa-sun'}

function renderDirections(){
  const c=copy();
  const domainColors = {
    android: { hex: '#10b981', rgb: '16, 185, 129' },
    flutter: { hex: '#38bdf8', rgb: '56, 189, 248' },
    web: { hex: '#818cf8', rgb: '129, 140, 248' },
    iot: { hex: '#22d3ee', rgb: '34, 211, 238' },
    embedded: { hex: '#f59e0b', rgb: '245, 158, 11' },
    research: { hex: '#f43f5e', rgb: '244, 63, 94' }
  };
  $('#directions-grid').innerHTML=DOMAIN_ORDER.slice(1).map((key, idx)=>{
    const count=projects.filter(p=>p.domains.includes(key)).length;
    const colors = domainColors[key] || { hex: 'var(--accent)', rgb: 'var(--accent-rgb)' };
    const idxFormatted = String(idx + 1).padStart(2, '0');
    return `<button class="direction-card reveal direction-${key}" data-domain="${key}" style="--domain-color:${colors.hex};--domain-rgb:${colors.rgb}">
      <div class="direction-card-header">
        <i class="${DOMAIN_META[key].icon}" aria-hidden="true"></i>
        <span class="direction-card-index">${idxFormatted}</span>
      </div>
      <h3>${DOMAIN_META[key][getLang()]}</h3>
      <p>${c.directionText[key]}</p>
      <span class="direction-count">${c.filters.found(count)} <span class="arrow" aria-hidden="true">→</span></span>
    </button>`;
  }).join('');

  $$('.direction-card').forEach(btn=>{
    btn.addEventListener('mousemove', e=>{
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--spotlight-x', `${x}px`);
      btn.style.setProperty('--spotlight-y', `${y}px`);
      btn.style.setProperty('--spotlight-opacity', '1');
    });
    btn.addEventListener('mouseleave', ()=>{
      btn.style.setProperty('--spotlight-opacity', '0');
    });
    btn.addEventListener('click',()=>{
      activeDomain=btn.dataset.domain;
      syncUrl();
      renderProjectFilters();
      renderProjects();
      const projectsEl = $('#projects');
      if(projectsEl){
        const isReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        projectsEl.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth' });
      }
    });
  });
}
function renderProjectFilters(){const c=copy(),lang=getLang();$('#domain-filters').innerHTML=DOMAIN_ORDER.map(key=>{const isActive=key===activeDomain;if(key==='all'){return `<button type="button" class="filter-chip filter-chip-all ${isActive?'active':''}" data-domain="all"><span>${c.filters.all}</span></button>`}const meta=DOMAIN_META[key]||{};const label=meta[lang]||key;return `<button type="button" class="filter-chip filter-chip-${key} ${isActive?'active':''}" data-domain="${key}" aria-label="${safe(label)}" title="${safe(label)}"><i class="${safe(meta.icon||'fas fa-tag')}" aria-hidden="true"></i><span class="filter-chip-label">${safe(label)}</span></button>`}).join('');$$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{activeDomain=btn.dataset.domain;syncUrl();renderProjectFilters();renderProjects()}))}
function filteredProjects(){const q=searchQuery.trim().toLowerCase();return projects.filter(p=>(activeDomain==='all'||p.domains.includes(activeDomain))&&(!activeCompany||getCompanyConfig(p.company).shortName===getCompanyConfig(activeCompany).shortName)&&(!q||[p.title,p.description,p.role,...p.technologies,...p.tags].join(' ').toLowerCase().includes(q)))}
function renderProjects(){const c=copy(),list=filteredProjects();$('#project-count').textContent=c.filters.found(list.length);$('#clear-filter-btn').classList.toggle('hidden',activeDomain==='all'&&!activeCompany&&!searchQuery);$('#projects-container').innerHTML=list.length?list.map(p=>`<a class="project-card reveal" href="${projectUrl(p)}" data-project="${safe(p.title)}"><div class="project-cover">${p.banner?`<img src="/${p.banner}" alt="" loading="lazy">`:`<div class="project-fallback" style="background:${p.imageColor}">${safe(p.title)}</div>`}</div><div class="project-body"><span class="project-meta">${safe(p.role)} · ${safe(p.date)}</span><h3>${safe(p.title)}</h3><p>${safe(p.description)}</p><div class="project-footer"><div class="project-domains">${p.domains.map(d=>`<span class="project-domain domain-${d}">${(DOMAIN_META[d]&&DOMAIN_META[d][getLang()])||d}</span>`).join('')}</div><span aria-label="${c.project}">↗</span></div></div></a>`).join(''):`<div class="empty-state">${c.filters.empty}<br><a href="#contact" class="text-link">${c.nav.contact} →</a></div>`;$$('[data-project]').forEach(a=>a.addEventListener('click',()=>{trackProjectView(a.dataset.project);sessionStorage.setItem('portfolioScroll',String(scrollY))}));observeReveals()}
function syncUrl(){const params=new URLSearchParams();if(activeDomain!=='all')params.set('domain',activeDomain);if(activeCompany)params.set('company',activeCompany);if(searchQuery)params.set('q',searchQuery);history.replaceState(null,'',params.size?`${location.pathname}?${params}#projects`:location.pathname+(location.hash||''))}

const toMonthIndex=value=>{const match=String(value||'').match(/^(\d{2})\.(\d{4})$/);return match?Number(match[2])*12+Number(match[1])-1:null};
const companyMark=company=>company.logoImg?`<img src="/${safe(company.logoImg)}" alt="" loading="lazy">`:`<i class="${safe(company.icon||'fas fa-building')}" aria-hidden="true"></i>`;

function renderExperience(data){
  const c=copy(),uk=getLang()==='uk';
  const labels=uk?{time:'Час',present:'Зараз',hint:'Оберіть смугу, щоб переглянути роль і період',details:'Деталі кар’єрних етапів'}:{time:'Time',present:'Present',hint:'Select a bar to view its role and period',details:'Career chapter details'};
  const now=new Date(),currentMonth=now.getFullYear()*12+now.getMonth(),currentBoundary=currentMonth+1;
  const entries=data.map((exp,index)=>{const company=getCompanyConfig(exp.company_name);const start=toMonthIndex(exp.start_date);const parsedEnd=toMonthIndex(exp.end_date);const endBoundary=exp.is_current?currentBoundary:(parsedEnd===null?null:parsedEnd+1);return {exp,index,company,start,endBoundary}});
  const plotted=entries.filter(item=>item.start!==null&&item.endBoundary!==null);
  const firstMonth=Math.min(...plotted.map(item=>item.start));
  const lastBoundary=Math.max(currentBoundary,...plotted.map(item=>item.endBoundary));
  const range=Math.max(1,lastBoundary-firstMonth);
  const laneOrder=['DᎥᗰᗩᒪᎥᑎᗩ','IT Co.','Nitrix','CHI','MEGOGO','MITI','KhNUIA'];
  plotted.sort((a,b)=>laneOrder.indexOf(a.company.shortName)-laneOrder.indexOf(b.company.shortName));
  const firstYear=Math.floor(firstMonth/12),lastYear=Math.floor((lastBoundary-1)/12);
  const ticks=[];
  for(let year=lastYear;year>=firstYear;year--){const boundary=year===firstYear?firstMonth:year*12;if(boundary>lastBoundary)continue;const top=(lastBoundary-boundary)/range*100;const minor=year!==firstYear&&year!==lastYear&&(year-firstYear)%2!==0;ticks.push({year,top,minor})}
  const barLabel=item=>`${item.exp.company_name}, ${item.exp.role}, ${item.exp.start_date} — ${item.exp.end_date}`;
  const bars=plotted.map(item=>{const top=(lastBoundary-item.endBoundary)/range*100;const height=(item.endBoundary-item.start)/range*100;return `<div class="career-lane" style="--company-color:${safe(item.company.color||'var(--accent)')}"><button type="button" class="career-bar${item.exp.is_current?' is-current':''}" data-experience-index="${item.index}" style="--bar-top:${top.toFixed(3)}%;--bar-height:${height.toFixed(3)}%" aria-label="${safe(barLabel(item))}"><span class="career-bar-core"></span><span class="career-bar-end" aria-hidden="true"></span></button></div>`}).join('');
  const axisTicks=ticks.map(tick=>`<span class="career-axis-tick${tick.minor?' is-minor':''}" style="--tick-top:${tick.top.toFixed(3)}%">${tick.year}</span>`).join('');
  const gridTicks=ticks.map(tick=>`<span class="career-grid-line${tick.minor?' is-minor':''}" style="--tick-top:${tick.top.toFixed(3)}%"></span>`).join('');
  $('#approach-strip').innerHTML=c.approach.map((item,i)=>`<div class="approach-step" data-step="${item.num}"><div class="approach-step-top"><div class="approach-step-icon"><i class="${item.icon}" aria-hidden="true"></i></div><span class="approach-step-num">${item.num}</span></div><div class="approach-step-bottom"><strong class="approach-step-title">${safe(item.title)}</strong>${i<c.approach.length-1?`<span class="approach-step-arrow" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>`:`<span class="approach-step-loop" aria-hidden="true" title="${uk?'Безперервний цикл':'Continuous cycle'}"><i class="fas fa-redo-alt"></i></span>`}</div></div>`).join('');
  $('#career-chart').innerHTML=`<section class="career-visual reveal" aria-label="${uk?'Візуальна кар’єрна хронологія':'Visual career timeline'}"><div class="career-chart-grid"><div class="career-axis" aria-hidden="true"><strong>${labels.present}</strong>${axisTicks}</div><div class="career-plot"><span class="career-now-line"></span>${gridTicks}<div class="career-lanes" style="--lane-count:${plotted.length}">${bars}</div></div></div><div id="career-readout" class="career-readout" aria-live="polite"><i class="fas fa-arrow-up" aria-hidden="true"></i><span>${labels.hint}</span></div></section>`;
  $('#career-details-label').textContent=labels.details;
  $('#experience-timeline').innerHTML=data.map((exp,index)=>{const company=getCompanyConfig(exp.company_name);const period=`${exp.start_date} — ${exp.end_date}`;return `<details class="experience-item reveal" data-experience-index="${index}" style="--company-color:${safe(company.color||'var(--accent)')}"><summary class="experience-summary"><span class="experience-logo">${companyMark(company)}</span><span class="experience-position"><span class="experience-company">${safe(exp.company_name)}${exp.is_current?`<span class="current-badge">${c.current}</span>`:''}</span><span class="experience-role">${safe(exp.role)}</span><span class="sr-only">${safe(period)}</span></span><i class="fas fa-chevron-down experience-chevron"></i></summary><div class="experience-body"><p class="experience-period">${safe(period)}</p><ul>${(exp.tasks||[]).map(t=>`<li>${safe(t)}</li>`).join('')}</ul><button class="company-projects" data-company="${safe(exp.company_name)}">${c.companyProjects} →</button></div></details>`}).join('');
  const setActive=index=>{const item=entries.find(entry=>entry.index===Number(index));if(!item)return;$$('[data-experience-index]').forEach(node=>node.classList.toggle('is-active',Number(node.dataset.experienceIndex)===item.index));$('#career-readout').innerHTML=`<span class="career-readout-swatch" style="--company-color:${safe(item.company.color||'var(--accent)')}"></span><strong>${safe(item.exp.company_name)}</strong><span>${safe(item.exp.role)}</span><small>${safe(item.exp.start_date)} — ${safe(item.exp.end_date)}</small>`};
  $$('.career-bar').forEach(trigger=>{trigger.addEventListener('mouseenter',()=>setActive(trigger.dataset.experienceIndex));trigger.addEventListener('focus',()=>setActive(trigger.dataset.experienceIndex));trigger.addEventListener('click',()=>{const item=$(`.experience-item[data-experience-index="${trigger.dataset.experienceIndex}"]`);setActive(trigger.dataset.experienceIndex);item.open=true;item.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'})})});
  $$('.experience-item').forEach(item=>{const activate=()=>setActive(item.dataset.experienceIndex);item.addEventListener('mouseenter',activate);item.querySelector('summary').addEventListener('focus',activate);item.addEventListener('toggle',()=>{if(item.open)activate()})});
  $$('.company-projects').forEach(b=>b.addEventListener('click',()=>{activeCompany=b.dataset.company;syncUrl();renderProjects();$('#projects').scrollIntoView()}));
}
let activeSkillCategory=null;
const SKILL_ICONS={programming_languages:'fas fa-code',ai_orchestration_and_agentic_engineering:'fas fa-robot',systems_and_cpp:'fas fa-microchip',modern_web_and_edge:'fas fa-globe',iot_and_embedded:'fas fa-satellite-dish',cybersecurity_and_research:'fas fa-shield-alt',android_core_and_ui:'fab fa-android',architecture_and_design:'fas fa-sitemap',asynchrony_and_networking:'fas fa-network-wired',databases_and_local_storage:'fas fa-database',cloud_and_backend:'fas fa-cloud',dependency_injection:'fas fa-cube',multimedia_hardware_and_camera:'fas fa-camera',testing_and_debugging:'fas fa-bug',monetization_analytics_and_devops:'fas fa-chart-line',inferred_game_dev_and_publishing:'fas fa-gamepad'};

function getProjectsForSkill(skillName,usageText){
  const sEsc=skillName.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const regExact=new RegExp('(^|[\\s/,+()])'+sEsc+'($|[\\s/,+()])','i');
  return projects.filter(p=>{
    const hasTech=(p.technologies||[]).some(t=>regExact.test(t)||t.toLowerCase()===skillName.toLowerCase());
    const hasTag=(p.tags||[]).some(t=>regExact.test(t)||t.toLowerCase()===skillName.toLowerCase());
    const hasTitle=regExact.test(p.title);
    const pMainTitle=p.title.split('—')[0].trim();
    const hasUsage=usageText&&(
      usageText.toLowerCase().includes(pMainTitle.toLowerCase())||
      (p.id&&usageText.toLowerCase().includes(p.id.toLowerCase()))
    );
    return hasTech||hasTag||hasTitle||hasUsage;
  });
}

function renderSkills(data,details,ui){
  const categories=data.skills_profile.categories;
  const keys=Object.keys(categories);
  if(!activeSkillCategory||!categories[activeSkillCategory])activeSkillCategory=keys[0];
  const uk=getLang()==='uk';
  const updateSheet=()=>{
    const key=activeSkillCategory;
    const items=categories[key]||[];
    const icon=SKILL_ICONS[key]||'fas fa-code';
    const title=ui.skills[key]||key;
    const catDetails=details.filter(d=>d.category===key);
    const sheet=$('#skills-sheet');
    if(!sheet)return;
    sheet.innerHTML=`<header class="skills-sheet-header"><div class="skills-sheet-title-group"><div class="skills-sheet-icon"><i class="${icon}" aria-hidden="true"></i></div><div><span class="skills-sheet-eyebrow">${uk?'Розділ досьє':'Dossier chapter'} · ${items.length} ${uk?'компетенцій':'skills'}</span><h3 class="skills-sheet-title">${safe(title)}</h3></div></div></header><div class="skills-entries-list">${catDetails.map(item=>{
      const matched=getProjectsForSkill(item.skill,item.usage);
      const initial=matched.slice(0,3);
      const extra=matched.slice(3);
      const renderTag=p=>`<a href="${projectUrl(p)}" class="skills-project-tag" data-project="${safe(p.title)}"><span>${safe(p.title)}</span> <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`;
      return `<article class="skills-entry"><div class="skills-entry-top"><span class="skills-entry-dot" aria-hidden="true"></span><h4 class="skills-entry-name">${safe(item.skill)}</h4></div>${item.description?`<p class="skills-entry-desc">${safe(item.description)}</p>`:''}${item.usage?`<div class="skills-entry-usage"><span class="skills-usage-badge"><i class="fas fa-terminal" aria-hidden="true"></i> ${uk?'Практичне застосування':'Production usage'}</span><p class="skills-usage-text">${safe(item.usage)}</p>${matched.length?`<div class="skills-usage-projects"><span class="skills-usage-projects-label"><i class="fas fa-folder-open" aria-hidden="true"></i> ${uk?'Проєкти:':'Projects:'}</span><div class="skills-usage-tags">${initial.map(renderTag).join('')}${extra.length?`<span class="skills-extra-projects hidden">${extra.map(renderTag).join('')}</span><button type="button" class="skills-more-projects-btn" aria-label="${uk?'Показати більше проєктів':'Show more projects'}">+${extra.length} ${uk?'ще':'more'}</button>`:''}</div></div>`:''}</div>`:''}</article>`;
    }).join('')}</div>`;
    sheet.scrollTop=0;
    $$('.skills-more-projects-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const extra=btn.previousElementSibling;
        if(extra&&extra.classList.contains('skills-extra-projects')){
          extra.classList.remove('hidden');
          btn.remove();
        }
      });
    });
    $$('.skills-project-tag').forEach(a=>a.addEventListener('click',()=>{trackProjectView(a.dataset.project);sessionStorage.setItem('portfolioScroll',String(scrollY))}));
  };
  $('#skills-container').innerHTML=`<div class="skills-notebook"><div class="skills-sidebar"><div class="skills-sidebar-header"><span class="eyebrow">${uk?'Категорії':'Categories'}</span><span class="skills-total-badge">${keys.length}</span></div><nav class="skills-tabs" role="tablist" aria-label="${uk?'Категорії компетенцій':'Competency categories'}">${keys.map(key=>{const items=categories[key]||[];const isActive=key===activeSkillCategory;const icon=SKILL_ICONS[key]||'fas fa-code';const title=ui.skills[key]||key;return `<button type="button" role="tab" class="skills-tab-btn ${isActive?'active':''}" data-category="${key}" aria-selected="${isActive}"><span class="skills-tab-icon"><i class="${icon}" aria-hidden="true"></i></span><span class="skills-tab-title">${safe(title)}</span><span class="skills-tab-count">${items.length}</span></button>`}).join('')}</nav></div><div class="skills-sheet" id="skills-sheet" role="tabpanel" aria-live="polite"></div></div>`;
  updateSheet();
  $$('.skills-tab-btn').forEach(btn=>{btn.addEventListener('click',()=>{if(activeSkillCategory===btn.dataset.category)return;activeSkillCategory=btn.dataset.category;$$('.skills-tab-btn').forEach(b=>{const isCurrent=b.dataset.category===activeSkillCategory;b.classList.toggle('active',isCurrent);b.setAttribute('aria-selected',String(isCurrent))});updateSheet()})});
}

let activeResearchYear='2026';
let activeResearchPublisher='all';
let researchSearchQuery='';

function getApaCitation(p){
  const authorsStr=(p.authors||[]).join(', ');
  const titleStr=p.title.endsWith('.')?p.title:p.title+'.';
  const sourceStr=p.source?`${p.source}${p.details?', '+p.details:''}.`:'';
  const doiStr=p.doi?` https://doi.org/${p.doi}`:'';
  return `${authorsStr} (${p.year}). ${titleStr} ${sourceStr}${doiStr}`.trim();
}

function renderResearch(data){
  const uk=getLang()==='uk';
  const c=copy();
  const rl=c.researchHub||{};
  const profileIcons={Scopus:'fas fa-graduation-cap',ORCID:'fas fa-id-card',Google_Scholar:'fas fa-search'};
  $('#academic-profiles').innerHTML=Object.entries(data.academic_profiles||{}).map(([name,url])=>{
    const icon=profileIcons[name]||'fas fa-external-link-alt';
    const label=name.replace('_',' ');
    return `<a href="${url}" target="_blank" rel="noopener" class="academic-profile-link"><i class="${icon}" aria-hidden="true"></i> <span>${safe(label)}</span> ↗</a>`;
  }).join('');

  const container=$('#research-container');
  if(!container)return;

  const diss=data.dissertation||{};
  const patent=(data.patents||[])[0]||{};
  const monograph=(data.monographs||[])[0]||{};
  const allPubs=data.publications||[];
  const awards=data.awards_and_honors||[];

  const recentYears=['2026','2025','2024','2023','2022','2021'];
  const olderPubsCount=allPubs.filter(p=>p.year<=2020).length;
  const yearChips=[
    ...recentYears.map(yr=>({
      id:yr,
      label:yr,
      count:allPubs.filter(p=>String(p.year)===yr).length
    })),
    {
      id:'2014-2020',
      label:'2014–2020',
      count:olderPubsCount
    },
    {
      id:'all',
      label:rl.allYears||'All years',
      count:allPubs.length
    }
  ];

  const publisherCounts={
    all:allPubs.length,
    IEEE:allPubs.filter(p=>p.publisher==='IEEE').length,
    Springer:allPubs.filter(p=>p.publisher==='Springer').length,
    Journal:allPubs.filter(p=>p.type==='Journal').length
  };

  const renderPubsList=()=>{
    const listEl=$('#research-pubs-list');
    const countEl=$('#research-count-label');
    if(!listEl)return;

    let filtered=allPubs.filter(p=>{
      if(activeResearchYear!=='all'){
        if(activeResearchYear==='2014-2020'){
          if(p.year>2020)return false;
        }else if(String(p.year)!==String(activeResearchYear)){
          return false;
        }
      }
      if(activeResearchPublisher!=='all'){
        if(activeResearchPublisher==='IEEE'&&p.publisher!=='IEEE')return false;
        if(activeResearchPublisher==='Springer'&&p.publisher!=='Springer')return false;
        if(activeResearchPublisher==='Journal'&&p.type!=='Journal')return false;
      }
      if(researchSearchQuery){
        const q=researchSearchQuery.toLowerCase();
        const text=[p.title,p.source,p.details,...(p.authors||[]),String(p.year)].join(' ').toLowerCase();
        if(!text.includes(q))return false;
      }
      return true;
    });

    if(countEl)countEl.textContent=`${filtered.length} / ${allPubs.length}`;

    if(filtered.length===0){
      listEl.innerHTML=`<div class="research-empty-state"><i class="fas fa-search" aria-hidden="true"></i><p>${safe(rl.empty||'No publications match your search criteria.')}</p></div>`;
      return;
    }

    const renderLedgerRow=(p,showYearBadge=true)=>{
      const pubClass=p.publisher==='IEEE'?'pub-badge-ieee':p.publisher==='Springer'?'pub-badge-springer':'pub-badge-journal';
      const pubIcon=p.publisher==='IEEE'?'fas fa-microchip':p.publisher==='Springer'?'fas fa-book':'fas fa-scroll';
      const citation=getApaCitation(p);
      const authorsPreview=(p.authors||[]).map(a=>{
        const isMe=/Barannik D|Бараннік Д|Баранник Д/i.test(a);
        return isMe?`<strong class="pub-author-me">${safe(a)}</strong>`:`<span>${safe(a)}</span>`;
      }).join(', ');

      return `
        <article class="ledger-item" data-id="${p.id}">
          <div class="ledger-row" role="button" tabindex="0" aria-expanded="false" aria-controls="ledger-drawer-${p.id}">
            <div class="ledger-col-meta">
              <span class="ledger-id">#${p.id}</span>
              ${showYearBadge?`<span class="ledger-year-pill">${p.year}</span>`:''}
              <span class="pub-badge ${pubClass}"><i class="${pubIcon}" aria-hidden="true"></i> ${safe(p.publisher)}</span>
            </div>
            <div class="ledger-col-main">
              <h4 class="ledger-title">${safe(p.title)}</h4>
              <div class="ledger-authors-preview">${authorsPreview}</div>
            </div>
            <div class="ledger-col-actions">
              ${p.doi?`<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener" class="ledger-doi-pill" title="DOI: ${safe(p.doi)}" onclick="event.stopPropagation()"><span>DOI</span> <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`:''}
              <span class="ledger-expand-icon" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>
            </div>
          </div>
          <div id="ledger-drawer-${p.id}" class="ledger-drawer" hidden>
            <div class="ledger-drawer-content">
              <div class="ledger-detail-row">
                <span class="ledger-detail-label"><i class="fas fa-users" aria-hidden="true"></i> ${uk?'Співавтори:':'Authors:'}</span>
                <p class="ledger-detail-value">${authorsPreview}</p>
              </div>
              <div class="ledger-detail-row">
                <span class="ledger-detail-label"><i class="fas fa-bookmark" aria-hidden="true"></i> ${uk?'Видання:':'Venue:'}</span>
                <p class="ledger-detail-value"><em>${safe(p.source)}</em>${p.details?', '+safe(p.details):''}</p>
              </div>
              <div class="ledger-drawer-actions">
                <button type="button" class="ledger-copy-citation-btn" data-citation="${safe(citation)}">
                  <i class="fas fa-quote-right" aria-hidden="true"></i> <span>${safe(rl.copyCitation||'Copy citation')}</span>
                </button>
                ${p.doi?`<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener" class="ledger-doi-drawer-btn"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> <span>${safe(rl.viewDoi||'Open DOI')} (${safe(p.doi)})</span></a>`:''}
              </div>
            </div>
          </div>
        </article>
      `;
    };

    if(activeResearchYear==='all'&&!researchSearchQuery){
      let html='';
      recentYears.forEach(yr=>{
        const yrPubs=filtered.filter(p=>String(p.year)===yr);
        if(!yrPubs.length)return;
        html+=`
          <div class="ledger-year-divider">
            <div class="ledger-year-divider-inner">
              <span class="ledger-year-heading">${yr}</span>
              <span class="ledger-year-count">${yrPubs.length} ${safe(rl.publications||'publications')}</span>
            </div>
          </div>
          ${yrPubs.map(p=>renderLedgerRow(p,false)).join('')}
        `;
      });
      const olderPubs=filtered.filter(p=>p.year<=2020);
      if(olderPubs.length){
        html+=`
          <div class="ledger-year-divider">
            <div class="ledger-year-divider-inner">
              <span class="ledger-year-heading">2014–2020</span>
              <span class="ledger-year-count">${olderPubs.length} ${safe(rl.publications||'publications')} · ${uk?'Ранні наукові праці':'Foundational Research'}</span>
            </div>
          </div>
          ${olderPubs.map(p=>renderLedgerRow(p,true)).join('')}
        `;
      }
      listEl.innerHTML=html;
    }else{
      const showYearBadge=activeResearchYear==='2014-2020'||Boolean(researchSearchQuery);
      listEl.innerHTML=filtered.map(p=>renderLedgerRow(p,showYearBadge)).join('');
    }

    listEl.querySelectorAll('.ledger-row').forEach(row=>{
      const item=row.closest('.ledger-item');
      const drawer=item.querySelector('.ledger-drawer');
      const toggle=()=>{
        const isExpanded=row.getAttribute('aria-expanded')==='true';
        row.setAttribute('aria-expanded',String(!isExpanded));
        row.classList.toggle('is-expanded',!isExpanded);
        if(drawer)drawer.hidden=isExpanded;
      };
      row.addEventListener('click',e=>{
        if(e.target.closest('a'))return;
        toggle();
      });
      row.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          toggle();
        }
      });
    });

    listEl.querySelectorAll('.ledger-copy-citation-btn').forEach(btn=>{
      btn.addEventListener('click',async e=>{
        e.stopPropagation();
        const citation=btn.dataset.citation;
        try{
          await navigator.clipboard.writeText(citation);
          const span=btn.querySelector('span');
          const orig=span.textContent;
          span.textContent=rl.copied||'Copied!';
          btn.classList.add('is-copied');
          setTimeout(()=>{
            span.textContent=orig;
            btn.classList.remove('is-copied');
          },2000);
        }catch(err){
          console.error(err);
        }
      });
    });
  };

  container.innerHTML=`
    <div class="research-flagships-heading">
      <span class="eyebrow">${safe(rl.coreMilestones||'Core Research Milestones')}</span>
      <div class="research-metrics-ribbon">
        <span><i class="fas fa-graduation-cap"></i> <strong>PhD</strong> 2025</span>
        <span><i class="fas fa-certificate"></i> <strong>1</strong> ${uk?'Патент':'Patent'}</span>
        <span><i class="fas fa-book"></i> <strong>1</strong> ${uk?'Монографія':'Monograph'}</span>
        <span><i class="fas fa-file-alt"></i> <strong>68</strong> ${uk?'Публікацій':'Publications'}</span>
      </div>
    </div>
    <div class="research-flagships-grid">
      <article class="flagship-card flagship-phd reveal">
        <div class="flagship-header">
          <div class="flagship-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
          <span class="flagship-badge">${safe(rl.phdBadge||'PhD Dissertation')} · 2025</span>
        </div>
        <h3 class="flagship-title">${safe(diss.title)}</h3>
        <p class="flagship-institution"><i class="fas fa-university" aria-hidden="true"></i> ${safe(diss.institution)}</p>
        <p class="flagship-specialty">${safe(diss.specialty)}</p>
        <p class="flagship-desc">${safe(diss.description)}</p>
      </article>

      <article class="flagship-card flagship-patent reveal">
        <div class="flagship-header">
          <div class="flagship-icon"><i class="fas fa-award" aria-hidden="true"></i></div>
          <span class="flagship-badge">${safe(rl.patentBadge||'Utility Model Patent')} · ${patent.year}</span>
        </div>
        <h3 class="flagship-title">${safe(patent.title)}</h3>
        <p class="flagship-patent-num"><i class="fas fa-stamp" aria-hidden="true"></i> <strong>${safe(patent.patent_number)}</strong> (${safe(patent.issue_date)})</p>
        <p class="flagship-desc">${safe(patent.description)}</p>
        <div class="flagship-project-link">
          <a href="/projects/libpolycodec/" class="skills-project-tag">
            <i class="fas fa-microchip" aria-hidden="true"></i> <span>LibPolyCodec Case Study</span> <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </article>

      <article class="flagship-card flagship-monograph reveal">
        <div class="flagship-header">
          <div class="flagship-icon"><i class="fas fa-book" aria-hidden="true"></i></div>
          <span class="flagship-badge">${safe(rl.monographBadge||'Academic Monograph')} · ${monograph.year}</span>
        </div>
        <h3 class="flagship-title">${safe(monograph.title)}</h3>
        <p class="flagship-publisher"><i class="fas fa-building" aria-hidden="true"></i> ${safe(monograph.publisher)}</p>
        <p class="flagship-authors">${safe((monograph.authors||[]).join(', '))}</p>
        <p class="flagship-desc">${safe(monograph.description)}</p>
      </article>
    </div>

    <div class="research-archive-block reveal">
      <div class="research-archive-header">
        <div>
          <span class="eyebrow">${uk?'Реєстр наукових праць':'Scientific Works Registry'}</span>
          <h3 class="research-archive-title">${safe(rl.archiveTitle||'Scientific Publications Archive')}</h3>
          <p class="research-archive-subtitle">${safe(rl.archiveSubtitle||'68 peer-reviewed publications across 12 years of research.')}</p>
        </div>
        <div class="research-archive-count-badge">
          <i class="fas fa-file-alt"></i> <span id="research-count-label">11 / 68</span>
        </div>
      </div>

      <div class="research-toolbar">
        <label class="research-search">
          <i class="fas fa-search" aria-hidden="true"></i>
          <input type="search" id="research-search-input" placeholder="${safe(rl.searchPlaceholder||'Search publications, topics, authors, or venues…')}" value="${safe(researchSearchQuery)}" autocomplete="off">
        </label>
        <div class="research-filter-pills">
          <div class="research-years-pills" role="tablist" aria-label="${uk?'Фільтр за роками':'Filter by year'}">
            ${yearChips.map(chip=>{
              const isActive=activeResearchYear===chip.id;
              return `<button type="button" class="research-chip ${isActive?'active':''}" data-year="${chip.id}"><span>${chip.label}</span> <span class="research-chip-count">${chip.count}</span></button>`;
            }).join('')}
          </div>
          <div class="research-publisher-pills" role="tablist" aria-label="${uk?'Фільтр видавництв':'Filter by publisher'}">
            ${['all','IEEE','Springer','Journal'].map(pub=>{
              const label=pub==='all'?(rl.allPublishers||'All venues'):pub;
              const count=publisherCounts[pub]||0;
              const isActive=activeResearchPublisher===pub;
              return `<button type="button" class="research-chip ${isActive?'active':''}" data-pub="${pub}"><span>${label}</span> <span class="research-chip-count">${count}</span></button>`;
            }).join('')}
          </div>
        </div>
      </div>

      <div id="research-pubs-list" class="research-pubs-list" aria-live="polite"></div>
    </div>

    ${awards.length?`
    <div class="research-awards-block reveal">
      <span class="eyebrow">${safe(rl.awardsTitle||'Academic Honors & Activities')}</span>
      <div class="research-awards-grid">
        ${awards.map(a=>`
          <div class="research-award-card">
            <div class="research-award-top">
              <span class="research-award-role"><i class="fas fa-medal"></i> ${safe(a.role)}</span>
              <span class="research-award-year">${a.year||''}</span>
            </div>
            <h4 class="research-award-title">${safe(a.title)}</h4>
            ${a.description?`<p class="research-award-desc">${safe(a.description)}</p>`:''}
          </div>
        `).join('')}
      </div>
    </div>`:''}
  `;

  renderPubsList();

  const searchInput=$('#research-search-input');
  if(searchInput){
    searchInput.addEventListener('input',e=>{
      researchSearchQuery=e.target.value.trim();
      renderPubsList();
    });
  }

  $$('.research-years-pills .research-chip').forEach(btn=>{
    btn.addEventListener('click',()=>{
      activeResearchYear=btn.dataset.year;
      $$('.research-years-pills .research-chip').forEach(b=>b.classList.toggle('active',b.dataset.year===activeResearchYear));
      renderPubsList();
    });
  });

  $$('.research-publisher-pills .research-chip').forEach(btn=>{
    btn.addEventListener('click',()=>{
      activeResearchPublisher=btn.dataset.pub;
      $$('.research-publisher-pills .research-chip').forEach(b=>b.classList.toggle('active',b.dataset.pub===activeResearchPublisher));
      renderPubsList();
    });
  });
}
function renderEducation(data){
  const c=copy();
  const degrees=[...(data.higher_education?.degrees||[])].reverse();
  const certificates=[...(data.secondary_education?.certificates||[])].sort((a,b)=>Number(a.graduation_year)-Number(b.graduation_year));
  const path=`<div class="education-track-heading reveal"><p class="eyebrow">${c.educationHigher}</p></div><div class="education-path"><svg class="education-connector" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true"><path d="M 20 122 L 340 73 L 675 24"/></svg>${degrees.map((degree,index)=>`<article class="education-stage ${degree.research_focus?'education-stage-phd':''} reveal"><div class="education-node"><span>0${index+1}</span></div><div class="education-stage-content"><span class="education-date">${safe(degree.start_year)} — ${safe(degree.end_year)}</span><h3>${safe(degree.level)}</h3><p class="education-specialty">${safe(degree.specialty)}</p>${degree.research_focus?`<div class="education-focus"><span>${c.educationFocus}</span><p>${safe(degree.research_focus)}</p></div>`:''}<details class="education-details"><summary>${c.educationDetails}<i class="fas fa-chevron-down" aria-hidden="true"></i></summary><div>${degree.educational_program?`<p><strong>${c.educationProgram}</strong><br>${safe(degree.educational_program)}</p>`:''}<p>${safe(degree.graduation_details)}</p>${degree.diploma_id?`<p class="diploma-id">${c.educationDiploma} · ${safe(degree.diploma_id)}</p>`:''}</div></details></div></article>`).join('')}</div>`;
  const secondary=`<aside class="secondary-education reveal"><div class="secondary-heading"><p class="eyebrow">${c.educationFoundation}</p><p>${c.educationFoundationIntro}</p></div><div class="secondary-path">${certificates.map((item,index)=>`<article class="secondary-stage"><div class="secondary-node">0${index+1}</div><div><span class="secondary-date">${safe(item.graduation_year)}</span><h3>${safe(item.level)}</h3><p>${safe(item.graduation_details)}</p>${item.achievements?`<strong class="secondary-award"><i class="fas fa-medal" aria-hidden="true"></i> ${safe(item.achievements)}</strong>`:''}</div></article>`).join('')}</div></aside>`;
  $('#education-timeline').innerHTML=path+secondary;
}
function observeReveals(){if(matchMedia('(prefers-reduced-motion: reduce)').matches){$$('.reveal').forEach(e=>e.classList.add('visible'));return}const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});$$('.reveal:not(.visible)').forEach(e=>observer.observe(e))}
function renderTimelineIntro(experience){
  const uk=getLang()==='uk';
  const commercial=experience.filter(item=>['Commercial','Комерційна'].includes(item.category)).length;
  $('#timeline-intro').innerHTML='<div class="timeline-intro-copy"><p class="eyebrow">'+(uk?'Кар’єрна хронологія':'Career timeline')+'</p><h3>'+(uk?'Ролі, у яких відповідальність зростала разом зі складністю задач.':'Roles where responsibility grew with the complexity of the work.')+'</h3><p>'+(uk?'Комерційна розробка, власні продукти й академічна робота показані як одна послідовна практика.':'Commercial engineering, independent products and academic work shown as one continuous practice.')+'</p></div><div class="timeline-stats"><div><strong>2017</strong><span>'+(uk?'початок кар’єри':'career started')+'</span></div><div><strong>'+experience.length+'</strong><span>'+(uk?'професійних ролей':'professional roles')+'</span></div><div><strong>'+commercial+'</strong><span>'+(uk?'комерційні етапи':'commercial chapters')+'</span></div></div>';
}

async function renderAll(){
  const names=['ui','projects','experience','education','research','skills','skillsDetails'];
  const loaded=await Promise.allSettled(names.map(name=>loadNamespace(name)));
  const data=Object.fromEntries(names.map((name,index)=>[name,loaded[index].status==='fulfilled'?loaded[index].value:null]));
  loaded.forEach((result,index)=>{if(result.status==='rejected')console.error('[Portfolio] Failed to load '+names[index],result.reason)});
  if(data.projects)projects=data.projects.map(enrichProject).sort((a,b)=>b.sortDate-a.sortDate||a.id.localeCompare(b.id));
  const renderers=[
    ['copy',()=>applyCopy()],
    ['profile',()=>data.ui&&renderProfile(data.ui)],
    ['directions',()=>renderDirections()],
    ['filters',()=>renderProjectFilters()],
    ['projects',()=>renderProjects()],
    ['experience',()=>data.experience&&renderExperience(data.experience)],
    ['timeline intro',()=>data.experience&&renderTimelineIntro(data.experience)],
    ['skills',()=>data.skills&&data.skillsDetails&&data.ui&&renderSkills(data.skills,data.skillsDetails,data.ui)],
    ['research',()=>data.research&&renderResearch(data.research)],
    ['education',()=>data.education&&renderEducation(data.education)]
  ];
  renderers.forEach(([name,render])=>{try{render()}catch(error){console.error('[Portfolio] Failed to render '+name,error)}});
  observeReveals();
}

document.addEventListener('DOMContentLoaded',async()=>{
  const params=new URLSearchParams(location.search);
  if(DOMAIN_ORDER.includes(params.get('domain')))activeDomain=params.get('domain');
  if(params.has('company'))activeCompany=params.get('company');
  if(params.has('q'))searchQuery=params.get('q')||'';
  $('#project-search').value=searchQuery;
  initSidebar();initTheme();initCvModal();
  $('#lang-toggle').addEventListener('click',async()=>setLang(getLang()==='en'?'uk':'en',renderAll));
  $('#project-search').addEventListener('input',e=>{searchQuery=e.target.value;syncUrl();renderProjects()});
  $('#clear-filter-btn').addEventListener('click',()=>{activeDomain='all';activeCompany=null;searchQuery='';$('#project-search').value='';sessionStorage.removeItem('portfolioFilters');syncUrl();renderProjectFilters();renderProjects()});
  $$('.social-links a').forEach(a=>a.addEventListener('click',()=>trackSocialClick(a.title.toLowerCase())));
  $('.dialog-close')?.addEventListener('click',()=>$('#skill-dialog')?.close());
  $('#skill-dialog')?.addEventListener('click',e=>{if(e.target===$('#skill-dialog'))$('#skill-dialog')?.close()});
  await renderAll();
  const saved=Number(sessionStorage.getItem('portfolioScroll'));
  if(saved){sessionStorage.removeItem('portfolioScroll');requestAnimationFrame(()=>scrollTo(0,saved))}
  else if(location.hash){const target=$(location.hash);if(target)requestAnimationFrame(()=>{document.documentElement.style.scrollBehavior='auto';target.scrollIntoView();requestAnimationFrame(()=>document.documentElement.style.removeProperty('scroll-behavior'))})}
});

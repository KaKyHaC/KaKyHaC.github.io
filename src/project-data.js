export const DOMAIN_ORDER = ['all','android','flutter','web','iot','embedded','research'];

export const DOMAIN_META = {
  android:{icon:'fab fa-android',en:'Android',uk:'Android'},
  kmp:{icon:'fas fa-mobile-alt',en:'Kotlin Multiplatform',uk:'Kotlin Multiplatform'},
  flutter:{icon:'fas fa-layer-group',en:'Flutter',uk:'Flutter'},
  web:{icon:'fas fa-globe',en:'Web & Edge',uk:'Web та Edge'},
  iot:{icon:'fas fa-satellite-dish',en:'IoT',uk:'IoT'},
  embedded:{icon:'fas fa-microchip',en:'Embedded / C++',uk:'Embedded / C++'},
  research:{icon:'fas fa-flask',en:'Research & R&D',uk:'Дослідження та R&D'}
};

export function enrichProject(project){
  const haystack=[project.domain,project.title,...(project.technologies||[]),...(project.tags||[])].join(' ').toLowerCase();
  const domains=[];
  if((project.domain==='mobile'&&!/flutter|dart|bloc/.test(haystack))||/\bandroid\b|\bkotlin\b|\bjava\b|compose|exoplayer|camera 2|\bndk\b/.test(haystack)) domains.push('android');
  if(/multiplatform|\bkmp\b/.test(haystack)) domains.push('kmp');
  if(/flutter|dart|bloc/.test(haystack)) domains.push('flutter');
  if(project.domain==='web'||/next\.js|astro|vite|html|css|cloudflare/.test(haystack)) domains.push('web');
  if(project.domain==='iot'||/iot|lora|mqtt|esp32|wi-fi direct/.test(haystack)) domains.push('iot');
  if(project.domain==='systems'||/c\+\+|embedded|firmware|simd|serialport|ndk|compression/.test(haystack)) domains.push('embedded');
  if(/research|stegan|polyadic|cryptocompression|algorithm/.test(haystack)) domains.push('research');
  if(!domains.length) domains.push(project.domain==='web'?'web':'android');
  return {...project,domains:[...new Set(domains)],sortDate:parseProjectDate(project.date)};
}

export function parseProjectDate(date=''){
  const months={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
  const match=date.toLowerCase().match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+(\d{4})/);
  if(match)return Number(match[2])*100+months[match[1]];
  const year=date.match(/\d{4}/);return year?Number(year[0])*100:0;
}

export function projectUrl(project){return `/projects/${project.id}/`;}

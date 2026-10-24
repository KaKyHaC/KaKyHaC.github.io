import {readFile,mkdir,writeFile,unlink} from 'node:fs/promises';
import {resolve} from 'node:path';
import projects from '../locales/en/projects.js';

const root=resolve(import.meta.dirname,'..');
const template=await readFile(resolve(root,'dist/project.html'),'utf8');
const attr=value=>String(value??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

for(const project of projects){
  const dir=resolve(root,'dist/projects',project.id);
  await mkdir(dir,{recursive:true});
  const image=project.banner?`https://dvbarannik.github.io/${project.banner}`:project.icon?`https://dvbarannik.github.io/${project.icon}`:'https://dvbarannik.github.io/images/profile_photo.jpg';
  const html=template.replaceAll('__PROJECT_TITLE__',attr(project.title)).replaceAll('__PROJECT_DESCRIPTION__',attr(project.description)).replaceAll('__PROJECT_IMAGE__',attr(image));
  await writeFile(resolve(dir,'index.html'),html);
}
await unlink(resolve(root,'dist/project.html'));
console.log(`Generated ${projects.length} project pages.`);

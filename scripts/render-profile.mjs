import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(resolve(root, 'data/repository-snapshot.json'), 'utf8'));
mkdirSync(resolve(root, 'assets'), { recursive: true });
const C = { bg:'#080D19', panel:'#101A2B', edge:'#26364C', white:'#F3F7FD', muted:'#A2B4CB', cyan:'#53E4EA', purple:'#B1A0FF', green:'#6DE2BA' };
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const text = (x,y,s,size=20,color=C.white,weight=400,extra='') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" ${extra}>${esc(s)}</text>`;
const rect=(x,y,w,h,fill=C.panel,stroke=C.edge,r=14)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const path=(d,color=C.cyan,width=2,extra='')=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const pill=(x,y,w,label,color=C.cyan)=>rect(x,y,w,34,'#111E30',C.edge,17)+text(x+w/2,y+23,label,14,color,600,'text-anchor="middle"');
const label=(x,y,s,color=C.cyan)=>text(x,y,s,14,color,600,'letter-spacing="2"');
const line=(x1,y1,x2,y2,color=C.edge)=>path(`M${x1} ${y1}H${x2}`,color);
const base=(h,title,body,desc=title)=>`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="${h}" viewBox="0 0 960 ${h}" role="img" aria-labelledby="title desc">
<title id="title">${esc(title)}</title><desc id="desc">${esc(desc)}</desc>
<defs>
<linearGradient id="surface" x2="1" y2="1"><stop stop-color="#10253A"/><stop offset=".55" stop-color="#0B1221"/><stop offset="1" stop-color="#17132C"/></linearGradient>
<linearGradient id="accent"><stop stop-color="${C.cyan}"/><stop offset="1" stop-color="${C.purple}"/></linearGradient>
<radialGradient id="halo"><stop stop-color="#2CCBD3" stop-opacity=".19"/><stop offset="1" stop-color="#2CCBD3" stop-opacity="0"/></radialGradient>
<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#7188AA" stroke-opacity=".07"/></pattern>
<marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="${C.cyan}" stroke-width="1.5"/></marker>
</defs>
${rect(1,1,958,h-2,'url(#surface)',C.edge,20)}
<rect x="2" y="2" width="956" height="${h-4}" rx="20" fill="url(#grid)"/>
<g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>\n`;
const save=(name,h,title,body,desc)=>writeFileSync(resolve(root,`assets/${name}.svg`),base(h,title,body,desc));

let hero = `<circle cx="770" cy="175" r="220" fill="url(#halo)"/>`;
hero+=label(42,43,'JESRAMMAR / SOFTWARE ENGINEERING');
hero+=text(42,113,'Jesús Ramírez',51,C.white,700);
hero+=text(42,165,'Backend Developer.',36,C.cyan,600);
hero+=text(42,211,'De los datos al producto.',22,C.muted);
hero+=pill(42,247,94,'JAVA 21')+pill(148,247,155,'SPRING BOOT')+pill(315,247,95,'REACT',C.purple)+pill(422,247,135,'POSTGRESQL',C.purple);
hero+=`<g transform="translate(775 157)"><circle r="111" fill="none" stroke="#294257"/><circle r="89" fill="none" stroke="#52718A" stroke-dasharray="3 13"/><circle r="66" fill="#0D192A" stroke="url(#accent)" stroke-width="2"/>${path('M-112 0H-67M67 0H113M0 -112V-67M0 67V113','#44667D')}${text(0,17,'JR',48,C.white,700,'text-anchor="middle"')}<circle cx="-97" cy="-54" r="5" fill="${C.cyan}"/><circle cx="97" cy="54" r="5" fill="${C.purple}"/></g>`;
hero+=label(689,303,'DESIGN · BUILD · SHIP',C.muted);
save('hero',334,'Jesús Ramírez · Backend Developer',hero);

let enterprise=label(38,43,'01 / PROYECTO PRINCIPAL');
enterprise+=text(38,102,'EnterpriseIQ',47,C.white,700);
enterprise+=text(38,145,'Datos dispersos. Decisiones claras.',23,C.cyan,500);
enterprise+=text(38,186,'Analítica operativa para consultoras:',19,C.muted)+text(38,214,'ingesta, presupuestos, costes e informes.',19,C.muted);
enterprise+=pill(38,245,176,'JAVA + SPRING')+pill(226,245,155,'REACT + TS',C.purple)+pill(393,245,128,'DOCKER',C.green);
enterprise+=rect(584,40,338,242,'#0B1525','#35506A',16)+label(608,71,'FLUJO DE PRODUCTO',C.muted);
const stages=[['01','CSV / XLSX','Carga y normalización'],['02','Análisis','KPIs · presupuesto · costes'],['03','Entregables','Dashboard · HTML · PDF']];
stages.forEach(([n,title,sub],i)=>{const y=104+i*65;enterprise+=rect(608,y-17,35,32,'#132B39','#2B5260',8)+text(625.5,y+5,n,14,C.cyan,600,'text-anchor="middle"')+text(658,y,title,19,C.white,600)+text(658,y+22,sub,14,C.muted);if(i<2)enterprise+=path(`M625 119V${y+44}`,C.edge);});
save('enterpriseiq',313,'EnterpriseIQ · proyecto principal',enterprise);

let arch=label(38,40,'ENTERPRISEIQ / ARQUITECTURA');
arch+=text(38,83,'Un backend. Módulos con responsabilidades claras.',26,C.white,600);
arch+=rect(38,123,220,101)+label(57,151,'INTERFAZ',C.purple)+text(57,184,'React + TypeScript',21,C.white,600)+text(57,209,'SPA · Vite',16,C.muted);
arch+=path('M258 173H351',C.cyan,2,'marker-end="url(#arrow)"')+text(304,156,'REST / JWT',13,C.cyan,400,'text-anchor="middle"');
arch+=rect(362,115,560,257,'#101E2E','#3B6579',14)+label(384,144,'SPRING BOOT / MONOLITO MODULAR')+text(384,175,'Seguridad por rol y empresa · API REST',21,C.white,600);
[['Ingesta',384,202],['Análisis',558,202],['Informes',732,202],['Automatización',384,271],['Auditoría',647,271]].forEach(([s,x,y],i)=>{const w=i>2?241:160;arch+=rect(x,y,w,52,'#14273A','#2D4B62',9)+text(x+w/2,y+32,s,17,C.white,500,'text-anchor="middle"');});
arch+=text(384,353,'Módulos dentro del mismo proceso Java',15,C.muted);
arch+=path('M499 372V406',C.cyan,2,'marker-end="url(#arrow)"')+path('M786 372V406',C.cyan,2,'marker-end="url(#arrow)"');
arch+=rect(362,418,271,86)+text(382,450,'PostgreSQL + Flyway',21,C.white,600)+text(382,478,'Estado y migraciones',16,C.muted);
arch+=rect(650,418,272,86)+text(670,450,'Volumen persistente',21,C.white,600)+text(670,478,'Ficheros e informes',16,C.muted);
arch+=rect(38,275,265,229,'#0F192C','#4A466B')+label(57,305,'OBSERVABILIDAD',C.purple)+text(57,342,'Actuator → Prometheus',18,C.white,500)+text(57,383,'Grafana',22,C.white,600)+text(57,411,'Dashboards',16,C.muted)+text(57,448,'Alertmanager',22,C.white,600)+text(57,476,'Gestión de alertas',16,C.muted);
arch+=path('M362 247H329V344H303',C.purple,2,'stroke-dasharray="5 5"')+text(57,548,'Despliegue con Docker Compose · servicios de observabilidad separados del backend',17,C.muted);
save('architecture',577,'Arquitectura modular de EnterpriseIQ',arch,'React consume por REST y JWT un único backend Spring Boot con módulos internos. El backend persiste en PostgreSQL y un volumen de ficheros. Actuator expone métricas para Prometheus, Grafana y Alertmanager.');

let proxy=label(38,42,'02 / BACKEND E INTEGRACIONES',C.purple)+text(38,97,'Proxy + Cache',40,C.white,700)+text(38,135,'spring-dicebear-proxy-cache',19,C.purple)+text(38,179,'Caché y reintentos para consumir APIs externas.',19,C.muted);
proxy+=pill(38,215,124,'CAFFEINE')+pill(173,215,146,'RESILIENCE4J',C.purple)+pill(330,215,129,'WIREMOCK',C.green);
proxy+=rect(541,41,381,215,'#11172A','#464166')+label(564,74,'GET /avatar/{seed}',C.purple);
proxy+=rect(564,97,116,44)+text(622,125,'Proxy API',16,C.white,600,'text-anchor="middle"')+rect(779,97,120,44)+text(839,125,'Caffeine',16,C.cyan,600,'text-anchor="middle"')+path('M680 119H771',C.cyan,2,'marker-end="url(#arrow)"');
proxy+=path('M622 141V177H771',C.cyan,2,'marker-end="url(#arrow)"')+text(634,165,'cache miss',13,C.muted)+rect(779,157,120,44)+text(839,185,'DiceBear',16,C.white,600,'text-anchor="middle"')+text(564,232,'WebClient · retry · tests con WireMock',15,C.muted);
save('proxy-cache',281,'Proxy con Caffeine y reintentos Resilience4j',proxy);

let metrics=label(38,42,'ENTERPRISEIQ / CÓDIGO EN CIFRAS');
metrics+=text(38,82,'Archivos versionados por lenguaje',26,C.white,600);
const max=Math.max(...Object.values(data.counts));
const palette=[C.cyan,C.purple,C.green,'#83B9FE','#F8CB87','#EA9CC8','#ABB9D2'];
Object.entries(data.counts).forEach(([language,n],i)=>{let y=124+i*38;metrics+=text(38,y+14,language,17,C.muted)+rect(168,y,372,16,'#19263A','#19263A',3)+rect(168,y,372*n/max,16,palette[i],palette[i],2)+text(556,y+14,n,17,C.white,600);});
metrics+=rect(649,108,273,123,'#101E2E','#2F4B62')+text(670,160,data.testJavaFiles,44,C.cyan,700)+text(670,188,'archivos Java de pruebas',17,C.white)+text(670,211,'backend/src/test/java',13,C.muted);
metrics+=rect(649,248,273,123,'#171C32','#484466')+text(670,300,data.flywayMigrations,44,C.purple,700)+text(670,330,'migraciones Flyway',19,C.white)+text(670,351,'Esquema versionado',14,C.muted);
metrics+=text(38,415,`Recuento a ${data.snapshotDate} · revisión ${data.revision.slice(0,7)} · archivos, no líneas de código`,15,C.muted);
save('code-snapshot',446,'Composición del código de EnterpriseIQ',metrics,Object.entries(data.counts).map(([k,v])=>`${k}: ${v} archivos`).join('. ')+`. ${data.testJavaFiles} archivos Java de pruebas y ${data.flywayMigrations} migraciones Flyway. Snapshot: ${data.snapshotDate}.`);

console.log('Generated 5 self-contained SVG assets.');

import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '.');
const required = ['index.html', 'styles.css', 'app.js', 'storage.js', 'manifest.json', 'sw.js', '.nojekyll', 'assets/icon-192.png', 'assets/icon-512.png'];
let failed = false;
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) { console.error(`Falta: ${file}`); failed = true; }
}
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const index = read('index.html');
const app = read('app.js');
const storage = read('storage.js');
const sw = read('sw.js');
const manifest = JSON.parse(read('manifest.json'));
const checks = [
  ['Manifest standalone', manifest.display === 'standalone'],
  ['Manifest usa início relativo', manifest.start_url.startsWith('./')],
  ['Service worker relativo', app.includes("register('./sw.js')")],
  ['Índice carrega recursos relativos', !/href="\/(?!\/)/.test(index) && !/src="\/(?!\/)/.test(index)],
  ['Persistência IndexedDB', storage.includes('indexedDB')],
  ['Persistência localStorage', storage.includes('localStorage')],
  ['Estado versionado', storage.includes('version: 1')],
  ['Ação Google Maps', app.includes('google.com/maps/search')],
  ['Controle de custos', app.includes('data-cost')],
  ['Checklist persistente', app.includes('data-check')],
  ['Cache offline', sw.includes('caches.open')]
];
for (const [name, pass] of checks) {
  console.log(`${pass ? 'OK' : 'ERRO'}: ${name}`);
  if (!pass) failed = true;
}
if (failed) process.exit(1);
console.log('PWA validada com sucesso.');

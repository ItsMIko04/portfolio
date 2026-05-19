
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/informazioni"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/esperienza"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contattami"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8301, hash: 'ed303bba0fcaf092e4cbe0ccdba37a903fa71634c509bfe249e85263da324189', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: '14b081b781a97d30fd11f03c4223a84ed4657cbb47cdce24611a9ad2a0c818d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'informazioni/index.html': {size: 16003, hash: 'd9641502192e9359a9665150761221e20f46c05c4ec11e349a5effc50cff4cdf', text: () => import('./assets-chunks/informazioni_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15583, hash: 'b6a678e82d1b3cb8fc49f5e15630810d621671f03ed3302ae12f8d67956559cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'esperienza/index.html': {size: 11500, hash: '511a6513bdd047dbff4c8e795c77818660f7716047f1dabc533e1159c952cd5c', text: () => import('./assets-chunks/esperienza_index_html.mjs').then(m => m.default)},
    'contattami/index.html': {size: 16906, hash: '000311285057201a00ca66d5f0b553dc412743114d80af964472c4b6c47cd056', text: () => import('./assets-chunks/contattami_index_html.mjs').then(m => m.default)},
    'styles-KPZ4WVT6.css': {size: 7759, hash: 'U7pLP3r1qC0', text: () => import('./assets-chunks/styles-KPZ4WVT6_css.mjs').then(m => m.default)}
  },
};

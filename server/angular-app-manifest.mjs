
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/informazioni"
  },
  {
    "renderMode": 2,
    "route": "/esperienza"
  },
  {
    "renderMode": 2,
    "route": "/contattami"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8291, hash: '0e23fe88f24fd494e101422f91bd866c6ce50f562a9a70aa87bbbbf84ec9aa98', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: 'b4902e0536ce43e2b00292401312319ae56a724cde5d762f87f9f4460af95b32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'esperienza/index.html': {size: 11460, hash: '3d18b1fdd7d711b8766db9457392a8468c55112dfbd9822bd32b93ad149f6eca', text: () => import('./assets-chunks/esperienza_index_html.mjs').then(m => m.default)},
    'contattami/index.html': {size: 16436, hash: 'ff28c079aabf1e809fe927415a500af1ecbb534c4d2f63619f5b62c3febc9d4e', text: () => import('./assets-chunks/contattami_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15543, hash: 'fd98939739469761079953717676eee1df1605c659d9778a6ab037d628bdadbf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'informazioni/index.html': {size: 15963, hash: '2d74da6d982e76060808c63b116e85fdb83b88ee678a2ad9a0ed9ee9602f8138', text: () => import('./assets-chunks/informazioni_index_html.mjs').then(m => m.default)},
    'styles-KPZ4WVT6.css': {size: 7759, hash: 'U7pLP3r1qC0', text: () => import('./assets-chunks/styles-KPZ4WVT6_css.mjs').then(m => m.default)}
  },
};

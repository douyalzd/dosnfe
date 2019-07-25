/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fde64287357fad6d4a04e2841bb89187"
  },
  {
    "url": "assets/css/0.styles.7009e883.css",
    "revision": "41c5991fe58a616f6a0ffb7b5713e511"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.21462d1d.js",
    "revision": "3f14282eb79b5e55e73094dc2a688e42"
  },
  {
    "url": "assets/js/10.f3e98089.js",
    "revision": "2648efbc0dcd76eeef7ec778cde969bb"
  },
  {
    "url": "assets/js/11.7910597e.js",
    "revision": "9df96a5fd0843eb9d4255eaa222fd7fd"
  },
  {
    "url": "assets/js/12.8381de3e.js",
    "revision": "645e5354c076a55bb2974b3b425a1490"
  },
  {
    "url": "assets/js/13.ce0cf0b0.js",
    "revision": "02fb98b90fd29208212dec9d79eb8eac"
  },
  {
    "url": "assets/js/14.95210277.js",
    "revision": "66a3802991605e09dc8e338bd0e4532f"
  },
  {
    "url": "assets/js/15.4fb5e3e4.js",
    "revision": "4b714111692873fe88eb82f0810ea76b"
  },
  {
    "url": "assets/js/16.38a9a9bd.js",
    "revision": "e38ac4120ba85b335f1adaece19f4092"
  },
  {
    "url": "assets/js/17.fe1ae0af.js",
    "revision": "95034565f421e01e8ece054f21d867ca"
  },
  {
    "url": "assets/js/18.97ab746c.js",
    "revision": "b30f18a9895d8a2c1f8495b7abfaee2a"
  },
  {
    "url": "assets/js/19.0d69170b.js",
    "revision": "382522bbef6f23134da0e2632c98fbbe"
  },
  {
    "url": "assets/js/20.dd4aefe0.js",
    "revision": "db0d54df3b6a0d0321a4aeae757c68cd"
  },
  {
    "url": "assets/js/21.d2bdd90c.js",
    "revision": "108afcf90d7646d24da4b23e4f99a40a"
  },
  {
    "url": "assets/js/22.593b6d34.js",
    "revision": "5278995867d97206007774a3ebd29828"
  },
  {
    "url": "assets/js/4.d7197347.js",
    "revision": "1f2d08dc4c228548242334fdbb893361"
  },
  {
    "url": "assets/js/5.2f06b360.js",
    "revision": "107a5f33fc7c1962241d5e3cec9292bb"
  },
  {
    "url": "assets/js/6.d7a10578.js",
    "revision": "76f3baa5fd2a712df221632c9abdfc2b"
  },
  {
    "url": "assets/js/7.9bdb50a3.js",
    "revision": "3a4c55d80726b23fb2265788492f9217"
  },
  {
    "url": "assets/js/8.1e03901a.js",
    "revision": "91454a3d4b099e322cf000dde086eb54"
  },
  {
    "url": "assets/js/9.d93eecc1.js",
    "revision": "7b3ab276650776c6005ddd897c21e2ed"
  },
  {
    "url": "assets/js/app.fa54a8c9.js",
    "revision": "82ee3cec68cc193e415b72b13f2a7f80"
  },
  {
    "url": "assets/js/vendors~notification.b107fc1e.js",
    "revision": "3cead98d07eaaa664ea387aaf6fc6ffe"
  },
  {
    "url": "cmpdocs/base/sidebar.html",
    "revision": "edfda4187eefe6ec055c0e57b2e290ae"
  },
  {
    "url": "cmpdocs/index.html",
    "revision": "42d15135f5defcca31797fc0216eaa70"
  },
  {
    "url": "cmpdocs/select/industry.html",
    "revision": "84cf2c4c69ad28b85fc18a3c543254d7"
  },
  {
    "url": "cmpdocs/table/test.html",
    "revision": "293bf2eea6884c0a540e1948fea0c9a7"
  },
  {
    "url": "cmpdocs/tree/test.html",
    "revision": "2671a8f6c072d449c4b3473f4582dbf9"
  },
  {
    "url": "css/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "css/fonts/fontawesome-webfont.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
  },
  {
    "url": "css/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "css/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "css/iconfont.css",
    "revision": "95545b00b273a13fbd2b1efb15048bc0"
  },
  {
    "url": "image/001.jpg",
    "revision": "b1b1abbcb1d8295a6d6859ba010c8c38"
  },
  {
    "url": "index.html",
    "revision": "08c472aca4070bff901bb0da64cfca7a"
  },
  {
    "url": "knowledge/index.html",
    "revision": "0ef98ebb65a37849fbd5724059d44e0c"
  },
  {
    "url": "standard/index.html",
    "revision": "7699784ae8317036e71eb0a45dac2b22"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "revision": "84e573c945a2d1b20e7e77dc63a60183"
  },
  {
    "url": "assets/css/0.styles.e33509e9.css",
    "revision": "6cde0dff3107976a2639b000b0b55096"
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
    "url": "assets/js/14.b807e2d8.js",
    "revision": "91053f8a4ec9ff22f84c62df350b6d79"
  },
  {
    "url": "assets/js/15.1a578387.js",
    "revision": "07cb6ae3159a189471be60a3c8091705"
  },
  {
    "url": "assets/js/16.38a9a9bd.js",
    "revision": "e38ac4120ba85b335f1adaece19f4092"
  },
  {
    "url": "assets/js/17.3f401ce8.js",
    "revision": "2ec7a3e28efcf9b90135ab71dcbb1388"
  },
  {
    "url": "assets/js/18.23147f03.js",
    "revision": "7b0551f95a6c141dc7f8889a383e602c"
  },
  {
    "url": "assets/js/19.1ae19814.js",
    "revision": "6abe97b333c546815c8d14d5f87b6c95"
  },
  {
    "url": "assets/js/20.9382d64e.js",
    "revision": "9d49f49b5f7adee8804a94d3d0bc6fff"
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
    "url": "assets/js/7.a2d303c1.js",
    "revision": "d1f46e4e923c411a735e783d0024908b"
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
    "url": "assets/js/app.db7de392.js",
    "revision": "02038f2851f663413a61f498750615a4"
  },
  {
    "url": "assets/js/vendors~notification.b107fc1e.js",
    "revision": "3cead98d07eaaa664ea387aaf6fc6ffe"
  },
  {
    "url": "cmpdocs/base/sidebar.html",
    "revision": "a1873e93832d893d51654d0ea17ab514"
  },
  {
    "url": "cmpdocs/index.html",
    "revision": "41b1cf58850af17ec1fd61fa8b385f79"
  },
  {
    "url": "cmpdocs/select/industry.html",
    "revision": "95ec44814c3d64349e9c38d38f7de404"
  },
  {
    "url": "cmpdocs/table/test.html",
    "revision": "83b6da7255f053217dc235904750c128"
  },
  {
    "url": "cmpdocs/tree/test.html",
    "revision": "2d0198f1a87b6dc34802f1dfb9d82676"
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
    "revision": "22e99460e3fea19bd275a6883bbfffd7"
  },
  {
    "url": "knowledge/index.html",
    "revision": "24bf0f217c057d2a86762afff53010cd"
  },
  {
    "url": "standard/index.html",
    "revision": "4f8fcccc8216544de6d48ab4eeafabce"
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

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
    "revision": "4554339a9769bf744c49bebbbc49d3db"
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
    "url": "assets/js/1.c73fa701.js",
    "revision": "f516e9ac03cd7c835d8172e34ad759bb"
  },
  {
    "url": "assets/js/10.a551e9e0.js",
    "revision": "4f15596050124563a3e28c7b1c4f8d24"
  },
  {
    "url": "assets/js/11.ff40125c.js",
    "revision": "c593e14778ac21a1c5b27b52bd41918c"
  },
  {
    "url": "assets/js/12.a2546db7.js",
    "revision": "5b40ecb9a05bafa3bfcc53701d5ca08d"
  },
  {
    "url": "assets/js/13.594d215f.js",
    "revision": "af2754f1e2833c164fabd4f865f86a1b"
  },
  {
    "url": "assets/js/14.b6c1483d.js",
    "revision": "0d9cd58348d32727465be3db8f4c76d6"
  },
  {
    "url": "assets/js/15.39cb4eb4.js",
    "revision": "412605f9eb8dd198e4e6828f72019a50"
  },
  {
    "url": "assets/js/16.0295be94.js",
    "revision": "fb4077125d9840b9d282e8bef3759e23"
  },
  {
    "url": "assets/js/17.0e6290bb.js",
    "revision": "afdda4c8dd561526e94d2877255ba70b"
  },
  {
    "url": "assets/js/18.39870b53.js",
    "revision": "38fc5655f16ab5ff44505d5d7f9ab168"
  },
  {
    "url": "assets/js/19.1b281786.js",
    "revision": "5fad5f9160261e888d1731f5f017edfd"
  },
  {
    "url": "assets/js/20.97ee3858.js",
    "revision": "13b11bcc23051919aaae84ffb20c2769"
  },
  {
    "url": "assets/js/21.9350400f.js",
    "revision": "7525493587df041bd5236da82c54c861"
  },
  {
    "url": "assets/js/22.593b6d34.js",
    "revision": "5278995867d97206007774a3ebd29828"
  },
  {
    "url": "assets/js/4.40cbce8c.js",
    "revision": "c8ef119fea0773fa6dbe32a9dafc6ae1"
  },
  {
    "url": "assets/js/5.fd3fce70.js",
    "revision": "de2a179140d949a07dca5bdac86f6c78"
  },
  {
    "url": "assets/js/6.22a254a7.js",
    "revision": "1aded36a005a6b95a5a2bce4f55a2a6e"
  },
  {
    "url": "assets/js/7.bad784f7.js",
    "revision": "b8e4d80a0ec7158bc65ce666ccb2f26b"
  },
  {
    "url": "assets/js/8.b2602a61.js",
    "revision": "5a71c45e212191410a183a3cd54bd5c8"
  },
  {
    "url": "assets/js/9.6d86b01d.js",
    "revision": "fcdcbada783a86355004fb3e5caae45e"
  },
  {
    "url": "assets/js/app.4f7f8fb2.js",
    "revision": "b832e85b52cb2ebfa84eedf215570a68"
  },
  {
    "url": "assets/js/vendors~notification.6f898a3f.js",
    "revision": "6ecf59072d2f523c05f3ae6afa1e5db8"
  },
  {
    "url": "cmpdocs/base/sidebar.html",
    "revision": "75ba0effd97e97521306d6e5affca55f"
  },
  {
    "url": "cmpdocs/index.html",
    "revision": "d279d78c3d7d9dc40f6dc4cb2b275398"
  },
  {
    "url": "cmpdocs/select/industry.html",
    "revision": "fc3bd336ddf27ea5a684bd7b75cc6b3c"
  },
  {
    "url": "cmpdocs/table/test.html",
    "revision": "57f22e9d4b34ac80f2b0b3523f984ff3"
  },
  {
    "url": "cmpdocs/tree/test.html",
    "revision": "6b56d8bf78365863f82ccdcf88714019"
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
    "revision": "5d8918e8be92ffea3b5a83955693cc7a"
  },
  {
    "url": "knowledge/index.html",
    "revision": "ff07a361016d241182d99bf4b8c13da8"
  },
  {
    "url": "standard/index.html",
    "revision": "773fa90316652e13a62c6066f948e51b"
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

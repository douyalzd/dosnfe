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
    "revision": "25d2887ca2f5f794fec564d47cd5b497"
  },
  {
    "url": "assets/css/0.styles.8214cc71.css",
    "revision": "bf461e8e794b4a2a12d753d9743b0c99"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/kun_001.23cd2656.png",
    "revision": "23cd265695afb4a2a0d6052accb3f97c"
  },
  {
    "url": "assets/img/kun_002.72beafdd.png",
    "revision": "72beafddb2e1592b6ef33192ab40ba73"
  },
  {
    "url": "assets/img/kun_003.636c9383.png",
    "revision": "636c938338bfd767aab11970e0d98826"
  },
  {
    "url": "assets/img/lk_001.c0ca19d6.png",
    "revision": "c0ca19d607c2152d73867daefe79de6d"
  },
  {
    "url": "assets/img/lk_002.95b9a9ca.png",
    "revision": "95b9a9cae25ba30608899bbc78dc71a4"
  },
  {
    "url": "assets/img/lk_003.877726f1.png",
    "revision": "877726f10648a88c5f6069595d2f9ffd"
  },
  {
    "url": "assets/img/lzd_001.724f93f6.gif",
    "revision": "724f93f69e4de824a71e12835b3bcd17"
  },
  {
    "url": "assets/img/lzd_001.b1b1abbc.jpg",
    "revision": "b1b1abbcb1d8295a6d6859ba010c8c38"
  },
  {
    "url": "assets/img/lzd_002.51afbc44.gif",
    "revision": "51afbc44c7f6b9a003d2923674fcbf86"
  },
  {
    "url": "assets/img/lzd_003.64a9612f.gif",
    "revision": "64a9612f00c9bf52a97e6e59d5cf36ef"
  },
  {
    "url": "assets/img/lzd_004.dd15acae.png",
    "revision": "dd15acae1acc834fbfe342d5ec5d117a"
  },
  {
    "url": "assets/img/lzd_005.56d8b2b2.png",
    "revision": "56d8b2b2eea2a81087a740b2bb1d8679"
  },
  {
    "url": "assets/img/lzd_006.f9e9eda7.png",
    "revision": "f9e9eda763e5b3f608c57a956262bba3"
  },
  {
    "url": "assets/img/lzd_007.beb94eba.png",
    "revision": "beb94ebadf37fbbb3e5f07d8ce40b893"
  },
  {
    "url": "assets/img/lzd_008.d176eb7a.png",
    "revision": "d176eb7ad645bee11871b6685fed2fd7"
  },
  {
    "url": "assets/img/lzd_009.de541956.png",
    "revision": "de5419565f636987627cd4f86bbd3b3f"
  },
  {
    "url": "assets/img/lzd_010.ae47ab7f.png",
    "revision": "ae47ab7f097eab5316477810fef54305"
  },
  {
    "url": "assets/img/lzd_011.6e315570.png",
    "revision": "6e315570d2184cdb38b25f63716df2f5"
  },
  {
    "url": "assets/img/lzd_012.a17f1194.png",
    "revision": "a17f119470287036bc0497080c8df5ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zmy_001.9d96e688.png",
    "revision": "9d96e68810da872074fc54ebbb21559b"
  },
  {
    "url": "assets/img/zmy_002.e2604a17.png",
    "revision": "e2604a178dbaabc0e363bca75b4e2dae"
  },
  {
    "url": "assets/js/1.df0e1478.js",
    "revision": "0d8fa2460323bc8cd027d8cf2f023060"
  },
  {
    "url": "assets/js/10.963a1a7f.js",
    "revision": "5bccb5186a1e53e976e4a48a173e0179"
  },
  {
    "url": "assets/js/11.7d905091.js",
    "revision": "f888cbb7438d0ddf23b0327b0feb49a6"
  },
  {
    "url": "assets/js/12.f88f5ce5.js",
    "revision": "cbf7a424da5e452f1afce11b358a9a03"
  },
  {
    "url": "assets/js/13.aacfaa0a.js",
    "revision": "b353574aa1e0916cf5da63cf714d652d"
  },
  {
    "url": "assets/js/14.c95a56fa.js",
    "revision": "c040a7f1409ed1971854c3afdd4f1d4b"
  },
  {
    "url": "assets/js/15.7eed35c1.js",
    "revision": "d1be7840bb647437aa48a59ec3e42d24"
  },
  {
    "url": "assets/js/16.4fd0927b.js",
    "revision": "dab8584ef5487420e17ad617179aff9f"
  },
  {
    "url": "assets/js/17.5b8c2678.js",
    "revision": "1364cc065c70b03918f7c505a3575dcf"
  },
  {
    "url": "assets/js/18.2580a941.js",
    "revision": "3db2eed113cb13acfbdbc49dfdf4ba84"
  },
  {
    "url": "assets/js/19.1c8a4d95.js",
    "revision": "a9275c4591f200dd1a21817225e23782"
  },
  {
    "url": "assets/js/20.1adea35f.js",
    "revision": "86b0c05e0342403d3ae30c7f31ef9cd5"
  },
  {
    "url": "assets/js/21.b4cc9a9a.js",
    "revision": "060d5ea68e2d34b55967fe943d64ef96"
  },
  {
    "url": "assets/js/22.b2370eee.js",
    "revision": "587572c74775a7ef609c369b26694ec0"
  },
  {
    "url": "assets/js/23.5ecde4ec.js",
    "revision": "52c1b18ec11968c7fb8028ebb46b97ec"
  },
  {
    "url": "assets/js/24.095e8f85.js",
    "revision": "05069939d57bafba9b3df98150fb99fe"
  },
  {
    "url": "assets/js/25.bfea95ce.js",
    "revision": "798564b73700565a9fb384bfa2baa96e"
  },
  {
    "url": "assets/js/26.c2fbcb32.js",
    "revision": "93ff523cc477ad1496cda8c91f5dd064"
  },
  {
    "url": "assets/js/27.7d882264.js",
    "revision": "9a1f902b1861c22d6aee8e4dff1ea62c"
  },
  {
    "url": "assets/js/28.d0cfb52d.js",
    "revision": "8a1731c836467af794ddcf8eb8b4e09c"
  },
  {
    "url": "assets/js/29.3bde58a7.js",
    "revision": "4b19cb7d4319150a142502731ffed82f"
  },
  {
    "url": "assets/js/30.b2fcb620.js",
    "revision": "217246aff6bcdf06077ea71a645b5bff"
  },
  {
    "url": "assets/js/31.56149992.js",
    "revision": "6576ca4454bbd0d04c194b0ac611f394"
  },
  {
    "url": "assets/js/32.498d42ac.js",
    "revision": "a884e21c443417e8d09025aa163eae26"
  },
  {
    "url": "assets/js/33.2a81c75f.js",
    "revision": "bc5e46c7d2647b1b795db2928eb1f214"
  },
  {
    "url": "assets/js/34.6188fb6f.js",
    "revision": "0f4e54a3f33cfb0e2ddb8a8aed7645ce"
  },
  {
    "url": "assets/js/35.a57008eb.js",
    "revision": "5dbef77304e31f1d50ff84d26a9b420c"
  },
  {
    "url": "assets/js/36.915e90f6.js",
    "revision": "41ca5a84092803bb47fba5744293f503"
  },
  {
    "url": "assets/js/37.15046777.js",
    "revision": "f2afc307d6ec95486d8b97ec1702c33c"
  },
  {
    "url": "assets/js/38.70de43c2.js",
    "revision": "c0afdc0555b9e3ed18a1fc810475fc81"
  },
  {
    "url": "assets/js/39.c8a5be35.js",
    "revision": "cd5b331933c2b361467a33e413e152bb"
  },
  {
    "url": "assets/js/4.aca5f6cf.js",
    "revision": "7adf3846f191a2a7c7a6129b1d61feff"
  },
  {
    "url": "assets/js/40.73f986f5.js",
    "revision": "dbc9df7cadb31aa0b0098076171116c3"
  },
  {
    "url": "assets/js/41.18d99c91.js",
    "revision": "ade97f0a529203538b769ed14e9d553b"
  },
  {
    "url": "assets/js/42.9e5cc164.js",
    "revision": "dbc5ebe095334089f2a795c9c50daf70"
  },
  {
    "url": "assets/js/43.0f9b8177.js",
    "revision": "e6c2179d5e14bd62c609d78c4f05f0b7"
  },
  {
    "url": "assets/js/5.4c4692d4.js",
    "revision": "8010b2fda0c89ce0f3b1abbcf964b5eb"
  },
  {
    "url": "assets/js/6.3e563256.js",
    "revision": "a10bea8da79c1e8ed448e9d1a79bea0f"
  },
  {
    "url": "assets/js/7.f3f85037.js",
    "revision": "9ce2d880a12f2c2922bad51632722c85"
  },
  {
    "url": "assets/js/8.53c3a0f5.js",
    "revision": "ef6056c8c29c1e5f9b3a392b8bd523ca"
  },
  {
    "url": "assets/js/9.2920e77b.js",
    "revision": "f8aad253fa4b3bf6d0ec09685afe4df4"
  },
  {
    "url": "assets/js/app.97c0ccb3.js",
    "revision": "aa3fc455202e9226600f55fba43cdef3"
  },
  {
    "url": "assets/js/vendors~notification.e64d507a.js",
    "revision": "b04b6679d8d9b311bf19ce3be22109cf"
  },
  {
    "url": "cmpdocs/base/layout.html",
    "revision": "47a20c879bb8cae0bdf44d55d9255210"
  },
  {
    "url": "cmpdocs/base/siderDialog.html",
    "revision": "11fabf2e9274ff321c7e9ecc9661289d"
  },
  {
    "url": "cmpdocs/index.html",
    "revision": "26fa2402738d860efccd4911620d7b16"
  },
  {
    "url": "cmpdocs/select/IndustryCascader.html",
    "revision": "dbbf96aca19f13b21cf30c6092a6da9d"
  },
  {
    "url": "cmpdocs/select/mediaCascader.html",
    "revision": "94e04f3e84938a4b970cf3be425db1cb"
  },
  {
    "url": "cmpdocs/select/regionCascader.html",
    "revision": "001e0ae64481c45f6112afd0d7aa3139"
  },
  {
    "url": "cmpdocs/table/selBran.html",
    "revision": "f3dc8579c1984c8c1320b7baf1626f21"
  },
  {
    "url": "cmpdocs/table/selCommunity.html",
    "revision": "3fcb69c86ecfdb64dfb9d7d6a4a486c9"
  },
  {
    "url": "cmpdocs/tree/selBusiness.html",
    "revision": "7a9d9f28d25c5701520f0c1ac90b470a"
  },
  {
    "url": "cmpdocs/tree/selMedia.html",
    "revision": "0af26606195f46de996bcc0f32bf173a"
  },
  {
    "url": "cmpdocs/tree/selUser.html",
    "revision": "08b96fd596bfeae1ce79fec284032859"
  },
  {
    "url": "cmpdocs/upLoad/customUpload.html",
    "revision": "38b53607c265b9df164bd6929a438f08"
  },
  {
    "url": "cmpdocs/upLoad/fileList.html",
    "revision": "567719f9d38a100ede2edba23ab1e650"
  },
  {
    "url": "cmpdocs/upLoad/importFile.html",
    "revision": "4895c586f69a2168e5b3fd82f9b9c562"
  },
  {
    "url": "cmpdocs/upLoad/upLoadFile.html",
    "revision": "0ed20200e2c0a70c6d2be936046b1d6d"
  },
  {
    "url": "cmpdocs/upLoad/uploadImg.html",
    "revision": "3cea051eda14b7838e173939b84e92d8"
  },
  {
    "url": "cmpdocs/upLoad/uploadSingleImg.html",
    "revision": "2c10fc261400ebd4a9680fecbdb84a09"
  },
  {
    "url": "css/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "css/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
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
    "revision": "932f42c7c9dd14bbcf5022abf0b6ce3d"
  },
  {
    "url": "index.html",
    "revision": "3e15745d069e5a474f343723981d2747"
  },
  {
    "url": "knowledge/index.html",
    "revision": "b1b8279ae9ef463b1203e618ae8ed672"
  },
  {
    "url": "logo.png",
    "revision": "7225c8154fdf4abefd771d6e2d4084ec"
  },
  {
    "url": "publicMethod/directive.html",
    "revision": "aeab3feb7a8384053fb336638071f120"
  },
  {
    "url": "publicMethod/filter.html",
    "revision": "a2ae0a973b1596ce94a814868d502687"
  },
  {
    "url": "publicMethod/method.html",
    "revision": "2a8ddd8a62927890bde2d08c11c14c3d"
  },
  {
    "url": "publicMethod/regexp.html",
    "revision": "85b8a974ab148c55b3f85782c8eba3a8"
  },
  {
    "url": "standard/CSS.html",
    "revision": "2ceaf667ad019ac5a5e06af21e38493e"
  },
  {
    "url": "standard/HTML.html",
    "revision": "ece593aa9f6cbfbeda87947853a65b8e"
  },
  {
    "url": "standard/index.html",
    "revision": "b6c7b2241dee123c746dd47605a43d8d"
  },
  {
    "url": "standard/JS.html",
    "revision": "7590e8c2cb76831bdc64fc3ab4df4390"
  },
  {
    "url": "standard/VSCODE.html",
    "revision": "26b4585a61263568872a529ce77847d6"
  },
  {
    "url": "standard/VUE.html",
    "revision": "06e8d94a2afefd1c3cacbf9b05b75bfe"
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

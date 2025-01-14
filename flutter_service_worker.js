'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d2c9493958df4a002f2e4c399e1f5e4a",
".git/config": "eaa2127eb1afc18c3b3e5b44137907a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f517cb57ae04857f4a28de3ccc8f11aa",
".git/HEAD": "3443febbc0919736a82e5e10ec26326b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32d4817eaaa2dfc1df0ea9e520b8a805",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85f70d6b997e56d58907a970c65b709b",
".git/logs/refs/heads/backup-main": "db0e9cc7c5b6c58a3da8dcb7ce8130fc",
".git/logs/refs/heads/main": "5e06457b6a7fc0535eee66883ab4dff6",
".git/logs/refs/remotes/origin/main": "4a23e95c1f973237c469097e1616ea1a",
".git/logs/refs/remotes/origin/master": "f5543c11bbae55a3d5d7780a4d666038",
".git/objects/03/ef28ed34528482b6abb76db07991d57f2a0abc": "9fa38754836f51083b7610a6978dcfa7",
".git/objects/04/39e3fd316dd7e80ea811a40aa94071acf016f4": "f6f1b0c572ed835113f4b9a44930ef2f",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/39584131b818f84d4584b878aee7e62ff0c00e": "f697952928712001200a9ca5e564a563",
".git/objects/0c/c097fa01248bdd4e15dae412ba96c0024b3632": "0f11a9d67821925bda051fab6e152b09",
".git/objects/17/cca186a36a474eb26e1fa5810cb836ae52fb32": "81d5d9296668b5c039d3e6ab5174fd73",
".git/objects/1e/a4833763f47d61b19df4eba87f45317dc221b0": "e73f9ce6c4c9f546c202c800ce615a0d",
".git/objects/1f/433813287c46ddaf9411d82f2d1d752d96344b": "9afd3aee24780ff2782dfa3b6be1cf77",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/21/3c5011e114c09d6f927ad35cfd657627a0a540": "d4f9428b2295391786b0a0b7f872143b",
".git/objects/21/f1aa14b64809d76c000a3abb00c32e1464af02": "1d0b81d903d39518d790d801245797bf",
".git/objects/23/03e6268b65c7ed127b093623f705a0efbb5da7": "277d7139c0c9aea36b71163eaeeff29f",
".git/objects/26/04abab0b6df2bcd57ba9aef31e5aaa9cc3bea8": "47429fa94301dbf31ea7886d9e42d2a3",
".git/objects/26/400d6469968fcad7beead89e334000235ce920": "6571c81fa26453daf6c75b2d1f9fd4c8",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/01e1b360b2b8ed2be51a964381221a32114952": "f61801cab0b6c516f3a1bbaf97570dc5",
".git/objects/2f/c9b370aaa93967d408f9a193eb971c0bc711be": "bd0b22607dbd75fb2ed74b4faa380a88",
".git/objects/2f/ec915c98782dc4f3f181e33cae53b11bde1afc": "1e3c3d7a26aa048cd6e144c78058e554",
".git/objects/30/8200d9ab4b81f1f1ba1be9b3377574b6ab5550": "fca5343c5720f726c661dce16f95763c",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/39/25770f4178edcfe2af630920fddc72dddac8ea": "3276010d4398e62330a9677c1a66717a",
".git/objects/3c/cdafd2eb2ff70bcdc0e02d9a7c45b3ccc3d6da": "3bc492e4210834b9f025f42c336bd907",
".git/objects/41/e9e5b350f246a9b0a0af3f17af433400b16a4d": "7d5aa08eb12a7543b9734deac4edf059",
".git/objects/45/72c4accca8a9b0d4b1fd0901abb16fd4413e19": "ba0dce9ba44189323c4ac0487454ae0c",
".git/objects/46/46ba35fc7f34648519ec984bd12639fd8b90e5": "caf37745470b7aff6e8dfbee86bd90d3",
".git/objects/47/7cbf03ad6652c8d86000578494c01e6c53a508": "06e17b70265dd91a88798e33defe2c49",
".git/objects/49/28264b20d14757f6ffa4fb09cab78b49111369": "5d194fd5024a53220952373ee6b43bcf",
".git/objects/4f/5b59b4e0415bdd495fdd223e347440ac38d9b7": "8599e1cd9c431746e6e8e9d3400309d3",
".git/objects/52/753f7c8d31a65f3e249536467579ae686bd0ff": "179435f63c561814f5d4bf1c28944194",
".git/objects/53/4ccbac0749fbff57f4b95e92bd1020cf667b4b": "e745b8daa6231d47596ff5e81d6373f0",
".git/objects/55/1f7e1ebbf9390134ab9114b76b6a3750c49b4b": "14c4adfe2991bc9dca9476f1c638ed74",
".git/objects/5d/d31a0eb82620d78f5e3be0b051814afbf6f589": "635251ef3b01c5b462e2f35f2526d264",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bbf94458942b85bd59815f981aa9ff933452b4": "94912dc3f361c4b63d102dbe940431e3",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/943aafcd82d5ccd647cf54ad64724b28081f3b": "46bb430475917f31f1604a211dbaec99",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/1378ea3edd62dc2f6db0a8a732815d9a83af3d": "fdad2bf944feb52d0cf183c34367280d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/3d22c2e26929151f9a9114d1fc61c3aebc1181": "3b9ee65978d0bec21a5167b5f71f2adf",
".git/objects/77/17c6d31a650813ab85916ba8d512134bb2bace": "4604ac47497c5c8d5eeec898e70ccad5",
".git/objects/77/f8f374c26d334e666234e6ace148440e467063": "5ba5ee7a10526a98cdce639ef555011b",
".git/objects/78/c09bb5945b8092687d5b58694cc602cc0d0504": "0d896375f6fd8b6454588ff7897895f0",
".git/objects/79/7a7f017e96aa689bf6db63d8087ecf28b40f85": "2e5a37254a455c485ff43dc018867613",
".git/objects/79/c5cee2ad341f7e3873022fe3f2cd8bdad4c608": "7fb006a9cc286137be2d21e327e0a0ac",
".git/objects/7d/2a57fb490ab7097a011affdb928cdda1508424": "fa1666d97eb8ba2719509dc19fca1f99",
".git/objects/7e/5038bef425f1a0cabd8ad2987bfef510f1eda2": "3a7feb1e716ced0ffe7d58da2df9d657",
".git/objects/7f/7550a368a61409c3098733a6bc31e4d94b677c": "4cdcd09a1b693dbeae6ea367703a917e",
".git/objects/84/f05d587734f10936c1cf456d15551853f5a9bf": "9ba2de677b5ded4c9bd449c69a7ce870",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d57226157034e7f1a3909d462f89cb8df45c62": "9e4fc1e251c2beb4b623594cc904c115",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ce902879eace343b770676eb2f60f631634b34": "f47ffea537191446f3f731f25c759ba3",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/84d2cad0253414fc470ae4a109aaf65bdc3262": "65c6db7beb228a7ea60beefe2762b6e9",
".git/objects/8f/49790f1b3129e6257619ee879fcf3838bd31e0": "dbfa04f78315d7945170306185d688fe",
".git/objects/90/6a366478da38c6dc74cc1b2a6a8f1bdcb17ca0": "d0fc748ccd0d7fc151ed526d37e64230",
".git/objects/92/9baa289eaf72265163ff5abc5acd571f14db31": "8e44f31b0b351d1c7820f29833829eb4",
".git/objects/93/2d2323882b9d948cb1cefccb59cd7241fd1767": "dc3ef75c01f9d43e6a031ad9e3241968",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/01921686d06a4eb9f1eb3c98424ce1675dd1c8": "1231914d3a1425c670b5839e4f2f9ddc",
".git/objects/9a/fbc9e39f46d4bf5283f58a690d009de8a890f3": "321bc722e002a4df728d31abafc64184",
".git/objects/9b/00a5793034dc1aedd04beb2e33f88894b352c3": "0fc7db0cc2a5b67e207530bbefce2bd4",
".git/objects/9c/106e770721ca273311b0fed64f3bb5111c8929": "ea8cb910330d8a18a40f7890629274c0",
".git/objects/9d/3e81c3f5ff461646b102dd439277516748cb74": "381bf94315b2eabba8326540379c9300",
".git/objects/a2/ee3dac36bc8bf92e6ce5dbb01ef243e1bbc901": "f542751b4a0c3e150512d9d63cec146e",
".git/objects/a5/3873d03461372c3f7956bb569adddc543890f4": "86b97b5fe470cd6dbadf47ea57325614",
".git/objects/a9/2ef2490db07c9384deb84fbbed4c450b4df016": "5b65739ddd18eb598ca84172f817ee0f",
".git/objects/ab/23fa7aa53683616d3dabcbc15a32ebab65156b": "2fc5a972b765324fae7623319d364091",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dae6d63339feaab4e16359d8d4edd649c2ee84": "f74ab5e89cac3aed9fbb36b25712e820",
".git/objects/b8/92e1fa95d2871d14a24e4674c2f20574a7020f": "ef9ef74794cfa60550ddda0b3beac65d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/b165cf95a59a89b05b29b32a4a7581e63de40a": "be896a0c4888bc2e5e020d68fc6b3101",
".git/objects/c2/92760e52dba1247fba110cd62c19603ecdbf7c": "1015668b883618a985a082c7d0380e1c",
".git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "6a5802fd93c23b446375be0361b55c08",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "c7098e473a1fff4a06cf5b48046ed03b",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "9461d3028da79a0612a5279bb9791892",
".git/objects/cc/6806250914e683103301efff11ed8503d5df3d": "95d4eb87e08f12defb588665d9b29cf9",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/eb36897c8158b469927402a58c99ca5a7bf35a": "125ba11b944a011810a368e3bfdf22ce",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/9b0ca0a79df3feacf3e62da5103d932f602ae7": "a169141030fd90b68a3579f9b796cdb4",
".git/objects/d5/9b905005d8f66f83625d621ab6e354e9ba09e0": "ea4c2efe78b658ad7fcd124301e61938",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/dcca5c4c9f0ac6a2d84d5c594fba50d8414c77": "f471a8574b23aa5893e93030bdc60083",
".git/objects/de/90ede41a258f898e369781ce601ca8f8248c58": "5f924ca3ea2b00e0a258b2b65fde8608",
".git/objects/df/7f763b6d12e9a10e2b0794cb9c856e2af8484f": "dabc72116d105f2f24e9a48b9f5079cd",
".git/objects/e2/d39addb0a2a41e8bb0b98be33252a811c9c11a": "bac1dcc2869f775360338468b16b4757",
".git/objects/e7/45118e5f4184c092f2bf58e81c9a2427082c62": "241565d7954f1565947b30690b29f962",
".git/objects/eb/4b04e8397db4055822b4e532ab0b974c3b8850": "1f93ae28b697a503eff44617dc60ade4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/954b5460b96a3a34985578a9ce4d3717885ed5": "48003be0accb63fdedf37d410beb9c37",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f9/27ed21bb0a40d613c0dcc378b59d1b34342b6a": "6d4b26f4ab4b883ff6519a9f6c329580",
".git/objects/fa/70b06ca5b360b81f5018649b10c859a790d55f": "489cbb41a968fe79daebff700655b36f",
".git/objects/fc/3ccbb7adfa6ae05524dd22e745c6251fd10f7f": "c1d322cd58e69b88ada8a5fb92284950",
".git/objects/fd/43ca3b03fb3d36650e9c053e7cdea6bbbcf231": "1b5352ef25f1da0d7812b4b9deeef565",
".git/ORIG_HEAD": "3443febbc0919736a82e5e10ec26326b",
".git/rebase-merge/author-script": "616f7e3294e5623f11dbf473034728be",
".git/rebase-merge/done": "ca6615c84742ff3eb38a7fd7999cb9f2",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "032b1690e254d6eced05d83c63a21a36",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "51f8f6fa2d4c9260339ec2c989c079de",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "32231a8d2835b497f63fd8a145588df0",
".git/rebase-merge/orig-head": "3443febbc0919736a82e5e10ec26326b",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "3443febbc0919736a82e5e10ec26326b",
".git/REBASE_HEAD": "3443febbc0919736a82e5e10ec26326b",
".git/refs/heads/backup-main": "32231a8d2835b497f63fd8a145588df0",
".git/refs/heads/main": "3443febbc0919736a82e5e10ec26326b",
".git/refs/remotes/origin/main": "06c15cdbf42e4e09ab2aa180f9d4904a",
".git/refs/remotes/origin/master": "3443febbc0919736a82e5e10ec26326b",
"assets/AssetManifest.bin": "979aacadde726bc8a47e3aef66b392b2",
"assets/AssetManifest.bin.json": "09eec4838bc072ddd752561b93db6aa2",
"assets/AssetManifest.json": "567ace4a3685f8185d1c8aa1a673c279",
"assets/assets/images/dp.webp": "8011f8309c430795efb219d07323cbe4",
"assets/assets/images/port.jpg": "1f6390b24b8a1b302b072a634e66f9cc",
"assets/assets/images/project1.jpg": "46094e746067ab14987955a38ccea035",
"assets/assets/images/skills_bg.jpg": "8d49cc5789054b57339201628467c536",
"assets/assets/images/testimoials.jpg": "06b0862423de9354cecb5a9f08e2ff28",
"assets/assets/images/upwork_logo.png": "8dece1ade98c01451111ebc7de306675",
"assets/FontManifest.json": "4fb15aa4f8d54928480644fdce53de45",
"assets/fonts/MaterialIcons-Regular.otf": "95c9b5602d54370fbf5468921c265ce1",
"assets/NOTICES": "3fafc82579f1a409f3e35d107ef7757a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ef8d794809667fb5f50f4c9511716c5c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96ed1d7b79e4c371826e5d1cd2da2cf1",
"/": "96ed1d7b79e4c371826e5d1cd2da2cf1",
"main.dart.js": "8f22e1233d8275f3a4fd2a43d7b783b9",
"main.dart.mjs": "435a21e7c9f93952aa51cce8efe5ca58",
"main.dart.wasm": "1afd48b95974e120682334d233b468fc",
"manifest.json": "fee261776bfbd8c274e990f24eb7585a",
"version.json": "b75afaca35366f6a617706822ca6d969"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

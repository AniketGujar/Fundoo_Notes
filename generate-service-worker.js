const build = require('workbox-build')
const SRC_DIR = './'
const BUILD_DIR = 'dist'

const options = {
    swSource: `${SRC_DIR}/service-worker.js`,
    swDest: `${BUILD_DIR}/sw.js`, // target directory
    globDirectory: BUILD_DIR,
    navigateFallback: '/index.html', // redirect all reqest to the fallback, if no explicit route matches
    clientsClaim: true,
    runtimeCaching: [
        {
            urlPattern: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',//api/(.*)/, // reg ex
            handler: "networkFirst" // caching strategy
        }
    ],
    handleFetch: true
}

build.generateSW(options).then(() => {
    console.log('Generated service worker with static cache')
})

build.injectManifest(options).then(() => {})
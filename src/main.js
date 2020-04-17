// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles/app.scss'

import Quasar, {
    QSeparator
} from 'quasar'

import QuasarLayout from '~/layouts/Quasar.vue'

export default function (Vue, {router, head, isClient}) {

    // Set the Quasar-Layout as default layout
    Vue.component('Layout', QuasarLayout)
    Vue.use(Quasar, {
        config: {
            framework: {
                all: 'auto',
                iconSet: 'fontawesome-v5'
            }
        },
        components: {
            QSeparator
        },
        directives: [
            'ClosePopup'
        ],
        plugins: {}
    })

    head.link.push({rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'})
}

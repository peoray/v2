// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  Vue.use(VueDisqus)

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  })

  head.meta.push({
    charset: 'UTF-8'
  })

  head.meta.push({
    name: 'keywords',
    content: 'Vue,React,JavaScript,HTML,CSS,Web Development,Programming'
  })

  head.meta.push({
    name: 'description',
    content: 'Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist.'
  })

  head.meta.push({
    name: 'author',
    content: 'Emmannuel Raymond'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}



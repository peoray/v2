<template>
  <Layout>
    <About />
    <ProjectListing />
    <!-- <Bio /> -->
    <Contact />
    <Newsletter />
  </Layout>
</template>

<script>
import About from '../components/About';
import ProjectListing from '../components/ProjectListing';
import Newsletter from '../components/Newsletter';
// import Bio from '../components/Bio';
import Contact from '../components/Contact';
export default {
  components: {
    About,
    Contact,
    // Bio,
    Newsletter,
    ProjectListing
  },
  data() {
    return {};
  },
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          'Join my adventure in discovering everything about web programming and life. Everything on this site is for you, ad-free'
      },
      //twitter cards
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:description',
        content:
          'Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist who is passionate about making open-source more accessible and building community, online & offline.'
      },
      { name: 'twitter:title', content: 'Home - Emmanuel Raymond' },
      { name: 'twitter:site', content: 'peoray-blog.netlify.com' }
    ],
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
};
</script>

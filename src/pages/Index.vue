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
          'Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist.'
      },
      //twitter cards
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:description',
        content:
          'Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist.'
      },
      { name: 'twitter:title', content: 'Home - Emmanuel Raymond' },
      { name: 'twitter:site', content: 'https://www.peoray.dev' }
    ],
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
};
</script>

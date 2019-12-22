<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
    >
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">
          Full-Stack Web Developer and an Autodidact
        </div>
        <div class="text-green-700 leading-tight">
          Welcome to my Website
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image
          src="../../static/developer.svg"
          alt="hero"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        This gridsome theme was forked from my
        <a href="https://andremadarang.com">personal website</a>. I added more
        features and decided to release it as an open source project. Check it
        out on
        <a href="https://github.com/drehimself/gridsome-portfolio-starter"
          >GitHub</a
        >
        or check out the
        <a href="https://www.youtube.com/watch?v=uHo6o1TNQeE"
          >screencast I did</a
        >. Feel free to use it for your own site or projects! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Minima, repellat. Dolores iure,
        quas perspiciatis rerum quaerat atque eum repellat autem.
      </p>

      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>
    <ProjectListing />

    <!-- <Bio /> -->

    <Contact />

    <Newsletter />
  </Layout>
</template>

<script>
import ProjectListing from '../components/ProjectListing';
import Newsletter from '../components/Newsletter';
// import Bio from '../components/Bio';
import Contact from '../components/Contact';
export default {
  components: {
    Contact,
    // Bio,
    Newsletter,
    ProjectListing
  },
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          'Join my adventure in discovering everything about web programming and life. Everything on this site is for you, ad-free'
      }
    ],
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
};
</script>

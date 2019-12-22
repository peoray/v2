<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <g-link
        :to="$page.post.category.path"
        class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300"
      >
        {{ $page.post.category.title }}
      </g-link>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <!-- <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div> -->

      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300"
        >
          {{ tag.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
        <!-- <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link> -->
        <!-- <a
          :href="githubLink"
          class="font-bold uppercase"
          target="_blank"
          rel="noopener noreferrer"
          >Edit on Github</a
        > -->
      </div>
      <vue-disqus
        shortname="peoray"
        :identifier="$page.post.title"
      ></vue-disqus>
    </div>

    <Newsletter />
    <!-- <div class="mbt">
      <Bio />
    </div> -->
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
    category {
      title
      path
    }
  }
}
</page-query>

<script>
import Newsletter from '../components/Newsletter';
import Bio from '../components/Bio';
// import config from '../../data/siteConfig';
// import editOnGithub from '../utils/helpers';
// import { editOnGithub } from '../utils/helpers';
export default {
  components: {
    Bio,
    Newsletter
  },
  computed: {
    // githubLink() {
    //   const post = $page.post.frontmatter;
    //   const githubLink = editOnGithub(post);
    //   return githubLink;
    // }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      link: [
        {
          type: 'text/javascript',
          src: 'https://platform.twitter.com/widgets.js'
        }
      ]
    };
  }
};
</script>

<style src="../css/github-markdown.css" />
<style scoped>
.mbt {
  margin: 5rem auto !important;
}
</style>

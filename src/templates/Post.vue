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
        <p>
          If youIf you found any errors or typos in this article, please feel
          free to
          <a
            :href="githubLink"
            class="font-bold"
            target="_blank"
            rel="noopener noreferrer"
            >edit on Github</a
          >.
        </p>
        <!-- <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link> -->
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
    slug
    image
    description
    path
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
import editOnGithub from '../utils/helpers';
export default {
  components: {
    Bio,
    Newsletter
  },
  computed: {
    githubLink() {
      const post = this.$page.post;
      const githubLink = editOnGithub(post);
      return githubLink;
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      titleTemplate: '%s - Blog',
      script: [
        {
          type: 'text/javascript',
          src: 'https://platform.twitter.com/widgets.js'
        },
        {
          type: 'text/javascript',
          src: 'https://static.codepen.io/assets/embed/ei.js'
        }
      ],
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        // Twitter meta tags
        {
          name: 'twitter:title',
          content: this.$page.post.title
        },
        {
          name: 'twitter:description',
          content: this.$page.post.description
        },
        {
          name: 'twitter:creator',
          content: '@peoray_'
        },
        {
          name: 'twitter:site',
          content: '@peoray_'
        },
        {
          name: 'twitter:card',
          content: this.$page.post.image ? 'summary_large_image' : 'summary'
        },
        {
          name: 'twitter:url',
          content:
            'https://peoray-blog.netlify.com/blog/' + this.$page.post.path
        },
        {
          name: 'twitter:image',
          content: this.$page.post.image || ''
        },

        // Facebook meta tags
        {
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          property: 'og:description',
          cotent: this.$page.post.description
        },
        {
          property: 'og:url',
          cotent: 'https://peoray-blog.netlify.com/blog/' + this.$page.post.path
        },
        {
          property: 'og:type',
          cotent: 'article'
        },
        {
          property: 'og:site_name',
          cotent: 'Emmanuel Raymond'
        },
        {
          property: 'og:image',
          content: this.$page.post.image || ''
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

.twitter-tweet {
  margin: 10px auto !important;
}
</style>

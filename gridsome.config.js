// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
// const config = require('./data/siteConfig')
// import config from './data/siteConfig'

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());
if (process.env.NODE_ENV === 'development') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'Emmanuel Raymond',
  author: 'Emmanuel Raymond',
  siteDescription:
    'Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist.',
  siteUrl: 'https://www.peoray.dev',
  // siteName: config.siteTitle,
  // author: config.author,
  // siteDescription: config.siteDescription,
  // siteUrl: config.siteUrl,
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          //   [
          //     'gridsome-plugin-remark-shiki',
          //     { theme: 'nord', skipInline: true }
          //   ]
        ]
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Emmanuel Raymond',
          feed_url: 'https://peoray.dev/rss.xml',
          site_url: 'https://peoray.dev/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://peoray.dev' + node.path,
          author: 'Emmanuel Raymond',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: ' UA-131778153-1'
      }
    }
  ],
  templates: {
    Tag: '/tag/:id',
    Category: '/category/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            transformInlineCode: true
          }
        ],
        [
          '@noxify/gridsome-plugin-remark-embed',
          {
            enabledProviders: ['Youtube', 'Twitter', 'Gist', 'Codepen'],
            Codepen: { height: '584' }
          }
        ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};

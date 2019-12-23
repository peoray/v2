const config = {
  siteTitle: 'Emmanuel Raymond',
  author: 'Emmanuel Raymond',
  siteDescription: 'Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist who is passionate about making open-source more accessible and building community, online & offline.',
  siteUrl: 'https://www.peoray.com',
  userTwitter: '@peoray_',
  repo: 'https://github.com/peoray/peoray.dev',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  googleAnalyticsID: 'UA-131778153-1',
  newsletter: 'https://tinyletter.com/peoray/',





  newsletterEmbed: 'https://taniarascia.substack.com/embed',
  userName: 'Tania',
  userEmail: 'tania@taniarascia.com',
  userTwitter: 'taniarascia',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// // Make sure pathPrefix is empty if not needed
// if (config.pathPrefix === '/') {
//   config.pathPrefix = ''
// } else {
//   // Make sure pathPrefix only contains the first forward slash
//   config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
// }

// // Make sure siteUrl doesn't have an ending forward slash
// if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// // Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

// export default config
module.exports = config
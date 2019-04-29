const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ben Mizes', // Navigation and Site Title
  siteTitleAlt: 'Ben Mizes', // Alternative Site title for SEO
  siteTitleShort: 'Ben', // short_name for manifest
  siteHeadline: 'Ben Mizes: Entreprenuer, Real Estate Investor, and Dog Dad', // Headline for schema.org JSONLD
  siteUrl: 'https://www.benmizes.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Ben Mizes - Real Estate Investor and Entrepreneur',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@benmizes', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}

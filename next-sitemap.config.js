/** @type {import('next-sitemap').IConfig} */

const baseUrl = 'https://www.jschamps.com';

const pages = [
  '/',
  '/about-fullstack-development',
  '/hire-fullstack-developer',
  '/how-fullstack-development-learning-works',
  '/fullstack-development-learning',
  '/software-development-learning-kushinagar',
  '/software-development-learning-lucknow',
];

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => {
    return pages.map((route) => ({
      loc: `${baseUrl}${route}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};

// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: 'https://www.jschamps.com',
//   generateRobotsTxt: true,
//   output: 'export',
// }
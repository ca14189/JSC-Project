/** @type {import('next-sitemap').IConfig} */

const baseUrl = "https://www.jschamps.com";

const pages = [
  "/",
  "/about-fullstack-development",
  "/hire-fullstack-developer",
  "/how-fullstack-development-learning-works",
  "/fullstack-development-learning",
  "/blogs",
  "/software-development-learning-kushinagar",
  "/software-development-learning-lucknow",
  "/software-development-learning-maihar",
  "/our-team",
  "/fullstack-developer-job",
  "/fullstack-developer-login",
];

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,

  // prevent auto generation of same pages
  exclude: pages,

  additionalPaths: async () => {
    return pages.map((route) => ({
      loc: `${baseUrl}${route}`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};

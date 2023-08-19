// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vêtements.api',
  tagline: 'API de vêtement en ligne en français !',
  favicon: 'img/favicon-tshirt.ico',

  // Set the production url of your site here
  url: 'https://vetements-api.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
  
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
  
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Vêtements.api',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-tshirt.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Mise à jour', position: 'left'},
          {
            href: 'https://github.com/EtiamSani/Project-e-commerce-API',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Conception API',
                to: '/docs/category/conception-api',
              },
              {
                label: 'Introduction',
                to: '/docs/conception-api/Introduction',
              },
              {
                label: 'Base de données',
                to: '/docs/conception-api/Base de données',
              },
              {
                label: 'Architecture',
                to: '/docs/conception-api/Conception du back-end',
              },
              {
                label: 'Tests Unitaire',
                to: '/docs/conception-api/Test Unitaires',
              },
              {
                label: 'End-points',
                to: '/docs/category/end-points',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vêtements.API.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

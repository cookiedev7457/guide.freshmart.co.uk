// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fresh-Mart Support',
  tagline: 'Official Staff Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cookiedev7457.github.io',
  // The name of your GitHub project
  baseUrl: '/support-Fresh-Mart.co.uk/',

  // GitHub pages deployment config.
  organizationName: 'cookiedev7457', 
  projectName: 'support-Fresh-Mart.co.uk', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  
  markdown: {
    format: 'md', // Ensures standard markdown is used
    mermaid: true,
  },

  // Fixed the deprecation warning by moving it into the correct place for v3+
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // Points to your main branch for the "Edit this page" link
          editUrl: 'https://github.com/cookiedev7457/support-Fresh-Mart.co.uk/tree/main/',
        },
        blog: false, // Disabled to focus on the portal
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fresh-Mart',
        logo: {
          alt: 'Fresh-Mart Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portalSidebar', // THIS MUST MATCH sidebars.js
            position: 'left',
            label: 'Staff Portal',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Staff Promotions',
                to: '/docs/lr-info/staff-promotions',
              },
              {
                label: 'Training Guide',
                to: '/docs/mr-info/training-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fresh-Mart Portal.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
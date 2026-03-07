// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fresh-Mart Support',
  tagline: 'Staff Portal & Resources',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config
  url: 'https://cookiedev7457.github.io',
  baseUrl: '/support-Fresh-Mart.co.uk/',
  organizationName: 'cookiedev7457', 
  projectName: 'support-Fresh-Mart.co.uk', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cookiedev7457/support-Fresh-Mart.co.uk/tree/main/',
        },
        blog: false, // Disabled blog to keep it a pure portal
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fresh-Mart',
        logo: {
          alt: 'Fresh-Mart Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portalSidebar',
            position: 'left',
            label: 'Staff Portal',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Staff Promotions',
                to: '/docs/lr-info/staff-promotions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fresh-Mart Portal. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
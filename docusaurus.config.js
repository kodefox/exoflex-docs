module.exports = {
  title: 'Exoflex',
  tagline:
    'UI component library for React Native and Web (using react-native-web).',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: '',
  organizationName: 'kodefox', // Usually your GitHub org/user name.
  projectName: 'infra', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Exoflex',
      logo: {
        alt: '',
        src: '',
      },
      links: [
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/kodefox/infra',
          label: 'GitHub',
          position: 'right',
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
              label: 'Getting Started',
              to: 'docs/installation',
            },
            {
              label: 'Contributing',
              to: 'docs/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github Issue',
              href: 'https://github.com/kodefox/infra/issues?q=is%3Aissue',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kodefox/infra',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kodefox',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KodeFox, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [require('./src/plugins/remark-npm2yarn')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    require.resolve('./src/plugins/react-native-web'),
    require.resolve('./src/plugins/exoflex'),
  ],
};

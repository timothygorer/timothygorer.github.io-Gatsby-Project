module.exports = {
  siteMetadata: {
    title: 'Tim Gorer',
    description:
      'Passionate about video journalism, and mobile and backend development. Studying computer science at Cal Poly.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
}

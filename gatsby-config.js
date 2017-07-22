module.exports = {
  siteMetadata: {
    title: 'Thorium',
    author: '@thoriumsim',
    description: `Next generation starship simulator controls.`,
    siteUrl: `https://thorium.ralexanderson.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
    /*{
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            query: `
            {
              allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml'
          }
        ]
      }
    }*/
  ]
};

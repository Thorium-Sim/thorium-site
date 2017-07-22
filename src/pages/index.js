import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import moment from 'moment';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';
import './style.css';

class BlogIndex extends React.Component {
  render() {
    console.log('props', this.props);

    const pageLinks = [];
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    posts
      .sort((a, b) => {
        return moment(a.node.frontmatter.date).isBefore(
          moment(b.node.frontmatter.date)
        )
          ? 1
          : -1;
      })
      .forEach(post => {
        if (post.node.path !== '/404/') {
          const title = get(post, 'node.frontmatter.title') || post.node.path;
          pageLinks.push(
            <div className="blog-post" key={post.node.frontmatter.path}>
              <h2>
                <Link
                  style={{ borderBottom: 'none' }}
                  to={post.node.frontmatter.path}>
                  {title}
                </Link>
              </h2>
              <time
                dateTime={moment(post.node.frontmatter.date).format(
                  'MMMM D, YYYY'
                )}>
                {moment(post.node.frontmatter.date).format('MMMM YYYY')}
              </time>
              <span style={{ padding: '5px' }} />
              <span className="blog-category">
                {post.node.frontmatter.category}
              </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.node.frontmatter.description,
                }}
              />
              <Link className="readmore" to={post.node.frontmatter.path}>
                Read
              </Link>
            </div>
          );
        }
      });

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <ul>
          {pageLinks}
        </ul>
        <Bio />
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            description
            category
            author
            date
          }
        }
      }
    }
  }
`;

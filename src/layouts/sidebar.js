import React from 'react';
import Link from 'gatsby-link';
import SiteLinks from './links';
import './sidebar.css';
import profilePic from './photo.png';

const config = {
  title: 'Thorium',
  author: '@thoriumsim',
  siteDescr: 'Next generation starship simulator controls',
};

class SiteSidebar extends React.Component {
  render() {
    const { location } = this.props;
    const isHome = location.pathname === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt*/
    const header = (
      <header>
        <Link
          style={{
            textDecoration: 'none',
            borderBottom: 'none',
            outline: 'none',
          }}
          to={'/'}>
          <img
            src={profilePic}
            width="75"
            height="75"
            alt="Profile picture of the author"
          />
        </Link>
        {isHome
          ? <h1>
              <Link
                style={{
                  textDecoration: 'none',
                  borderBottom: 'none',
                  color: 'inherit',
                }}
                to={'/'}>
                {' '}{config.author}
              </Link>
            </h1>
          : <h2>
              <Link
                style={{
                  textDecoration: 'none',
                  borderBottom: 'none',
                  color: 'inherit',
                }}
                to={'/'}>
                {' '}{config.author}
              </Link>
            </h2>}
        <p>
          {config.siteDescr}
        </p>
      </header>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt*/

    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="blog-details">
            <header>
              {header}
            </header>
          </div>
          <div className="blog-options">
            <nav className="blog-nav">
              <ul>
                <li>
                  <Link to={'/'} activeClassName="current">
                    {' '}Articles
                  </Link>
                </li>
                <li>
                  <Link to={'/about/'} activeClassName="current">
                    {' '}About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <footer>
            <SiteLinks {...this.props} />
            <p className="copyright">&copy; 2017 All rights reserved.</p>
          </footer>
        </div>
      </div>
    );
  }
}

SiteSidebar.propTypes = {
  location: React.PropTypes.object,
};

export default SiteSidebar;

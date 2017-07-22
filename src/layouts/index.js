import React from 'react';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';
import Sidebar from './sidebar';
import { rhythm, scale } from '../utils/typography';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === '/') {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}>
            Thorium
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(1),
          }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}>
            Thorium
          </Link>
        </h3>
      );
    }
    return (
      <div className="outer-container">
        <div className="sidebar-container">
          <Sidebar {...this.props} />
        </div>
        <div className="main-container">
          {header}
          {children()}
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;

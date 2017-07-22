import React from 'react';
import './links.css';
const config = {
  siteTwitterUrl: 'https://twitter.com/thoriumsim',
  siteGithubUrl: 'https://github.com/thorium-sim',
  siteEmailUrl: 'thoriumsim@gmail.com',
};
const SiteLinks = props => {
  return (
    <div className="blog-links">
      <ul>
        {config.siteTwitterUrl &&
          <li>
            <a href={config.siteTwitterUrl}>
              <i className="fa fa-twitter" />
            </a>
          </li>}
        {config.siteGithubUrl &&
          <li>
            <a href={config.siteGithubUrl}>
              <i className="fa fa-github-alt" />
            </a>
          </li>}
        {config.siteEmailUrl &&
          <li>
            <a href={`mailto:${config.siteEmailUrl}`}>
              <i className="fa fa-envelope-o" />
            </a>
          </li>}
      </ul>
    </div>
  );
};

export default SiteLinks;

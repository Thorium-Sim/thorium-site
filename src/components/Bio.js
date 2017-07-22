import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: rhythm(2.5) }}>
          Next generation starship simulator controls
          <div>
            <a href="https://twitter.com/thoriumsim">
              <strong>@thoriumsim</strong> on Twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;

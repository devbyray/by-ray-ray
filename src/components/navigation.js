import Link from 'gatsby-link';
import React from 'react';

export default () => (
  <nav role="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

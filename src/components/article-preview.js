import Img from 'gatsby-image';
import Link from 'gatsby-link';
import React from 'react';


export default ({ article }) => (
  <div>
    <Img alt="" sizes={article.heroImage.sizes} />
    <h3>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)

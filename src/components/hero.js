import Img from 'gatsby-image';
import React from 'react';


export default ({ data }) => (
  <div>
    <Img alt={data.name} sizes={data.heroImage.sizes} />
    <div>
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)

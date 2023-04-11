import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to buyfy',
  description: 'The best quality products at cheapest rates around the globe',
  keywords:
    'electronics, furniture, shopping, mobile phones, accessories, earphones and headphones, gadgets, technology, buy, shop '
};

export default Meta;

import React, { FC } from 'react';
import Helmet from 'react-helmet';

import ogImage from '../../images/og-image.png';

interface Props {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

const defaultTitle = 'Checklist';
const defaultDescription =
  'Checklist contains the protocols followed by Atolye15 for software development, design, project management and administrative affairs.';
const defaultImage = ogImage;
const defaultType = 'website';
const siteUrl = process.env.GATSBY_PROJECT_LINK;

const SEO: FC<Props> = ({ title, description, type, image }) => {
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    type: type || defaultType,
    image: `${siteUrl}${image || defaultImage}`,
  };

  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        <meta name="description" content={seo.description} />

        <meta property="og:image" content={seo.image} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:type" content={seo.type} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />

        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:site" content="@atolye15" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        <meta name="theme-color" content="#ff0c6f" />
      </Helmet>
    </>
  );
};

export default SEO;

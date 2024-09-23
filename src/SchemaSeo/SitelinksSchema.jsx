// src/SitelinksSchema.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitelinksSchema = () => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "alasayel-tours",
    "url": "https://alasayeltours.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://alasayeltours.com/#/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SitelinksSchema;

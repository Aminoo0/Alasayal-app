// src/SitelinksSchema.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitelinksSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://alasayeltours.com/",  // Change this to your website URL
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://alasayeltours.com/#/{search_term_string}",  // Change this to your search query URL
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

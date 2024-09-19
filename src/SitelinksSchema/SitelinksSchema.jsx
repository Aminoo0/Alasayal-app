// src/SitelinksSchema.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitelinksSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "ما هيا اسرع العربات",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ford Taurus 2024-Car"
      }
    }, {
      "@type": "Question",
      "name": "ما هيا اكبر الشاحنات",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mercedes Bedroom And Sofa Set - Bus"
      }
    }]
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

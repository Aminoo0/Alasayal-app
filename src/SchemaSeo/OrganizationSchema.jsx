import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "الاصايل للنقل",
        "alternateName": "AT",
        "url": "https://alasayeltours.com/",
        "logo": "https://alasayeltours.com/assets/main-logo-Br9GsRWT.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966535877758",
            "contactType": "sales",
            "contactOption": "TollFree",
            "areaServed": "SA",
            "availableLanguage": ["Arabic","en"]
        },
        "sameAs": "https://www.youtube.com/@eitmartours2266"
    }


    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default OrganizationSchema;

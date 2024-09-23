// src/SitelinksSchema.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const ProductSchema = () => {
    let params = useParams()
    const schemaData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": `${params.contact}`,
        "image": "https://alasayeltours.com/assets/our-cars-header-CSisfSyq.jpg",
        "description": "الاصايل للنقل السياحي الفاخر",
        "brand": {
            "@type": "Brand",
            "name": "cars"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "bestRating": "5",
            "worstRating": "4",
            "ratingCount": "100"
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

export default ProductSchema;

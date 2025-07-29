import type { LocalBusiness, WithContext } from 'schema-dts'

// Schema markup para empresa de tecnologia
export const organizationSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://senatechnologies.com.br/#organization",
  "name": "Sena Technologies",
  "legalName": "Sena Technologies LTDA",
  "description": "Especialistas em transformação digital para pequenas empresas, MEIs e profissionais liberais nas regiões Sul e Sudeste do Brasil. Desenvolvimento web, aplicativos mobile, sistemas personalizados e automações em Santa Catarina, Paraná, Rio Grande do Sul, São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo.",
  "url": "https://senatechnologies.com.br",
  "logo": {
    "@type": "ImageObject",
    "url": "https://senatechnologies.com.br/Frame-3.webp",
    "width": 512,
    "height": 512
  },
  "image": [
    {
      "@type": "ImageObject", 
      "url": "https://senatechnologies.com.br/logo-sena.webp",
      "width": 512,
      "height": 512
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-47-99999-9999",
    "contactType": "customer service",
    "email": "irsp2121@gmail.com",
    "availableLanguage": ["Portuguese", "English"],
    "areaServed": ["SC", "PR", "RS", "SP", "RJ", "MG", "ES", "BR"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR",
    "addressRegion": "Santa Catarina",
    "addressLocality": "Joinville"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -26.3044,
    "longitude": -48.8487
  },
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Igor Paes"
  },
  "employees": {
    "@type": "QuantitativeValue",
    "value": "1-10"
  },
  "industry": "Technology",
  "naics": "541511",
  "sameAs": [
    "https://www.linkedin.com/company/sena-technologies",
    "https://www.instagram.com/senatechnologies", 
    "https://github.com/senatechnologies"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Tecnologia",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento de Sites",
          "description": "Sites responsivos, rápidos e otimizados para conversão"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Aplicativos Mobile",
          "description": "Apps nativos e híbridos para iOS e Android"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Sistemas Personalizados",
          "description": "ERPs, CRMs e sistemas sob medida para seu negócio"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chatbots e Automações",
          "description": "Bots inteligentes para WhatsApp, Instagram e sites"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce",
          "description": "Lojas virtuais completas com integração de pagamentos"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "15",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Santos"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excelente trabalho! Criaram um sistema completo para minha empresa. Muito profissionais e atenciosos."
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "Pix"],
  "currenciesAccepted": "BRL",
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": [
    {
      "@type": "State",
      "name": "Santa Catarina",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "State", 
      "name": "Paraná",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "State",
      "name": "Rio Grande do Sul", 
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "State",
      "name": "São Paulo",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "State",
      "name": "Rio de Janeiro",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "State",
      "name": "Minas Gerais",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "State",
      "name": "Espírito Santo",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    {
      "@type": "City",
      "name": "Joinville"
    },
    {
      "@type": "City",
      "name": "Blumenau"
    },
    {
      "@type": "City",
      "name": "Florianópolis"
    },
    {
      "@type": "City",
      "name": "Curitiba"
    },
    {
      "@type": "City", 
      "name": "Porto Alegre"
    },
    {
      "@type": "City",
      "name": "São Paulo"
    },
    {
      "@type": "City",
      "name": "Rio de Janeiro"
    },
    {
      "@type": "City",
      "name": "Belo Horizonte"
    },
    {
      "@type": "City",
      "name": "Vitória"
    }
  ]
}

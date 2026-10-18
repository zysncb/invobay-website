// Site-wide settings. Values that change between environments come from GitHub repository variables (see website/README.md).

/** Search engines are kept out until the site goes public: set the repository variable PUBLIC_ALLOW_INDEXING=true to open it. */
export const ALLOW_INDEXING = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';

/** Where the waitlist form posts (a Formspree-style endpoint). Empty means the form is not connected yet. */
export const WAITLIST_ENDPOINT: string = import.meta.env.PUBLIC_WAITLIST_ENDPOINT ?? '';

/**
 * Invobay is a product of OceanAstra. `about` holds the company introduction for /about, one string per paragraph
 * (provided by OceanAstra, 2026-10-13; Invobay sentence added 2026-10-18). While it is empty the page shows a
 * placeholder. The company facts here follow OceanAstra-Website `content/company.json` word for word — see README —
 * and the wording otherwise stays as the company supplied it; `src/i18n/en.ts` carries the notes on why.
 */
export const COMPANY: { name: string; url: string; host: string; about: string[] } = {
  name: 'OceanAstra',
  url: 'https://oceanastra.net/',
  host: 'oceanastra.net',
  about: [
    'OceanAstra Technologies L.L.C is a technology company registered in Dubai, United Arab Emirates. It holds a commercial licence from the Department of Economy and Tourism, Government of Dubai.',
    'OceanAstra aims to bring AI into every enterprise in the Middle East. It builds AI-native organisation software and management systems for specific industries. It also brings proven technology platforms from elsewhere in the world into the region. Invobay is one of its industry management products, developed and operated in-house.',
    'Its founders have implemented enterprise systems from both sides: inside the organisations that run them and inside the vendors that sell them. The company serves clients in the UAE and the wider GCC, and works in English, Arabic and Chinese.',
  ],
};

/** Team inboxes. Placeholders in [BRACKETS] are shown as text, not links, until real addresses are set. */
export const EMAILS = { partners: 'partnerships@invobay.com', support: 'support@invobay.com', legal: 'legal@invobay.com', api: 'api_access@invobay.com' };
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+$/.test(v);

/** Official sources a business needs. Check these when the authorities move pages. */
export const OFFICIAL = {
  ftaEinvoicing: { label: 'FTA · UAE e-invoicing', url: 'https://www.tax.gov.ae/en/content/uae.einvoicing.aspx' },
  emaratax: { label: 'EmaraTax', url: 'https://eservices.tax.gov.ae/', host: 'eservices.tax.gov.ae' },
  mofEinvoicing: { label: 'Ministry of Finance · e-invoicing', url: 'https://mof.gov.ae/en/about-us/initiatives/einvoicing/' },
  mofAsps: { label: 'Accredited service providers (MoF)', url: 'https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/' },
};

/** The SaaS is not live yet: every sign-up and sign-in action goes to the waitlist, carrying what the visitor wanted. */
export const waitlist = (intent?: string) => (intent ? `/waitlist?intent=${encodeURIComponent(intent)}` : '/waitlist');

export const NAV = [
  { key: 'partners', label: 'Service providers', href: '/service-providers' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'help', label: 'Help centre', href: '/#faq' },
] as const;

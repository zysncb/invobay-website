// Draft legal texts for /legal (docs/project/11 S05), in English only until counsel reviews them (H12).
// One array per section, in the same order as the section titles in i18n `legal.docs`. A paragraph that starts
// with "- " is shown as a list item. Text in [BRACKETS] is still to be filled in by OceanAstra or counsel.
// Facts follow the PRD (docs/product/01): no auto-renew, debit cards only, retention rule R11, managed onboarding F4.

export const LEGAL_EN: Record<string, string[][]> = {
  terms: [
    [
      'Invobay is an online service run by OceanAstra Technologies L.L.C (“OceanAstra”, “we”, “us”), a company registered in Dubai, United Arab Emirates, commercial licence [LICENCE NUMBER], [REGISTERED ADDRESS].',
      'Invobay is not an accredited service provider (ASP) and is not part of the UAE Ministry of Finance or the Federal Tax Authority (FTA). We connect your business to the ASP you choose.',
    ],
    [
      'These terms apply when you create an Invobay account, add companies, buy a membership or other services, or use our website, apps or API. By creating an account you accept them for yourself and for the business you represent.',
      'Your use of an ASP’s service is also governed by that ASP’s own terms, which you accept separately when you choose it. Where the two differ on how invoices are exchanged and reported, the ASP’s terms apply to that part.',
      'Our privacy policy, cookie policy and refund policy on this page form part of these terms.',
    ],
    [
      'You sign in with a one-time code sent to your email address or mobile number, or with Google. Keep access to them secure. You are responsible for what happens under your account.',
      'An account can hold up to 100 companies. Each company is one trade licence. Companies under the same tax registration number share one ASP.',
      'The account Owner manages members, payments and the account itself. Other members get the access their role allows: Admin, Finance or Viewer.',
      'The information you give us about your business must be accurate and kept up to date. We check business documents and may refuse or suspend a company if we can’t verify it, or while a claim to its licence is decided.',
      'You can close your account from your account page at any time. We may close an account that breaks these terms.',
    ],
    [
      'You can use Invobay free to create an account, verify up to two companies and prepare onboarding. Issuing and receiving e-invoices needs a membership, monthly (30 days) or yearly (365 days).',
      'There is no auto-renew. We remind you before your membership ends: 60 days ahead for yearly, 10 days ahead for monthly. If you renew early, the new period starts when the current one ends. When a membership ends, your companies stop issuing and receiving invoices; drafts are kept.',
      'You can also buy extra member seats, invoice credits, extra storage and managed onboarding. Invoice credits are priced per ASP, valid for 12 months, and used only when your ASP accepts a document.',
      'Prices are in UAE dirhams and exclude 5% VAT. We take payment by debit card through our payment provider and issue you a tax invoice for each payment. Payments are non-refundable, as set out in our refund policy. A price change never affects a period you have already paid for.',
    ],
    [
      'Your business data and the invoices you issue and receive belong to you. You allow us to process them to provide Invobay, including sending them to your ASP and creating PDF copies.',
      'You are responsible for the content of your invoices and for your tax obligations, including keeping your records for as long as the law requires (for VAT, at least five years after the end of the tax period). Invobay helps you meet them; it is not tax advice.',
      'We keep invoice files (XML, PDF, ASP and FTA receipts, attachments) and their activity history for one year. After that we keep only the invoice data itself (header and lines) while your account exists. If you have active extra storage, we keep everything until it ends. We tell you 30 days before we delete anything, and you can export it first.',
      'Your membership includes a storage limit. If you go over it, uploads pause until you free space or buy more; your e-invoices still go out.',
    ],
    [
      'To issue and receive e-invoices you must appoint an ASP on EmaraTax and accept that ASP’s terms. Your contract for exchanging and reporting invoices is with the ASP directly.',
      'We send your documents to your ASP and show you the responses from the ASP and the FTA. The ASP validates, exchanges and reports them. We are not responsible for an ASP’s service or decisions. When we detect an ASP outage, we tell you and help you notify the FTA.',
      'We handle your support requests first and pass to the ASP the issues that only it can resolve.',
      'Managed onboarding: if you buy it, our team or our Agent completes the EmaraTax and ASP onboarding steps for you after you sign an authorization. Each EmaraTax sign-in needs your confirmation in UAE PASS. We never ask for or store your UAE PASS or EmaraTax password.',
    ],
    [
      'Don’t use Invobay to issue false or misleading invoices, to break the law, or to process data you have no right to use.',
      'Don’t try to get around our security, reach other customers’ data, overload the service or reverse-engineer it. API access follows the rate limits and documentation we give you.',
      'We may suspend access that breaks these terms or puts others at risk. Where we can, we tell you first.',
    ],
    [
      'We provide Invobay with reasonable skill and care, but we can’t promise it will always be available or free of errors.',
      'As far as the law allows, we are not liable for indirect or consequential loss, or for loss caused by an ASP, the FTA, your own systems or the information you give us. Our total liability in any 12 months is limited to the fees you paid us in that period. [Liability terms to be confirmed by counsel.]',
      'Nothing in these terms limits liability that UAE law does not allow to be limited.',
    ],
    [
      'We may update these terms. For material changes we give you at least 30 days’ notice by email and in the app. If you keep using Invobay after a change takes effect, you accept it.',
      '[Governing law and the courts that hear disputes, to be confirmed by counsel.]',
    ],
    [
      'Questions about these terms: email the address at the top of this page, or write to OceanAstra Technologies L.L.C, [REGISTERED ADDRESS], Dubai, United Arab Emirates.',
    ],
  ],

  privacy: [
    [
      '- Account details: your name, email address, mobile number, and your Google account ID if you sign in with Google.',
      '- Business details: trade licences, VAT and corporate tax certificates, tax registration numbers and addresses, and details of an authorised signatory when you buy managed onboarding or API access.',
      '- Documents: the invoices and credit notes you issue and receive, your customers’ and suppliers’ business details, items, attachments, and the responses from your ASP and the FTA.',
      '- Managed onboarding: the authorization you sign, your UAE PASS identifier for the confirmations you approve, and screenshots of each step. We never collect your UAE PASS or EmaraTax password.',
      '- Licence claims: if you claim a licence that another account holds, the evidence you send, which may include an Emirates ID or passport.',
      '- Payments: our payment provider handles your card details. We keep only a token, the card brand and its last four digits, and your orders and our invoices to you.',
      '- Usage: sign-in history, devices, IP address, the pages you visit and the actions you take in the app, and diagnostic data.',
      '- Messages you send to our support team.',
    ],
    [
      '- To run Invobay: create and secure your account, verify your companies, prepare and send your documents to your ASP, and show you their status.',
      '- To check business documents: we verify the digital signature on FTA certificates and use an AI service to read trade licences and fill in your details. A person reviews the result when the automatic check isn’t conclusive.',
      '- To bill you and issue our tax invoices.',
      '- To send you notices about the service, including compliance and security messages you can’t switch off, and other notifications you choose.',
      '- To keep the service secure, prevent fraud and meet our legal obligations.',
      '- To understand how Invobay is used and improve it, using analytics you can refuse (see the cookie policy).',
      'We don’t sell your personal data.',
    ],
    [
      '- Your ASP, to onboard your companies, exchange and report your documents, and fetch documents sent to you. The ASP processes them under its own terms.',
      '- Service providers that work for us: Alibaba Cloud (hosting, Dubai), Amazon Web Services (email, UAE), Google (AI document reading and Google sign-in), Network International (card payments), [SMS PROVIDER] (text messages) and PostHog (product analytics). If you turn on WhatsApp notifications, Meta processes those messages. [Final list to be confirmed before launch.]',
      '- Authorities, courts or regulators when the law requires it, and our professional advisers under a duty of confidentiality.',
      '- A buyer or successor if OceanAstra’s business is transferred, under the same protections.',
    ],
    [
      'Your business data, documents, certificates and billing records are stored with Alibaba Cloud in Dubai, United Arab Emirates, and backed up in the UAE.',
      'Some service providers process limited data outside the UAE, for example AI document reading and product analytics. For these transfers we use the safeguards UAE data protection law requires.',
    ],
    [
      '- Invoice files and activity history: one year. After that we keep only the invoice data itself (header and lines) while your account exists. With active extra storage, we keep everything until it ends. We tell you 30 days before deletion so you can export.',
      '- Company documents: while the company is on your account, and five years after.',
      '- Licence claim evidence: 12 months after the decision.',
      '- UAE PASS identifier: 30 days after the managed onboarding order closes. Onboarding screenshots: 180 days. Recordings: 30 days.',
      '- Sign-in sessions and application logs: 90 days. Analytics: 13 months. Security audit logs: five years.',
      '- Our invoices to you and payment records: as long as UAE tax law requires us to keep them.',
      'Your own legal duty to keep tax records stays with you.',
    ],
    [
      'Under UAE data protection law you can ask us to give you a copy of your personal data, correct it or delete it, restrict or object to some processing, and give you your data in a portable format. You can withdraw consent, for example to analytics cookies, at any time.',
      'Some data we must keep by law or to protect the service. We tell you when that applies.',
      'You can view and export most of your data in the app. For anything else, contact us. If you are not satisfied with our answer, you can complain to the UAE Data Office. [Regulator details to be confirmed by counsel.]',
    ],
    [
      'OceanAstra Technologies L.L.C is responsible for your personal data in Invobay. Contact us at the address at the top of this page.',
    ],
  ],

  cookies: [
    [
      'Cookies are small files a website stores in your browser. We also use similar technologies, such as local storage.',
    ],
    [
      '- Essential: keep you signed in, protect forms against misuse and remember your language. These are always on.',
      '- Analytics: PostHog, to count visits and see which pages and buttons are used, including heatmaps. Only with your consent.',
      'We don’t use advertising cookies.',
    ],
    [
      'You can change your analytics choice at any time in the cookie settings [link to be added]. You can also block or delete cookies in your browser; if you block essential cookies, signing in won’t work.',
    ],
  ],

  refunds: [
    [
      'Payments for memberships, extra seats, invoice credits, extra storage and managed onboarding are non-refundable. There is no auto-renew, so we only charge you when you buy or renew.',
    ],
    [
      'Invoice credits you don’t use expire 12 months after purchase. If your company cancels its appointment of an ASP, the credits you bought for that ASP stay valid until they expire and work again if you appoint the same ASP again. They can’t be moved to another ASP or refunded.',
    ],
    [
      'Managed onboarding is valid for one year per company. If it isn’t completed in that year, we redo it free.',
      'If an order ends because 10 requests for your UAE PASS confirmation went unanswered, it counts as used. If it ends because of a problem on our side, it doesn’t count.',
    ],
    [
      'If you were charged twice, or charged the wrong amount, because of an error on our side, contact us and we will correct it.',
    ],
    [
      'If you dispute a card payment with your bank, we may cancel the unused credits or services bought with it.',
    ],
    [
      'Questions about a payment: email the address at the top of this page.',
    ],
  ],
};

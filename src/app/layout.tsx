import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ExampleCredit } from '@/components/example-credit';
import { DEMO_SCHEMA, SITE_URL, pageMetadata } from '@/lib/seo';
import { Providers } from '@/components/providers';
import './globals.css';



export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata("Nexus Intelligence Platform \u2014 SaaS Website Demo", "Explore a black-and-gold SaaS marketing demo with product, industry, company, resource, and demo enquiry pages. Built with XavaInf."),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
        <noscript><style>{'.reveal,.reveal-left,.reveal-right,.reveal-fade,.fade-up,main [style*=\"opacity:0;\"],main [style$=\"opacity:0\"]{opacity:1!important;transform:none!important;clip-path:none!important;animation:none!important;transition:none!important}'}</style></noscript>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DEMO_SCHEMA).replace(/</g, '\\u003c') }} />
				<Providers>
					{children}
				  <ExampleCredit />
        </Providers>
			</body>
		</html>
	);
}

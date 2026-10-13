import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Demo Enquiry \u2014 Nexus SaaS Demo", "Try the Nexus enquiry form and its local confirmation state. This example does not send messages or create an account.", "/contact");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}

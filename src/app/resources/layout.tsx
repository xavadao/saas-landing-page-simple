import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Resources \u2014 Nexus SaaS Demo", "Browse example guides and resource cards for the fictional Nexus intelligence platform.", "/resources");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}

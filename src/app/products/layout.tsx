import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Products \u2014 Nexus SaaS Demo", "Explore the fictional Nexus product suite and illustrated workflow features in this interactive SaaS website demo.", "/products");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}

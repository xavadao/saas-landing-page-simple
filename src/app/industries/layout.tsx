import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Industries \u2014 Nexus SaaS Demo", "Browse example Nexus use cases for different industries. The content illustrates a fictional SaaS marketing website.", "/industries");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}

import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Careers \u2014 Nexus SaaS Demo", "Explore sample team values and career listings in the Nexus SaaS website demo. These are illustrative roles.", "/careers");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}

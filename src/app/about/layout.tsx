import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("About \u2014 Nexus SaaS Demo", "Meet the fictional Nexus team and explore its example company story, values, and milestones.", "/about");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}

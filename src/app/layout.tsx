import type { ReactNode } from 'react';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata = {
	title: 'Nexus - The Intelligence Platform',
	description: 'Nexus is the AI-powered operations platform built for high-growth teams. Automate workflows, unify data, and ship faster.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}

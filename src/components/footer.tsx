'use client';

import Link from 'next/link';

const footerLinks = {
	Product: [
		{ label: 'Features', href: '/products' },
		{ label: 'Pricing', href: '/#pricing' },
		{ label: 'Changelog', href: '/resources' },
		{ label: 'Roadmap', href: '/resources' },
	],
	Company: [
		{ label: 'About', href: '/about' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'Blog', href: '/resources' },
		{ label: 'Press', href: '/about' },
	],
	Industries: [
		{ label: 'Finance', href: '/industries' },
		{ label: 'Healthcare', href: '/industries' },
		{ label: 'Manufacturing', href: '/industries' },
		{ label: 'Logistics', href: '/industries' },
	],
	Legal: [
		{ label: 'Privacy', href: '/contact' },
		{ label: 'Terms', href: '/contact' },
		{ label: 'Security', href: '/contact' },
		{ label: 'Cookies', href: '/contact' },
	],
};

export function Footer() {
	return (
		<footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
					<div className="lg:col-span-1">
						<Link href="/" className="flex items-center gap-2 mb-4">
							<div
								className="w-8 h-8 flex items-center justify-center"
								style={{ background: '#f5c518', borderRadius: '2px' }}
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" fill="#000" />
								</svg>
							</div>
							<span className="text-xl font-black tracking-tight text-white" style={{ letterSpacing: '-0.03em' }}>
								NEXUS
							</span>
						</Link>
						<p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
							The intelligence platform for high-growth teams. Automate, unify, and scale.
						</p>
						<div className="flex gap-3">
							{['X', 'Li', 'Gh', 'Yt'].map((icon) => (
								<a
									key={icon}
									href="#"
									className="w-9 h-9 flex items-center justify-center text-xs font-bold transition-all duration-200"
									style={{
										background: 'rgba(255,255,255,0.06)',
										border: '1px solid rgba(255,255,255,0.1)',
										borderRadius: '4px',
										color: 'rgba(255,255,255,0.5)',
									}}
									onMouseEnter={(e) => {
										const el = e.currentTarget;
										el.style.background = 'rgba(245,197,24,0.1)';
										el.style.borderColor = 'rgba(245,197,24,0.4)';
										el.style.color = '#f5c518';
									}}
									onMouseLeave={(e) => {
										const el = e.currentTarget;
										el.style.background = 'rgba(255,255,255,0.06)';
										el.style.borderColor = 'rgba(255,255,255,0.1)';
										el.style.color = 'rgba(255,255,255,0.5)';
									}}
								>
									{icon}
								</a>
							))}
						</div>
					</div>

					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h4
								className="text-xs font-bold uppercase tracking-widest mb-4"
								style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em' }}
							>
								{category}
							</h4>
							<ul className="space-y-3">
								{links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="text-sm transition-colors duration-200"
											style={{ color: 'rgba(255,255,255,0.5)' }}
											onMouseEnter={(e) => { e.currentTarget.style.color = '#f5c518'; }}
											onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div
					className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8"
					style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
				>
					<p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
						© {new Date().getFullYear()} Nexus Technologies, Inc. All rights reserved.
					</p>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 rounded-full" style={{ background: '#22c55e' }} />
						<span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
							All systems operational
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

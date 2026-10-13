export function LogosSection() {
	const logos = [
		'Stripe', 'Salesforce', 'Shopify', 'Airbnb', 'Notion',
		'Figma', 'Vercel', 'Linear', 'Stripe', 'Salesforce', 'Shopify', 'Airbnb',
	];

	return (
		<section
			className="py-16 relative overflow-hidden"
			style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
				<p
					className="text-center text-xs font-semibold uppercase tracking-widest"
					style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}
				>
					Trusted by 10,000+ teams at world-class companies
				</p>
			</div>

			{/* Marquee */}
			<div className="marquee-container">
				<div className="marquee-track">
					{[...logos, ...logos].map((name, i) => (
						<div
							key={i}
							className="flex items-center justify-center mx-10 flex-shrink-0"
							style={{ minWidth: '120px' }}
						>
							<span
								className="text-lg font-black uppercase tracking-tight"
								style={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.02em' }}
							>
								{name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

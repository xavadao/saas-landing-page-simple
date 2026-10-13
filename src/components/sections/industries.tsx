import Link from 'next/link';

const industries = [
	{
		title: 'Financial Services',
		description: 'Automate compliance workflows, reconcile transactions at scale, and detect anomalies before they become incidents.',
		metric: '60% faster close',
		icon: '◈',
	},
	{
		title: 'Healthcare',
		description: 'Streamline patient data flows, automate billing cycles, and maintain HIPAA compliance without manual overhead.',
		metric: '40% admin reduction',
		icon: '⊕',
	},
	{
		title: 'Manufacturing',
		description: 'Connect your supply chain, predict equipment failures, and optimize production schedules with real-time intelligence.',
		metric: '28% cost savings',
		icon: '⊞',
	},
	{
		title: 'Logistics',
		description: 'Unify carrier data, automate dispatch workflows, and give customers real-time visibility into every shipment.',
		metric: '3x delivery speed',
		icon: '⊿',
	},
	{
		title: 'E-Commerce',
		description: 'Sync inventory across channels, automate order fulfillment, and personalize customer experiences at scale.',
		metric: '2x order throughput',
		icon: '◉',
	},
	{
		title: 'SaaS & Tech',
		description: 'Automate customer onboarding, monitor product usage, and trigger lifecycle campaigns based on real behavior.',
		metric: '45% churn reduction',
		icon: '◎',
	},
];

export function IndustriesSection() {
	return (
		<section className="py-24 lg:py-32" style={{ background: '#080808' }}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 reveal">
					<div>
						<div
							className="inline-flex items-center gap-2 mb-6"
							style={{
								background: 'rgba(245,197,24,0.08)',
								border: '1px solid rgba(245,197,24,0.2)',
								borderRadius: '100px',
								padding: '5px 14px',
							}}
						>
							<span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f5c518' }}>
								Industries
							</span>
						</div>
						<h2
							className="font-black leading-none"
							style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Built for every
							<br />
							<span className="text-gradient">vertical.</span>
						</h2>
					</div>
					<Link href="/industries" className="btn-secondary flex-shrink-0">
						View All Industries
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</Link>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{industries.map((industry, i) => (
						<div
							key={industry.title}
							className="group relative rounded-lg p-8 card-hover reveal cursor-pointer"
							style={{
								background: '#0a0a0a',
								border: '1px solid rgba(255,255,255,0.07)',
								animationDelay: `${i * 0.08}s`,
							}}
						>
							{/* Icon */}
							<div
								className="text-3xl mb-6 transition-colors duration-300"
								style={{ color: 'rgba(255,255,255,0.15)' }}
							>
								{industry.icon}
							</div>

							<h3
								className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-400"
								style={{ letterSpacing: '-0.02em' }}
							>
								{industry.title}
							</h3>
							<p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
								{industry.description}
							</p>

							{/* Metric */}
							<div
								className="inline-flex items-center gap-2 px-3 py-1.5 rounded"
								style={{
									background: 'rgba(245,197,24,0.08)',
									border: '1px solid rgba(245,197,24,0.15)',
								}}
							>
								<span className="text-xs font-bold" style={{ color: '#f5c518' }}>
									{industry.metric}
								</span>
							</div>

							{/* Arrow */}
							<div
								className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
								style={{ transform: 'translateX(-4px)' }}
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M4 10h12M12 6l4 4-4 4" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

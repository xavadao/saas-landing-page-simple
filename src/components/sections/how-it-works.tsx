const steps = [
	{
		number: '01',
		title: 'Connect Your Stack',
		description: 'Link your existing tools in minutes. Nexus supports 200+ integrations with one-click OAuth — no API keys, no engineering time.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<path d="M7 14h14M14 7l7 7-7 7" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
	{
		number: '02',
		title: 'Define Your Workflows',
		description: 'Use the visual builder to map your processes. Set triggers, conditions, and actions. Nexus AI suggests optimizations as you build.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<rect x="4" y="4" width="8" height="8" rx="1" stroke="#f5c518" strokeWidth="2" />
				<rect x="16" y="4" width="8" height="8" rx="1" stroke="#f5c518" strokeWidth="2" />
				<rect x="4" y="16" width="8" height="8" rx="1" stroke="#f5c518" strokeWidth="2" />
				<rect x="16" y="16" width="8" height="8" rx="1" stroke="#f5c518" strokeWidth="2" />
			</svg>
		),
	},
	{
		number: '03',
		title: 'Automate & Monitor',
		description: 'Activate your workflows and watch Nexus handle the rest. Real-time monitoring, automatic error recovery, and AI-powered insights keep everything running.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<circle cx="14" cy="14" r="10" stroke="#f5c518" strokeWidth="2" />
				<path d="M14 8v6l4 2" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" />
			</svg>
		),
	},
	{
		number: '04',
		title: 'Scale with Confidence',
		description: 'As your team grows, Nexus scales with you. Enterprise-grade security, 99.9% uptime SLA, and dedicated support at every tier.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<path d="M4 20l6-6 4 4 10-10" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
];

export function HowItWorksSection() {
	return (
		<section
			className="py-24 lg:py-32 relative overflow-hidden"
			style={{ background: '#040404' }}
		>
			{/* Deep SVG background — perspective grid + glow */}
			<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 700" fill="none">
				{/* Horizontal lines fading in from bottom */}
				{[...Array(14)].map((_, i) => (
					<line
						key={`h${i}`}
						x1="0" y1={700 - i * 50}
						x2="1440" y2={700 - i * 50}
						stroke={`rgba(245,197,24,${0.015 + i * 0.003})`}
						strokeWidth="1"
					/>
				))}
				{/* Vertical lines */}
				{[...Array(20)].map((_, i) => (
					<line
						key={`v${i}`}
						x1={i * 76} y1="0"
						x2={i * 76} y2="700"
						stroke="rgba(255,255,255,0.018)"
						strokeWidth="1"
					/>
				))}
				{/* Converging lines from bottom center */}
				{[-5, -3, -1, 1, 3, 5].map((offset, i) => (
					<line
						key={`p${i}`}
						x1={720 + offset * 50} y1="700"
						x2={720 + offset * 600} y2="0"
						stroke={`rgba(245,197,24,${0.02 + i * 0.003})`}
						strokeWidth="1"
					/>
				))}
				{/* Bottom glow */}
				<ellipse cx="720" cy="700" rx="600" ry="250" fill="rgba(245,197,24,0.04)" />
				{/* Corner brackets */}
				<path d="M40 40 L40 80 M40 40 L80 40" stroke="rgba(245,197,24,0.15)" strokeWidth="1" fill="none" />
				<path d="M1400 40 L1400 80 M1400 40 L1360 40" stroke="rgba(245,197,24,0.15)" strokeWidth="1" fill="none" />
			</svg>

			{/* Vignette */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
			/>

			<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<div className="text-center max-w-2xl mx-auto mb-24 reveal">
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
							How It Works
						</span>
					</div>
					<h2
						className="font-black leading-none mb-4"
						style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', color: '#fff' }}
					>
						Up and running
						<br />
						<span className="text-gradient">in under an hour.</span>
					</h2>
					<p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
						No implementation consultants. No 6-month onboarding. Just results.
					</p>
				</div>

				{/* Steps — horizontal with visible connectors */}
				<div className="relative">
					{/* Connector track behind cards */}
					<div
						className="absolute hidden lg:block"
						style={{
							top: '52px',
							left: '14%',
							right: '14%',
							height: '1px',
							background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.15) 10%, rgba(245,197,24,0.15) 90%, transparent)',
						}}
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
						{steps.map((step, i) => (
							<div
								key={step.number}
								className="relative reveal"
								style={{ animationDelay: `${i * 0.12}s` }}
							>
								{/* Step number badge — sits on the connector line */}
								<div className="flex justify-center mb-6">
									<div
										className="relative z-10 w-[52px] h-[52px] flex items-center justify-center font-black text-sm"
										style={{
											background: '#040404',
											border: '1px solid rgba(245,197,24,0.3)',
											color: '#f5c518',
											letterSpacing: '0.05em',
											boxShadow: '0 0 20px rgba(245,197,24,0.1)',
										}}
									>
										{step.number}
									</div>
								</div>

								{/* Card */}
								<div
									className="card-hover p-7"
									style={{
										background: 'rgba(10,10,10,0.9)',
										border: '1px solid rgba(255,255,255,0.07)',
										backdropFilter: 'blur(8px)',
									}}
								>
									{/* Icon */}
									<div
										className="w-12 h-12 flex items-center justify-center mb-5"
										style={{
											background: 'rgba(245,197,24,0.07)',
											border: '1px solid rgba(245,197,24,0.15)',
										}}
									>
										{step.icon}
									</div>

									<h3 className="text-base font-bold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
										{step.title}
									</h3>
									<p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
										{step.description}
									</p>

									{/* Bottom accent */}
									<div
										className="mt-6 h-px"
										style={{ background: `linear-gradient(90deg, rgba(245,197,24,${0.1 + i * 0.05}), transparent)` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

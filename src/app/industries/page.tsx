import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';
import { CtaSection } from '@/components/sections/cta';
import Link from 'next/link';

const industries = [
	{
		name: 'Financial Services',
		icon: '◈',
		headline: 'Automate compliance. Accelerate close.',
		description:
			'Financial teams use Nexus to automate reconciliation, streamline compliance workflows, and detect anomalies in real time. Reduce manual work by 60% while improving accuracy.',
		benefits: [
			'Automated reconciliation across 50+ systems',
			'Real-time compliance monitoring and alerts',
			'Fraud detection with ML anomaly scoring',
			'Regulatory reporting in one click',
		],
		caseStudy: { company: 'Meridian Capital', result: '60% faster month-end close', quote: 'Nexus transformed our finance operations overnight.' },
		color: '#f5c518',
	},
	{
		name: 'Healthcare',
		icon: '⊕',
		headline: 'Streamline care. Reduce admin burden.',
		description:
			'Healthcare organizations trust Nexus to automate patient data flows, billing cycles, and compliance reporting — all while maintaining HIPAA compliance without manual overhead.',
		benefits: [
			'HIPAA-compliant data automation',
			'Automated billing and claims processing',
			'Patient data unification across EHR systems',
			'Staff scheduling and resource optimization',
		],
		caseStudy: { company: 'CareFirst Health', result: '40% reduction in admin costs', quote: 'Our staff spends time on patients, not paperwork.' },
		color: '#22c55e',
	},
	{
		name: 'Manufacturing',
		icon: '⊞',
		headline: 'Predict failures. Optimize production.',
		description:
			'Manufacturing teams use Nexus to connect their supply chain, predict equipment failures before they happen, and optimize production schedules with real-time intelligence.',
		benefits: [
			'Predictive maintenance with IoT integration',
			'Supply chain visibility and automation',
			'Production scheduling optimization',
			'Quality control anomaly detection',
		],
		caseStudy: { company: 'Apex Manufacturing', result: '28% reduction in downtime', quote: 'We prevented 3 major line shutdowns in the first quarter.' },
		color: '#3b82f6',
	},
	{
		name: 'Logistics',
		icon: '⊿',
		headline: 'Unify carriers. Delight customers.',
		description:
			'Logistics companies use Nexus to unify carrier data, automate dispatch workflows, and give customers real-time visibility into every shipment — from first mile to last.',
		benefits: [
			'Multi-carrier data unification',
			'Automated dispatch and routing',
			'Real-time shipment tracking',
			'Exception management and alerts',
		],
		caseStudy: { company: 'SwiftRoute Logistics', result: '3x improvement in delivery speed', quote: 'Customer satisfaction scores went from 72 to 94 in 90 days.' },
		color: '#f97316',
	},
	{
		name: 'E-Commerce',
		icon: '◉',
		headline: 'Sync inventory. Scale fulfillment.',
		description:
			'E-commerce brands use Nexus to sync inventory across channels, automate order fulfillment, and personalize customer experiences based on real behavior data.',
		benefits: [
			'Real-time inventory sync across all channels',
			'Automated order routing and fulfillment',
			'Customer lifecycle automation',
			'Returns and refund workflow automation',
		],
		caseStudy: { company: 'Luminary Commerce', result: '2x order throughput', quote: 'We scaled from 1K to 10K orders/day without adding headcount.' },
		color: '#ec4899',
	},
	{
		name: 'SaaS & Technology',
		icon: '◎',
		headline: 'Automate onboarding. Reduce churn.',
		description:
			'SaaS companies use Nexus to automate customer onboarding, monitor product usage, and trigger lifecycle campaigns based on real behavior — not guesswork.',
		benefits: [
			'Automated customer onboarding flows',
			'Product usage monitoring and alerts',
			'Churn prediction and intervention',
			'Revenue operations automation',
		],
		caseStudy: { company: 'Cloudform', result: '45% reduction in churn', quote: 'Nexus gave us the operational intelligence we were missing.' },
		color: '#8b5cf6',
	},
];

export default function IndustriesPage() {
	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main id="main-content" tabIndex={-1}>
				{/* Hero */}
				<section
					className="relative pt-40 pb-24 overflow-hidden"
					style={{ background: '#050505' }}
				>
					{/* Cinematic SVG architectural background */}
					<div className="absolute inset-0 pointer-events-none overflow-hidden">
						<svg
							viewBox="0 0 1440 700"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute inset-0 w-full h-full"
							style={{ opacity: 0.13 }}
						>
							{/* Perspective floor grid */}
							{[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => (
								<line key={`h${i}`}
									x1={720 - (720 * t)} y1={350 + (350 * t)}
									x2={720 + (720 * t)} y2={350 + (350 * t)}
									stroke="rgba(255,255,255,0.6)" strokeWidth="0.5"
								/>
							))}
							{/* Converging vertical lines */}
							{[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6].map((n, i) => (
								<line key={`v${i}`}
									x1={720} y1={350}
									x2={720 + n * 120} y2={700}
									stroke="rgba(255,255,255,0.5)" strokeWidth="0.5"
								/>
							))}
							{/* Tall structural columns */}
							<rect x="200" y="0" width="2" height="700" fill="rgba(255,255,255,0.4)" />
							<rect x="1240" y="0" width="2" height="700" fill="rgba(255,255,255,0.4)" />
							<rect x="380" y="0" width="1" height="700" fill="rgba(255,255,255,0.2)" />
							<rect x="1060" y="0" width="1" height="700" fill="rgba(255,255,255,0.2)" />
							{/* Horizontal structural bands */}
							{[80,160,240,320,400,480].map((y, i) => (
								<line key={`band${i}`} x1="0" y1={y} x2="1440" y2={y}
									stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
							))}
							{/* Central aperture glow shape */}
							<ellipse cx="720" cy="200" rx="180" ry="260"
								fill="none" stroke="rgba(245,197,24,0.25)" strokeWidth="1" />
							<ellipse cx="720" cy="200" rx="100" ry="160"
								fill="none" stroke="rgba(245,197,24,0.15)" strokeWidth="0.5" />
							{/* Diagonal accent slash */}
							<line x1="900" y1="0" x2="1440" y2="500"
								stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
						</svg>
					</div>

					{/* Strong dark overlay — heaviest at center/bottom where text sits */}
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(5,5,5,0.82) 0%, rgba(5,5,5,0.65) 60%, rgba(5,5,5,0.4) 100%)',
					}} />
					{/* Top fade */}
					<div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{
						background: 'linear-gradient(to bottom, #050505 0%, transparent 100%)',
					}} />
					{/* Bottom fade */}
					<div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{
						background: 'linear-gradient(to top, #050505 0%, transparent 100%)',
					}} />

					{/* Subtle brand radial glow — upper-center */}
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(245,197,24,0.055) 0%, transparent 70%)',
					}} />

					<div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
						<h1
							className="font-black leading-none mb-6"
							style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Built for your
							<br />
							<span className="text-gradient">industry.</span>
						</h1>
						<p
							className="text-xl leading-relaxed mx-auto"
							style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px' }}
						>
							Nexus adapts to the unique workflows, compliance requirements, and data structures of your vertical.
						</p>
					</div>
				</section>

				{/* Industries */}
				{industries.map((industry, i) => (
					<section
						key={industry.name}
						className="py-20 lg:py-28 relative overflow-hidden"
						style={{ background: i % 2 === 0 ? '#080808' : '#060606' }}
					>
						{/* Alternating background depth */}
						{i % 2 === 0 ? (
							<div className="absolute inset-0 pointer-events-none" style={{
								backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
								backgroundSize: '32px 32px',
							}} />
						) : (
							<div className="absolute inset-0 pointer-events-none" style={{
								backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
								backgroundSize: '64px 64px',
							}} />
						)}
						{/* Radial glow anchored to the content side */}
						<div className="absolute inset-0 pointer-events-none" style={{
							background: i % 2 === 0
								? `radial-gradient(ellipse 55% 70% at 0% 50%, ${industry.color}08 0%, transparent 65%)`
								: `radial-gradient(ellipse 55% 70% at 100% 50%, ${industry.color}07 0%, transparent 65%)`,
						}} />
						{/* Top separator */}
						{i > 0 && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />}
						<div className="max-w-7xl mx-auto px-6 lg:px-8">
							<div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
								{/* Copy */}
								<div className={`${i % 2 === 1 ? 'lg:order-2 reveal-right' : 'reveal-left'}`}>
									<div className="text-4xl mb-4" style={{ color: industry.color }}>
										{industry.icon}
									</div>
									<div
										className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded"
										style={{
											background: `${industry.color}12`,
											border: `1px solid ${industry.color}30`,
										}}
									>
										<span className="text-xs font-bold uppercase tracking-widest" style={{ color: industry.color }}>
											{industry.name}
										</span>
									</div>
									<h2
										className="font-black leading-tight mb-4"
										style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
									>
										{industry.headline}
									</h2>
									<p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
										{industry.description}
									</p>
									<ul className="space-y-3 mb-8">
										{industry.benefits.map((benefit) => (
											<li key={benefit} className="flex items-center gap-3">
												<div
													className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
													style={{
														background: `${industry.color}15`,
														border: `1px solid ${industry.color}30`,
													}}
												>
													<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
														<path d="M2 5l2.5 2.5L8 3" stroke={industry.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
													{benefit}
												</span>
											</li>
										))}
									</ul>
									<Link href="/contact" className="btn-primary">
										Explore {industry.name} Solutions
									</Link>
								</div>

								{/* Case study card */}
								<div className={`${i % 2 === 1 ? 'lg:order-1 reveal-left' : 'reveal-right'}`}>
									<div
										className="rounded-lg p-8"
										style={{
											background: '#0a0a0a',
											border: `1px solid ${industry.color}20`,
											boxShadow: `0 0 60px ${industry.color}08`,
										}}
									>
										<div
											className="text-xs font-semibold uppercase tracking-widest mb-6"
											style={{ color: 'rgba(255,255,255,0.3)' }}
										>
											Case Study
										</div>
										<div
											className="text-4xl font-black mb-2"
											style={{ color: industry.color, letterSpacing: '-0.04em' }}
										>
											{industry.caseStudy.result}
										</div>
										<div className="text-sm font-semibold text-white mb-6">
											{industry.caseStudy.company}
										</div>
										<blockquote
											className="text-base leading-relaxed italic"
											style={{ color: 'rgba(255,255,255,0.6)', borderLeft: `3px solid ${industry.color}40`, paddingLeft: '16px' }}
										>
											&ldquo;{industry.caseStudy.quote}&rdquo;
										</blockquote>
									</div>
								</div>
							</div>
						</div>
					</section>
				))}

				<CtaSection />
			</main>
			<Footer />
		</>
	);
}

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';
import { CtaSection } from '@/components/sections/cta';
import Link from 'next/link';

const products = [
	{
		id: 'nexus-flow',
		name: 'Nexus Flow',
		tagline: 'Workflow Automation Engine',
		number: '01',
		description:
			'Build, deploy, and monitor complex multi-step workflows with a visual drag-and-drop editor. From simple notifications to enterprise-grade process orchestration.',
		features: [
			{ title: 'Visual Builder', desc: 'Drag-and-drop workflow editor with 200+ pre-built action blocks.' },
			{ title: 'Smart Branching', desc: 'Conditional logic, loops, and parallel execution paths.' },
			{ title: 'Error Recovery', desc: 'Automatic retry, fallback paths, and dead-letter queues.' },
			{ title: 'Version Control', desc: 'Full workflow history, rollback, and team collaboration.' },
		],
		metrics: [
			{ value: '500K+', label: 'Automations/day' },
			{ value: '99.99%', label: 'Reliability' },
			{ value: '<50ms', label: 'Trigger latency' },
		],
		color: '#f5c518',
		breakText: 'Automation at the speed of thought.',
	},
	{
		id: 'nexus-data',
		name: 'Nexus Data',
		tagline: 'Unified Data Platform',
		number: '02',
		description:
			'Connect every data source in your stack. Nexus Data ingests, transforms, and serves data in real time with zero-copy architecture and automatic schema detection.',
		features: [
			{ title: 'Universal Connectors', desc: '200+ native integrations with one-click OAuth setup.' },
			{ title: 'Real-time Sync', desc: 'Sub-second data propagation across all connected systems.' },
			{ title: 'Schema Intelligence', desc: 'Automatic schema detection, mapping, and conflict resolution.' },
			{ title: 'Data Lineage', desc: 'Full audit trail of every data transformation and movement.' },
		],
		metrics: [
			{ value: '200+', label: 'Integrations' },
			{ value: '<1s', label: 'Sync latency' },
			{ value: '10B+', label: 'Records processed' },
		],
		color: '#3b82f6',
		breakText: 'Every data source. One source of truth.',
	},
	{
		id: 'nexus-ai',
		name: 'Nexus AI',
		tagline: 'Predictive Operations Intelligence',
		number: '03',
		description:
			'AI that monitors your operations 24/7, predicts failures before they happen, and surfaces actionable recommendations that compound over time.',
		features: [
			{ title: 'Anomaly Detection', desc: 'ML models trained on your data to catch issues before they escalate.' },
			{ title: 'Predictive Alerts', desc: 'Get notified of problems hours before they impact users.' },
			{ title: 'Cost Optimization', desc: 'AI-driven recommendations to reduce infrastructure spend.' },
			{ title: 'Natural Language', desc: 'Query your operations data in plain English.' },
		],
		metrics: [
			{ value: '94%', label: 'Prediction accuracy' },
			{ value: '4.2h', label: 'Avg. early warning' },
			{ value: '23%', label: 'Avg. cost reduction' },
		],
		color: '#8b5cf6',
		breakText: 'Intelligence that works while you sleep.',
	},
];

function ProductCinematicBreak({ text, color, index }: { text: string; color: string; index: number }) {
	const svgs = [
		/* Break 0 — diagonal slash + grid convergence */
		<svg key="b0" className="absolute inset-0 w-full h-full" viewBox="0 0 1440 280" preserveAspectRatio="xMidYMid slice" fill="none">
			<line x1="0" y1="280" x2="1440" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
			<line x1="0" y1="200" x2="1440" y2="80" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
			{[0,1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
				<line key={n} x1={n * 120} y1="0" x2={n * 120} y2="280" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
			))}
			<rect x="0" y="0" width="4" height="280" fill={color} opacity="0.7" />
			<rect x="1436" y="0" width="4" height="280" fill={color} opacity="0.15" />
			<circle cx="720" cy="140" r="200" stroke={color} strokeWidth="0.5" opacity="0.06" />
			<circle cx="720" cy="140" r="120" stroke={color} strokeWidth="0.5" opacity="0.04" />
		</svg>,
		/* Break 1 — structural columns + horizontal lines */
		<svg key="b1" className="absolute inset-0 w-full h-full" viewBox="0 0 1440 280" preserveAspectRatio="xMidYMid slice" fill="none">
			{[200, 400, 600, 840, 1040, 1240].map(x => (
				<line key={x} x1={x} y1="0" x2={x} y2="280" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
			))}
			{[70, 140, 210].map(y => (
				<line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
			))}
			<rect x="0" y="0" width="4" height="280" fill={color} opacity="0.7" />
			<line x1="0" y1="140" x2="1440" y2="140" stroke={color} strokeWidth="0.5" opacity="0.12" />
			<rect x="200" y="0" width="1" height="280" fill={color} opacity="0.08" />
			<rect x="1240" y="0" width="1" height="280" fill={color} opacity="0.08" />
		</svg>,
		/* Break 2 — radial rings + crosshair */
		<svg key="b2" className="absolute inset-0 w-full h-full" viewBox="0 0 1440 280" preserveAspectRatio="xMidYMid slice" fill="none">
			{[80, 160, 240, 320, 400].map(r => (
				<circle key={r} cx="720" cy="140" r={r} stroke={color} strokeWidth="0.5" opacity={0.03 + r * 0.0002} />
			))}
			<line x1="720" y1="0" x2="720" y2="280" stroke={color} strokeWidth="0.5" opacity="0.08" />
			<line x1="0" y1="140" x2="1440" y2="140" stroke={color} strokeWidth="0.5" opacity="0.08" />
			<rect x="0" y="0" width="4" height="280" fill={color} opacity="0.7" />
			<circle cx="720" cy="140" r="6" fill={color} opacity="0.3" />
			<circle cx="720" cy="140" r="2" fill={color} opacity="0.8" />
		</svg>,
	];

	return (
		<div className="relative overflow-hidden" style={{ height: '280px', background: '#030303' }}>
			{/* Cinematic SVG environment */}
			{svgs[index % 3]}
			{/* Radial glow */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `radial-gradient(ellipse 60% 80% at 50% 50%, ${color}08 0%, transparent 70%)`,
				}}
			/>
			{/* Dark overlay */}
			<div className="absolute inset-0" style={{ background: 'rgba(3,3,3,0.55)' }} />
			{/* Content */}
			<div className="relative h-full flex items-center justify-center px-6">
				<div className="text-center">
					<p
						className="font-black leading-none"
						style={{
							fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
							letterSpacing: '-0.03em',
							color: 'rgba(255,255,255,0.85)',
						}}
					>
						{text.split(' ').map((word, wi) =>
							wi === 0 ? (
								<span key={wi} style={{ color }}>{word} </span>
							) : (
								<span key={wi}>{word} </span>
							)
						)}
					</p>
				</div>
			</div>
		</div>
	);
}

function ProductShowcase({ product, index }: { product: typeof products[0]; index: number }) {
	const isEven = index % 2 === 0;

	/* Per-product SVG environment for the right panel */
	const envSvgs = [
		/* Flow — node graph / pipeline */
		<svg key="env0" className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 600 500" fill="none">
			<circle cx="100" cy="120" r="28" stroke={product.color} strokeWidth="1" opacity="0.5" />
			<circle cx="300" cy="80" r="28" stroke={product.color} strokeWidth="1" opacity="0.5" />
			<circle cx="500" cy="120" r="28" stroke={product.color} strokeWidth="1" opacity="0.5" />
			<circle cx="200" cy="260" r="28" stroke={product.color} strokeWidth="1" opacity="0.5" />
			<circle cx="400" cy="260" r="28" stroke={product.color} strokeWidth="1" opacity="0.5" />
			<circle cx="300" cy="400" r="28" stroke={product.color} strokeWidth="1" opacity="0.5" />
			<line x1="128" y1="120" x2="272" y2="80" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="328" y1="80" x2="472" y2="120" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="100" y1="148" x2="186" y2="232" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="300" y1="108" x2="214" y2="232" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="300" y1="108" x2="386" y2="232" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="500" y1="148" x2="414" y2="232" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="228" y1="260" x2="372" y2="260" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="228" y1="272" x2="286" y2="372" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<line x1="372" y1="272" x2="314" y2="372" stroke={product.color} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
			<circle cx="100" cy="120" r="8" fill={product.color} opacity="0.6" />
			<circle cx="300" cy="80" r="8" fill={product.color} opacity="0.6" />
			<circle cx="500" cy="120" r="8" fill={product.color} opacity="0.6" />
			<circle cx="300" cy="400" r="8" fill={product.color} opacity="0.8" />
		</svg>,
		/* Data — grid / matrix */
		<svg key="env1" className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 600 500" fill="none">
			{[0,1,2,3,4,5,6,7,8,9,10].map(col => (
				<line key={`c${col}`} x1={col * 60} y1="0" x2={col * 60} y2="500" stroke={product.color} strokeWidth="0.5" opacity="0.4" />
			))}
			{[0,1,2,3,4,5,6,7,8].map(row => (
				<line key={`r${row}`} x1="0" y1={row * 62} x2="600" y2={row * 62} stroke={product.color} strokeWidth="0.5" opacity="0.4" />
			))}
			{[[1,1],[3,2],[5,1],[7,3],[2,4],[4,3],[6,5],[1,6],[3,5],[5,6],[7,4]].map(([c,r], i) => (
				<rect key={i} x={c * 60 + 4} y={r * 62 + 4} width="52" height="54" fill={product.color} opacity="0.08" rx="2" />
			))}
			{[[2,2],[4,1],[6,2],[3,4],[5,3],[2,6],[6,4]].map(([c,r], i) => (
				<rect key={`h${i}`} x={c * 60 + 4} y={r * 62 + 4} width="52" height="54" fill={product.color} opacity="0.18" rx="2" />
			))}
		</svg>,
		/* AI — neural network */
		<svg key="env2" className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 600 500" fill="none">
			{[80,200,320,440].map((y, li) =>
				[100,300,500].map((x, ni) => (
					<circle key={`n${li}${ni}`} cx={x} cy={y} r="12" stroke={product.color} strokeWidth="1" opacity="0.5" />
				))
			)}
			{[80,200,320].map((y1, li) =>
				[100,300,500].map((x1, n1) =>
					[100,300,500].map((x2, n2) => (
						<line
							key={`l${li}${n1}${n2}`}
							x1={x1} y1={y1 + 12}
							x2={x2} y2={y1 + 120 - 12}
							stroke={product.color}
							strokeWidth="0.5"
							opacity={n1 === n2 ? 0.25 : 0.08}
						/>
					))
				)
			)}
			{[100,300,500].map((x, i) => (
				<circle key={`a${i}`} cx={x} cy={440} r="6" fill={product.color} opacity="0.7" />
			))}
		</svg>,
	];

	return (
		<section
			className="relative py-28 lg:py-36 overflow-hidden"
			style={{ background: isEven ? '#060606' : '#040404' }}
		>
			{/* Full-bleed cinematic background */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Architectural grid */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" fill="none">
					{[0,1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
						<line key={`vg${n}`} x1={n * 120} y1="0" x2={n * 120} y2="700" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
					))}
					{[0,1,2,3,4,5,6].map(n => (
						<line key={`hg${n}`} x1="0" y1={n * 116} x2="1440" y2={n * 116} stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
					))}
					{/* Diagonal structural line */}
					<line
						x1={isEven ? '0' : '1440'} y1="0"
						x2={isEven ? '600' : '840'} y2="700"
						stroke="rgba(255,255,255,0.03)" strokeWidth="1"
					/>
				</svg>
				{/* Radial glow behind content */}
				<div
					className="absolute"
					style={{
						width: '800px',
						height: '600px',
						top: '50%',
						left: isEven ? '55%' : '45%',
						transform: 'translate(-50%, -50%)',
						background: `radial-gradient(ellipse at center, ${product.color}0a 0%, transparent 65%)`,
					}}
				/>
				{/* Yellow accent bar */}
				<div
					className="absolute left-0 top-0 bottom-0"
					style={{ width: '3px', background: `linear-gradient(to bottom, transparent, ${product.color}60, transparent)` }}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
				<div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'}`}>

					{/* Left — Copy */}
					<div className="reveal">
						{/* Product number */}
						<div
							className="font-black mb-4 leading-none"
							style={{
								fontSize: 'clamp(4rem, 8vw, 7rem)',
								color: `${product.color}12`,
								letterSpacing: '-0.05em',
								lineHeight: 1,
							}}
						>
							{product.number}
						</div>

						<div
							className="inline-flex items-center gap-2 mb-5 px-3 py-1.5"
							style={{
								background: `${product.color}10`,
								border: `1px solid ${product.color}28`,
								borderRadius: '4px',
							}}
						>
							<div className="w-1.5 h-1.5 rounded-full" style={{ background: product.color }} />
							<span className="text-xs font-bold uppercase tracking-widest" style={{ color: product.color }}>
								{product.tagline}
							</span>
						</div>

						<h2
							className="font-black leading-none mb-6"
							style={{
								fontSize: 'clamp(2.8rem, 5vw, 4rem)',
								letterSpacing: '-0.04em',
								color: '#fff',
							}}
						>
							{product.name}
						</h2>

						<p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '480px' }}>
							{product.description}
						</p>

						{/* Metrics row */}
						<div
							className="flex gap-0 mb-10"
							style={{
								border: `1px solid rgba(255,255,255,0.07)`,
								borderRadius: '6px',
								overflow: 'hidden',
								display: 'inline-flex',
							}}
						>
							{product.metrics.map((m, mi) => (
								<div
									key={m.label}
									className="px-6 py-4"
									style={{
										borderRight: mi < product.metrics.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
										background: 'rgba(255,255,255,0.02)',
									}}
								>
									<div
										className="text-xl font-black mb-0.5"
										style={{ color: product.color, letterSpacing: '-0.03em' }}
									>
										{m.value}
									</div>
									<div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
										{m.label}
									</div>
								</div>
							))}
						</div>

						<div className="flex items-center gap-4">
							<Link href="/contact" className="btn-primary">
								Get Started
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
							<Link
								href="/contact"
								className="text-sm font-semibold"
								style={{ color: 'rgba(255,255,255,0.45)' }}
							>
								View docs
							</Link>
						</div>
					</div>

					{/* Right — Cinematic feature showcase */}
					<div className="reveal-right">
						<div
							className="relative rounded-lg overflow-hidden"
							style={{
								background: 'rgba(255,255,255,0.02)',
								border: `1px solid ${product.color}18`,
								boxShadow: `0 0 80px ${product.color}08, 0 32px 64px rgba(0,0,0,0.6)`,
							}}
						>
							{/* Cinematic environment behind cards */}
							<div
								className="relative overflow-hidden"
								style={{ height: '200px', background: '#020202' }}
							>
								{envSvgs[index]}
								{/* Glow */}
								<div
									className="absolute inset-0"
									style={{
										background: `radial-gradient(ellipse 80% 100% at 50% 100%, ${product.color}12 0%, transparent 60%)`,
									}}
								/>
								{/* Product name watermark */}
								<div
									className="absolute inset-0 flex items-center justify-center"
									style={{ pointerEvents: 'none' }}
								>
									<span
										className="font-black"
										style={{
											fontSize: 'clamp(2rem, 5vw, 3.5rem)',
											letterSpacing: '-0.05em',
											color: `${product.color}15`,
										}}
									>
										{product.name.toUpperCase()}
									</span>
								</div>
								{/* Top bar */}
								<div
									className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-3"
									style={{ borderBottom: `1px solid ${product.color}15`, background: 'rgba(0,0,0,0.4)' }}
								>
									<div className="w-2 h-2 rounded-full" style={{ background: product.color, opacity: 0.8 }} />
									<span className="text-xs font-mono" style={{ color: `${product.color}80` }}>
										{product.tagline.toLowerCase().replace(/ /g, '_')}.live
									</span>
									<div className="ml-auto flex items-center gap-1.5">
										<div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
										<span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>ACTIVE</span>
									</div>
								</div>
							</div>

							{/* Glassmorphism feature cards */}
							<div className="p-5 grid grid-cols-2 gap-3">
								{product.features.map((feature, fi) => (
									<div
										key={feature.title}
										className="group p-4 rounded-md transition-all duration-300"
										style={{
											background: 'rgba(255,255,255,0.03)',
											border: `1px solid rgba(255,255,255,0.06)`,
											backdropFilter: 'blur(12px)',
											boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
											cursor: 'default',
										}}
										onMouseEnter={e => {
											// eslint-disable-next-line @typescript-eslint/no-explicit-any
											const el = e.currentTarget as any;
											el.style.background = `${product.color}08`;
											el.style.borderColor = `${product.color}25`;
											el.style.transform = 'translateY(-2px)';
										}}
										onMouseLeave={e => {
											// eslint-disable-next-line @typescript-eslint/no-explicit-any
											const el = e.currentTarget as any;
											el.style.background = 'rgba(255,255,255,0.03)';
											el.style.borderColor = 'rgba(255,255,255,0.06)';
											el.style.transform = 'translateY(0)';
										}}
									>
										<div className="flex items-center gap-2 mb-2.5">
											<div
												className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
												style={{ background: `${product.color}15`, border: `1px solid ${product.color}25` }}
											>
												<span className="text-xs font-black" style={{ color: product.color }}>
													{String(fi + 1).padStart(2, '0')}
												</span>
											</div>
											<h4 className="text-xs font-bold text-white leading-tight">{feature.title}</h4>
										</div>
										<p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
											{feature.desc}
										</p>
									</div>
								))}
							</div>

							{/* Bottom accent line */}
							<div
								className="h-px"
								style={{ background: `linear-gradient(to right, transparent, ${product.color}40, transparent)` }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function ProductsPage() {
	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main>
				{/* Cinematic Hero */}
				<section
					className="relative overflow-hidden"
					style={{ minHeight: '520px', background: '#030303' }}
				>
					{/* Architectural SVG background */}
					<svg
						className="absolute inset-0 w-full h-full"
						viewBox="0 0 1440 520"
						preserveAspectRatio="xMidYMid slice"
						fill="none"
					>
						{/* Perspective floor grid */}
						{[-6,-4,-2,0,2,4,6].map((offset, i) => (
							<line
								key={`fl${i}`}
								x1={720 + offset * 300} y1="520"
								x2={720 + offset * 60} y2="260"
								stroke="rgba(255,255,255,0.025)" strokeWidth="1"
							/>
						))}
						{[0,1,2,3,4].map(n => (
							<line
								key={`fh${n}`}
								x1="0" y1={260 + n * 65}
								x2="1440" y2={260 + n * 65}
								stroke="rgba(255,255,255,0.02)" strokeWidth="1"
							/>
						))}
						{/* Vertical structural columns */}
						<line x1="360" y1="0" x2="360" y2="520" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
						<line x1="1080" y1="0" x2="1080" y2="520" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
						{/* Diagonal slash */}
						<line x1="0" y1="520" x2="480" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
						{/* Yellow accent bar */}
						<rect x="0" y="0" width="4" height="520" fill="#f5c518" opacity="0.7" />
						{/* Top horizontal rule */}
						<line x1="0" y1="1" x2="1440" y2="1" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
					</svg>

					{/* Radial glow */}
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,197,24,0.06) 0%, transparent 60%)',
						}}
					/>

					{/* Dark overlay */}
					<div className="absolute inset-0" style={{ background: 'rgba(3,3,3,0.5)' }} />

					{/* Content */}
					<div className="relative pt-44 pb-28 max-w-7xl mx-auto px-6 lg:px-8 text-center">
						<div
							className="inline-flex items-center gap-2 mb-8"
							style={{
								background: 'rgba(245,197,24,0.07)',
								border: '1px solid rgba(245,197,24,0.18)',
								borderRadius: '3px',
								padding: '5px 14px',
							}}
						>
							<div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f5c518' }} />
							<span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f5c518' }}>
								Product Suite
							</span>
						</div>

						<h1
							className="font-black leading-none mb-6"
							style={{
								fontSize: 'clamp(3rem, 7vw, 5.5rem)',
								letterSpacing: '-0.04em',
								color: '#fff',
							}}
						>
							The complete
							<br />
							<span style={{ color: '#f5c518' }}>operations stack.</span>
						</h1>

						<p
							className="text-xl leading-relaxed mx-auto mb-12"
							style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '520px' }}
						>
							Three powerful products. One unified platform. Built to work together from day one.
						</p>

						{/* Product nav pills */}
						<div className="flex items-center justify-center gap-3 flex-wrap">
							{products.map(p => (
								<a
									key={p.id}
									href={`#${p.id}`}
									className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-200"
									style={{
										background: 'rgba(255,255,255,0.04)',
										border: '1px solid rgba(255,255,255,0.08)',
										borderRadius: '4px',
										color: 'rgba(255,255,255,0.6)',
									}}
									onMouseEnter={e => {
										// eslint-disable-next-line @typescript-eslint/no-explicit-any
										const el = e.currentTarget as any;
										el.style.borderColor = `${p.color}40`;
										el.style.color = p.color;
									}}
									onMouseLeave={e => {
										// eslint-disable-next-line @typescript-eslint/no-explicit-any
										const el = e.currentTarget as any;
										el.style.borderColor = 'rgba(255,255,255,0.08)';
										el.style.color = 'rgba(255,255,255,0.6)';
									}}
								>
									<div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
									{p.name}
								</a>
							))}
						</div>
					</div>
				</section>

				{/* Products with cinematic breaks */}
				{products.map((product, i) => (
					<div key={product.id} id={product.id}>
						{/* Cinematic break before each product */}
						<ProductCinematicBreak text={product.breakText} color={product.color} index={i} />
						{/* Product showcase */}
						<ProductShowcase product={product} index={i} />
					</div>
				))}

				<CtaSection />
			</main>
			<Footer />
		</>
	);
}

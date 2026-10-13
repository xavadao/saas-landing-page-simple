/* ─── Feature 01: UI-focused ─────────────────────────────────────────────── */
function Feature01Visual() {
	return (
		<div
			className="relative"
			style={{
				background: '#080808',
				border: '1px solid rgba(255,255,255,0.07)',
				filter: 'drop-shadow(0 0 40px rgba(245,197,24,0.07))',
			}}
		>
			{/* Top bar */}
			<div
				className="flex items-center justify-between px-5 py-3"
				style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#060606' }}
			>
				<span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
					Data Sources
				</span>
				<span className="text-xs font-bold flex items-center gap-1.5" style={{ color: '#22c55e' }}>
					<span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
					Live
				</span>
			</div>
			<div className="p-5 space-y-2">
				{[
					{ name: 'PostgreSQL', records: '2.4M', pct: 88, status: 'synced' },
					{ name: 'Salesforce CRM', records: '847K', pct: 72, status: 'synced' },
					{ name: 'Stripe Payments', records: '1.1M', pct: 95, status: 'synced' },
					{ name: 'Google Analytics', records: '5.2M', pct: 61, status: 'syncing' },
				].map((source) => (
					<div key={source.name} className="p-4" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}>
						<div className="flex items-center justify-between mb-2">
							<div className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 rounded-full" style={{ background: source.status === 'synced' ? '#22c55e' : '#f5c518' }} />
								<span className="text-sm font-medium text-white">{source.name}</span>
							</div>
							<div className="text-right">
								<span className="text-xs font-bold text-white">{source.records}</span>
								<span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.25)' }}>{source.status}</span>
							</div>
						</div>
						<div className="h-0.5 w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
							<div
								className="h-full"
								style={{
									width: `${source.pct}%`,
									background: source.status === 'synced' ? 'rgba(34,197,94,0.6)' : '#f5c518',
								}}
							/>
						</div>
					</div>
				))}
			</div>
			{/* Yellow accent bottom */}
			<div style={{ height: '2px', background: 'linear-gradient(90deg, #f5c518, transparent)' }} />
		</div>
	);
}

/* ─── Feature 02: Cinematic image-style visual ───────────────────────────── */
function Feature02Visual() {
	return (
		<div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
			{/* SVG architectural environment */}
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 600 380"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
			>
				<rect width="600" height="380" fill="#050505" />
				{/* Grid */}
				{[...Array(10)].map((_, i) => (
					<line key={`h${i}`} x1="0" y1={i * 42} x2="600" y2={i * 42} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
				))}
				{[...Array(14)].map((_, i) => (
					<line key={`v${i}`} x1={i * 46} y1="0" x2={i * 46} y2="380" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
				))}
				{/* Workflow node diagram */}
				{/* Nodes */}
				<rect x="40" y="160" width="100" height="60" rx="2" fill="rgba(245,197,24,0.08)" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
				<text x="90" y="186" textAnchor="middle" fill="#f5c518" fontSize="9" fontFamily="monospace" fontWeight="bold">TRIGGER</text>
				<text x="90" y="200" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">New Invoice</text>

				<rect x="200" y="100" width="100" height="60" rx="2" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
				<text x="250" y="126" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace" fontWeight="bold">VALIDATE</text>
				<text x="250" y="140" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Amount &gt; $1K</text>

				<rect x="200" y="220" width="100" height="60" rx="2" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
				<text x="250" y="246" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace" fontWeight="bold">ROUTE</text>
				<text x="250" y="260" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Skip &lt; $1K</text>

				<rect x="370" y="60" width="100" height="60" rx="2" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
				<text x="420" y="86" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace" fontWeight="bold">NOTIFY</text>
				<text x="420" y="100" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Finance Team</text>

				<rect x="370" y="160" width="100" height="60" rx="2" fill="rgba(245,197,24,0.08)" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
				<text x="420" y="186" textAnchor="middle" fill="#f5c518" fontSize="9" fontFamily="monospace" fontWeight="bold">UPDATE</text>
				<text x="420" y="200" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">ERP System</text>

				<rect x="370" y="260" width="100" height="60" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
				<text x="420" y="286" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace" fontWeight="bold">ARCHIVE</text>
				<text x="420" y="300" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">S3 Storage</text>

				{/* Connectors */}
				<path d="M140 190 L200 130" stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="4 3" />
				<path d="M140 190 L200 250" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 3" />
				<path d="M300 130 L370 90" stroke="rgba(34,197,94,0.3)" strokeWidth="1" strokeDasharray="4 3" />
				<path d="M300 130 L370 190" stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="4 3" />
				<path d="M300 250 L370 290" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" />

				{/* Animated pulse dots on connectors */}
				<circle cx="170" cy="160" r="3" fill="#f5c518" opacity="0.8" />
				<circle cx="335" cy="110" r="3" fill="#22c55e" opacity="0.8" />

				{/* Corner marks */}
				<path d="M10 10 L10 30 M10 10 L30 10" stroke="rgba(245,197,24,0.2)" strokeWidth="1" fill="none" />
				<path d="M590 370 L590 350 M590 370 L570 370" stroke="rgba(245,197,24,0.15)" strokeWidth="1" fill="none" />
			</svg>
			{/* Gradient overlay */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%, rgba(0,0,0,0.5) 100%)' }}
			/>
			{/* Label */}
			<div className="absolute bottom-5 left-5">
				<div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>
					Visual Workflow Builder
				</div>
			</div>
		</div>
	);
}

/* ─── Feature 03: UI-focused ─────────────────────────────────────────────── */
function Feature03Visual() {
	return (
		<div
			className="relative"
			style={{
				background: '#080808',
				border: '1px solid rgba(255,255,255,0.07)',
				filter: 'drop-shadow(0 0 40px rgba(245,197,24,0.07))',
			}}
		>
			{/* Header */}
			<div
				className="flex items-center gap-3 px-5 py-4"
				style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#060606' }}
			>
				<div className="w-6 h-6 flex items-center justify-center" style={{ background: 'rgba(245,197,24,0.12)', border: '1px solid rgba(245,197,24,0.2)' }}>
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
						<path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" fill="#f5c518" />
					</svg>
				</div>
				<span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f5c518' }}>Nexus AI</span>
				<div className="ml-auto flex items-center gap-1.5">
					<div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f5c518' }} />
					<span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Analyzing</span>
				</div>
			</div>
			{/* AI message */}
			<div className="p-5">
				<div
					className="p-4 mb-5 text-sm leading-relaxed"
					style={{ background: 'rgba(245,197,24,0.04)', border: '1px solid rgba(245,197,24,0.1)', color: 'rgba(255,255,255,0.7)' }}
				>
					&ldquo;Based on current trends, your API costs will exceed budget by 23% in 12 days. I recommend enabling request batching on 3 endpoints.&rdquo;
				</div>
				{/* Metrics */}
				<div className="space-y-3 mb-5">
					{[
						{ label: 'Confidence', value: '94%', color: '#22c55e', pct: 94 },
						{ label: 'Potential Savings', value: '$4,200/mo', color: '#f5c518', pct: 78 },
						{ label: 'Implementation', value: '1-click', color: '#3b82f6', pct: 100 },
					].map((item) => (
						<div key={item.label}>
							<div className="flex items-center justify-between mb-1">
								<span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.label}</span>
								<span className="text-xs font-bold" style={{ color: item.color }}>{item.value}</span>
							</div>
							<div className="h-0.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
								<div className="h-full" style={{ width: `${item.pct}%`, background: item.color, opacity: 0.6 }} />
							</div>
						</div>
					))}
				</div>
				{/* CTA */}
				<div
					className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider cursor-default"
					style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)', color: '#f5c518' }}
				>
					Apply Recommendation
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
						<path d="M2 6h8M7 3l3 3-3 3" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
			</div>
			<div style={{ height: '2px', background: 'linear-gradient(90deg, #f5c518, transparent)' }} />
		</div>
	);
}

/* ─── Copy block shared ───────────────────────────────────────────────────── */
type FeatureCopyProps = {
	number: string;
	title: string;
	description: string;
	bullets: string[];
	flip?: boolean;
};

function FeatureCopy({ number, title, description, bullets, flip }: FeatureCopyProps) {
	return (
		<div className={flip ? 'reveal-right' : 'reveal-left'}>
			<div
				className="font-black mb-6 leading-none select-none"
				style={{ fontSize: '5rem', color: 'rgba(245,197,24,0.1)', letterSpacing: '-0.05em' }}
			>
				{number}
			</div>
			<h3
				className="font-black mb-4 leading-tight"
				style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em', color: '#fff' }}
			>
				{title}
			</h3>
			<p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
				{description}
			</p>
			<ul className="space-y-3">
				{bullets.map((bullet) => (
					<li key={bullet} className="flex items-center gap-3">
						<div
							className="w-5 h-5 flex items-center justify-center flex-shrink-0"
							style={{ background: 'rgba(245,197,24,0.12)', border: '1px solid rgba(245,197,24,0.25)' }}
						>
							<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
								<path d="M2 5l2.5 2.5L8 3" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
						<span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
							{bullet}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}


export function FeaturesSection() {
	return (
		<>
			{/* ── Section header ── */}
			<section className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ background: '#080808' }}>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-2xl reveal">
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
								Platform Features
							</span>
						</div>
						<h2
							className="font-black leading-none mb-4"
							style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Everything your team
							<br />
							<span className="text-gradient">needs to operate.</span>
						</h2>
						<p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
							One platform. Every workflow. Zero complexity.
						</p>
					</div>
				</div>
			</section>

			{/* ── Feature 01: UI left, copy right ── */}
			<section className="py-20 lg:py-28" style={{ background: '#080808' }}>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className="reveal-left">
							<Feature01Visual />
						</div>
						<FeatureCopy
							number="01"
							title="Unified Data Intelligence"
							description="Connect every data source in your stack. Nexus ingests, normalizes, and surfaces insights from 200+ integrations in real time — no data engineering required."
							bullets={['Real-time data sync', '200+ native integrations', 'Automatic schema detection', 'Zero-copy architecture']}
							flip
						/>
					</div>
				</div>
			</section>

			{/* ── Cinematic interlude 1 ── */}
			<section className="relative overflow-hidden" style={{ minHeight: '340px', display: 'flex', alignItems: 'center', background: '#030303' }}>
				<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 340" fill="none">
					{/* Diagonal slash field */}
					{[...Array(20)].map((_, i) => (
						<line key={i} x1={i * 80 - 100} y1="0" x2={i * 80 + 200} y2="340" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
					))}
					<line x1="0" y1="340" x2="1440" y2="0" stroke="rgba(245,197,24,0.06)" strokeWidth="1.5" />
					<polygon points="900,0 1440,0 1440,220" fill="rgba(245,197,24,0.02)" />
					<rect x="80" y="140" width="160" height="1" fill="rgba(245,197,24,0.15)" />
					<rect x="1200" y="200" width="160" height="1" fill="rgba(245,197,24,0.1)" />
					<ellipse cx="1100" cy="170" rx="300" ry="200" fill="rgba(245,197,24,0.025)" />
				</svg>
				<div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
				<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 reveal">
					<div className="flex items-center gap-4 mb-4">
						<div style={{ width: '32px', height: '1px', background: '#f5c518' }} />
						<span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f5c518', letterSpacing: '0.2em' }}>Automation</span>
					</div>
					<h2
						className="font-black leading-none"
						style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', letterSpacing: '-0.04em', color: '#fff', maxWidth: '700px' }}
					>
						Build once.
						<br />
						<span style={{ color: 'rgba(255,255,255,0.3)' }}>Run everywhere.</span>
					</h2>
				</div>
			</section>

			{/* ── Feature 02: copy left, workflow diagram right ── */}
			<section className="py-20 lg:py-28" style={{ background: '#080808' }}>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<FeatureCopy
							number="02"
							title="Intelligent Workflow Automation"
							description="Build complex multi-step automations with a visual editor. Nexus handles branching logic, error recovery, and parallel execution — all without writing a single line of code."
							bullets={['Visual workflow builder', 'Conditional branching', 'Auto-retry & error handling', 'Parallel execution']}
						/>
						<div className="reveal-right">
							<Feature02Visual />
						</div>
					</div>
				</div>
			</section>

			{/* ── Cinematic interlude 2 ── */}
			<section className="relative overflow-hidden" style={{ minHeight: '340px', display: 'flex', alignItems: 'center', background: '#020202' }}>
				<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 340" fill="none">
					{/* Fine cross-grid */}
					{[...Array(25)].map((_, i) => (
						<line key={`h${i}`} x1="0" y1={i * 14} x2="1440" y2={i * 14} stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
					))}
					{[...Array(40)].map((_, i) => (
						<line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="340" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
					))}
					<line x1="0" y1="170" x2="1440" y2="170" stroke="rgba(245,197,24,0.07)" strokeWidth="1" />
					<line x1="720" y1="0" x2="720" y2="340" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />
					<circle cx="720" cy="170" r="120" stroke="rgba(245,197,24,0.05)" strokeWidth="1" fill="none" />
					<circle cx="720" cy="170" r="240" stroke="rgba(245,197,24,0.025)" strokeWidth="1" fill="none" />
					<path d="M340 170 L720 170" stroke="rgba(245,197,24,0.12)" strokeWidth="1" strokeDasharray="6 4" />
					<path d="M720 170 L1100 170" stroke="rgba(245,197,24,0.08)" strokeWidth="1" strokeDasharray="6 4" />
					<circle cx="720" cy="170" r="5" fill="#f5c518" opacity="0.5" />
				</svg>
				<div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%)' }} />
				<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 reveal">
					<div className="text-right ml-auto" style={{ maxWidth: '700px', marginLeft: 'auto' }}>
						<div className="flex items-center justify-end gap-4 mb-4">
							<span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f5c518', letterSpacing: '0.2em' }}>Intelligence</span>
							<div style={{ width: '32px', height: '1px', background: '#f5c518' }} />
						</div>
						<h2
							className="font-black leading-none"
							style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Predict.
							<br />
							<span style={{ color: 'rgba(255,255,255,0.3)' }}>Before it happens.</span>
						</h2>
					</div>
				</div>
			</section>

			{/* ── Feature 03: AI visual left, copy right ── */}
			<section className="py-20 lg:py-28" style={{ background: '#080808' }}>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className="reveal-left">
							<Feature03Visual />
						</div>
						<FeatureCopy
							number="03"
							title="Predictive AI Operations"
							description="Nexus AI monitors your operations 24/7, predicts failures before they happen, and recommends optimizations that compound over time."
							bullets={['Anomaly detection', 'Predictive alerts', 'Cost optimization AI', 'Natural language queries']}
							flip
						/>
					</div>
				</div>
			</section>
		</>
	);
}

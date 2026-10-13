import Link from 'next/link';

export function CtaSection() {
	return (
		<section
			className="relative overflow-hidden"
			style={{ minHeight: '600px', display: 'flex', alignItems: 'center', background: '#010101' }}
		>
			{/* Cinematic SVG background — deep architectural space */}
			<svg
				className="absolute inset-0 w-full h-full pointer-events-none"
				preserveAspectRatio="xMidYMid slice"
				viewBox="0 0 1440 600"
				fill="none"
			>
				{/* Perspective floor grid */}
				{[...Array(10)].map((_, i) => (
					<line
						key={`h${i}`}
						x1="0" y1={600 - i * 60}
						x2="1440" y2={600 - i * 60}
						stroke={`rgba(245,197,24,${0.02 + i * 0.004})`}
						strokeWidth="1"
					/>
				))}
				{/* Converging perspective lines */}
				{[-8, -5, -3, -1, 1, 3, 5, 8].map((offset, i) => (
					<line
						key={`p${i}`}
						x1={720 + offset * 55} y1="600"
						x2={720 + offset * 500} y2="0"
						stroke={`rgba(245,197,24,${0.025 + i * 0.003})`}
						strokeWidth="1"
					/>
				))}
				{/* Vertical structural lines */}
				{[...Array(18)].map((_, i) => (
					<line
						key={`v${i}`}
						x1={i * 84} y1="0"
						x2={i * 84} y2="600"
						stroke="rgba(255,255,255,0.02)"
						strokeWidth="1"
					/>
				))}
				{/* Large yellow glow from below */}
				<ellipse cx="720" cy="650" rx="700" ry="300" fill="rgba(245,197,24,0.06)" />
				<ellipse cx="720" cy="650" rx="400" ry="180" fill="rgba(245,197,24,0.04)" />
				{/* Structural rectangle frames */}
				<rect x="60" y="60" width="240" height="1" fill="rgba(255,255,255,0.07)" />
				<rect x="60" y="60" width="1" height="100" fill="rgba(255,255,255,0.07)" />
				<rect x="1140" y="480" width="240" height="1" fill="rgba(255,255,255,0.06)" />
				<rect x="1379" y="380" width="1" height="100" fill="rgba(255,255,255,0.06)" />
				{/* Yellow accent lines */}
				<line x1="0" y1="300" x2="400" y2="300" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
				<line x1="1040" y1="300" x2="1440" y2="300" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
				{/* Corner brackets */}
				<path d="M40 40 L40 90 M40 40 L90 40" stroke="rgba(245,197,24,0.25)" strokeWidth="1.5" fill="none" />
				<path d="M1400 40 L1400 90 M1400 40 L1350 40" stroke="rgba(245,197,24,0.25)" strokeWidth="1.5" fill="none" />
				<path d="M40 560 L40 510 M40 560 L90 560" stroke="rgba(245,197,24,0.15)" strokeWidth="1.5" fill="none" />
				<path d="M1400 560 L1400 510 M1400 560 L1350 560" stroke="rgba(245,197,24,0.15)" strokeWidth="1.5" fill="none" />
			</svg>

			{/* Dark vignette overlay */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(0,0,0,0.75) 100%)',
				}}
			/>

			{/* Content */}
			<div className="relative w-full max-w-4xl mx-auto px-6 lg:px-8 py-32 text-center reveal">
				{/* Label */}
				<div
					className="inline-flex items-center gap-2 mb-8"
					style={{
						background: 'rgba(245,197,24,0.08)',
						border: '1px solid rgba(245,197,24,0.2)',
						borderRadius: '100px',
						padding: '5px 14px',
					}}
				>
					<div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f5c518' }} />
					<span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f5c518' }}>
						Get Started Today
					</span>
				</div>

				{/* Headline */}
				<h2
					className="font-black leading-none mb-6"
					style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.04em', color: '#fff' }}
				>
					Ready to operate
					<br />
					<span className="text-gradient">at full speed?</span>
				</h2>

				<p
					className="text-xl leading-relaxed mb-12 mx-auto"
					style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px' }}
				>
					Join 10,000+ teams using Nexus to automate their operations, unify their data, and move faster than ever.
				</p>

				{/* CTAs */}
				<div className="flex flex-wrap items-center justify-center gap-4 mb-16">
					<Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
						Start Free Trial — No Card Required
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</Link>
					<Link href="/contact" className="btn-secondary" style={{ padding: '15px 40px', fontSize: '1rem' }}>
						Book a Demo
					</Link>
				</div>

				{/* Trust row */}
				<div className="flex flex-wrap items-center justify-center gap-8">
					{[
						{ label: 'SOC 2 Type II' },
						{ label: '99.9% Uptime SLA' },
						{ label: 'GDPR Compliant' },
						{ label: 'Enterprise Security' },
					].map((item) => (
						<div key={item.label} className="flex items-center gap-2">
							<div className="w-1 h-1 rounded-full" style={{ background: 'rgba(245,197,24,0.5)' }} />
							<span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
								{item.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

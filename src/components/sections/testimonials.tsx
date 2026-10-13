const featured = {
	quote: "Nexus didn't just replace our tools — it changed how we think about operations entirely. We went from reactive firefighting to proactive intelligence. The ROI was visible in week one.",
	author: 'Sarah Chen',
	role: 'VP of Operations',
	company: 'Meridian Capital',
	avatar: 'SC',
	metric: '60% reduction in ops overhead',
};

const secondary = [
	{
		quote: "We went from 3-day reporting cycles to real-time dashboards. Our team makes better decisions faster.",
		author: 'Marcus Williams',
		role: 'CTO',
		company: 'Apex Logistics',
		avatar: 'MW',
	},
	{
		quote: "The workflow builder is genuinely powerful. We automated our entire customer onboarding in a weekend.",
		author: 'Priya Sharma',
		role: 'Head of Product',
		company: 'Cloudform',
		avatar: 'PS',
	},
	{
		quote: "Enterprise-grade security with startup-speed deployment. Nexus is the rare platform that actually delivers on both.",
		author: 'James Okafor',
		role: 'CISO',
		company: 'Vantage Health',
		avatar: 'JO',
	},
];

export function TestimonialsSection() {
	return (
		<section className="relative overflow-hidden" style={{ background: '#030303' }}>

			{/* ── OUTER SPLIT: image panel left + content right ── */}
			<div className="flex flex-col lg:flex-row min-h-[700px]">

				{/* ── LEFT: Cinematic image panel (35%) ── */}
				<div className="relative lg:w-[35%] min-h-[340px] lg:min-h-0 flex-shrink-0 overflow-hidden">

					{/* Architectural SVG environment — deep structural space */}
					<svg
						className="absolute inset-0 w-full h-full"
						preserveAspectRatio="xMidYMid slice"
						viewBox="0 0 560 900"
						fill="none"
					>
						{/* Base: near-black with warm undertone */}
						<rect width="560" height="900" fill="#080706" />

						{/* Deep background plane — receding floor grid */}
						{[...Array(12)].map((_, i) => (
							<line
								key={`hfloor-${i}`}
								x1="0" y1={500 + i * 40}
								x2="560" y2={500 + i * 40}
								stroke="rgba(245,197,24,0.04)"
								strokeWidth="1"
							/>
						))}
						{[...Array(14)].map((_, i) => (
							<line
								key={`vfloor-${i}`}
								x1={i * 43} y1="500"
								x2={280 + (i - 7) * 120} y2="900"
								stroke="rgba(245,197,24,0.03)"
								strokeWidth="1"
							/>
						))}

						{/* Massive vertical structural column — left */}
						<rect x="0" y="0" width="72" height="900" fill="rgba(10,9,8,0.9)" />
						<rect x="72" y="0" width="1" height="900" stroke="rgba(245,197,24,0.12)" strokeWidth="1" fill="none" />
						{/* Column detail lines */}
						<line x1="24" y1="0" x2="24" y2="900" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
						<line x1="48" y1="0" x2="48" y2="900" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

						{/* Massive vertical structural column — right */}
						<rect x="488" y="0" width="72" height="900" fill="rgba(10,9,8,0.85)" />
						<rect x="487" y="0" width="1" height="900" stroke="rgba(245,197,24,0.06)" strokeWidth="1" fill="none" />

						{/* Central architectural void — tall rectangle */}
						<rect x="73" y="0" width="414" height="900" fill="rgba(12,11,10,0.6)" />

						{/* Ceiling plane — receding perspective lines from top center */}
						{[...Array(8)].map((_, i) => (
							<line
								key={`ceil-${i}`}
								x1="280" y1="0"
								x2={73 + i * 59} y2="320"
								stroke="rgba(255,255,255,0.025)"
								strokeWidth="1"
							/>
						))}

						{/* Horizontal structural beams */}
						<rect x="73" y="318" width="414" height="2" fill="rgba(245,197,24,0.08)" />
						<rect x="73" y="560" width="414" height="1" fill="rgba(255,255,255,0.04)" />
						<rect x="73" y="700" width="414" height="1" fill="rgba(255,255,255,0.03)" />

						{/* Tall window / aperture — center */}
						<rect x="200" y="60" width="160" height="260" fill="rgba(245,197,24,0.015)" stroke="rgba(245,197,24,0.1)" strokeWidth="1" />
						{/* Window inner frame */}
						<rect x="210" y="70" width="140" height="240" fill="none" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
						{/* Window cross bar */}
						<line x1="200" y1="190" x2="360" y2="190" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
						<line x1="280" y1="60" x2="280" y2="320" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
						{/* Light bloom through window */}
						<ellipse cx="280" cy="190" rx="90" ry="130" fill="rgba(245,197,24,0.018)" />

						{/* Floor reflection — faint mirror of window */}
						<rect x="200" y="560" width="160" height="180" fill="rgba(245,197,24,0.008)" stroke="rgba(245,197,24,0.04)" strokeWidth="1" />

						{/* Diagonal slash — architectural tension */}
						<line x1="73" y1="900" x2="487" y2="320" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />

						{/* Fine vertical measurement marks on left column */}
						{[...Array(18)].map((_, i) => (
							<line
								key={`mark-${i}`}
								x1="66" y1={50 + i * 46}
								x2="72" y2={50 + i * 46}
								stroke="rgba(245,197,24,0.15)"
								strokeWidth="1"
							/>
						))}

						{/* Ambient yellow glow — low, warm */}
						<ellipse cx="280" cy="820" rx="220" ry="120" fill="rgba(245,197,24,0.04)" />
						<ellipse cx="280" cy="190" rx="160" ry="200" fill="rgba(245,197,24,0.02)" />
					</svg>

					{/* Dark gradient overlay — heavier at edges, lighter in center */}
					<div
						className="absolute inset-0"
						style={{
							background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 100%)',
						}}
					/>
					{/* Bottom fade into content */}
					<div
						className="absolute bottom-0 left-0 right-0 h-32 lg:hidden"
						style={{ background: 'linear-gradient(to bottom, transparent, #030303)' }}
					/>
					{/* Right edge fade into content panel */}
					<div
						className="absolute top-0 right-0 bottom-0 w-24 hidden lg:block"
						style={{ background: 'linear-gradient(to right, transparent, #030303)' }}
					/>

					{/* Yellow accent bar — left edge */}
					<div className="absolute top-0 left-0 bottom-0 w-[3px]" style={{ background: '#f5c518' }} />

					{/* Brand statement overlay — bottom of image */}
					<div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
						{/* Section label */}
						<div className="flex items-center gap-3 mb-6">
							<div style={{ width: '28px', height: '1px', background: '#f5c518' }} />
							<span
								className="text-xs font-bold uppercase"
								style={{ color: '#f5c518', letterSpacing: '0.2em' }}
							>
								Customer Stories
							</span>
						</div>

						{/* Brand statement */}
						<p
							className="font-black leading-tight mb-4"
							style={{
								fontSize: 'clamp(1.4rem, 3vw, 2rem)',
								color: 'rgba(255,255,255,0.92)',
								letterSpacing: '-0.03em',
								maxWidth: '280px',
							}}
						>
							Trusted by teams<br />
							<span style={{ color: '#f5c518' }}>operating</span><br />
							at scale.
						</p>

						{/* Thin divider */}
						<div style={{ width: '40px', height: '1px', background: 'rgba(245,197,24,0.4)', marginBottom: '16px' }} />

						{/* Supporting line */}
						<p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)', maxWidth: '220px', letterSpacing: '0.02em' }}>
							10,000+ teams across 60 countries rely on Nexus to run their most critical operations.
						</p>
					</div>
				</div>

				{/* ── RIGHT: Testimonial content (65%) ── */}
				<div
					className="relative flex-1 flex flex-col justify-center py-16 lg:py-20 px-8 lg:px-14 xl:px-16"
					style={{ background: '#030303' }}
				>
					{/* Subtle dot grid texture */}
					<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 900 900" fill="none">
						{[...Array(22)].map((_, row) =>
							[...Array(22)].map((_, col) => (
								<circle
									key={`${row}-${col}`}
									cx={col * 42 + 21}
									cy={row * 42 + 21}
									r="1"
									fill="rgba(255,255,255,0.03)"
								/>
							))
						)}
						{/* Faint right-side glow */}
						<ellipse cx="900" cy="450" rx="300" ry="400" fill="rgba(245,197,24,0.015)" />
					</svg>

					<div className="relative">
						{/* Featured quote */}
						<div
							className="reveal-left relative p-8 lg:p-10 mb-6"
							style={{
								background: 'rgba(14,13,12,0.9)',
								border: '1px solid rgba(255,255,255,0.07)',
								borderLeft: '3px solid #f5c518',
							}}
						>
							{/* Giant decorative quote mark */}
							<div
								className="absolute top-4 right-6 font-black select-none pointer-events-none"
								style={{ fontSize: '6rem', color: 'rgba(245,197,24,0.05)', lineHeight: 1 }}
							>
								&ldquo;
							</div>

							{/* Stars */}
							<div className="flex gap-1 mb-6">
								{[...Array(5)].map((_, j) => (
									<svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#f5c518">
										<path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
									</svg>
								))}
							</div>

							<blockquote
								className="font-medium leading-relaxed mb-8 relative"
								style={{
									fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
									color: 'rgba(255,255,255,0.82)',
									letterSpacing: '-0.01em',
									maxWidth: '560px',
								}}
							>
								&ldquo;{featured.quote}&rdquo;
							</blockquote>

							<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
								{/* Author */}
								<div className="flex items-center gap-3">
									<div
										className="w-10 h-10 flex items-center justify-center text-xs font-black flex-shrink-0"
										style={{ background: 'rgba(245,197,24,0.15)', border: '1px solid rgba(245,197,24,0.3)', color: '#f5c518' }}
									>
										{featured.avatar}
									</div>
									<div>
										<div className="text-sm font-bold text-white">{featured.author}</div>
										<div className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>
											{featured.role}, {featured.company}
										</div>
									</div>
								</div>

								{/* Metric badge */}
								<div
									className="inline-flex items-center gap-2 px-3 py-1.5"
									style={{ background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.18)' }}
								>
									<svg width="10" height="10" viewBox="0 0 12 12" fill="none">
										<path d="M2 8l3-3 2 2 3-4" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<span className="text-xs font-bold" style={{ color: '#f5c518' }}>{featured.metric}</span>
								</div>
							</div>
						</div>

						{/* Secondary quotes — 2 column grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
							{secondary.map((t, i) => (
								<div
									key={t.author}
									className="reveal card-hover p-6"
									style={{
										background: 'rgba(14,13,12,0.7)',
										border: '1px solid rgba(255,255,255,0.06)',
										animationDelay: `${i * 0.08}s`,
									}}
								>
									<div className="flex gap-1 mb-3">
										{[...Array(5)].map((_, j) => (
											<svg key={j} width="10" height="10" viewBox="0 0 14 14" fill="#f5c518">
												<path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
											</svg>
										))}
									</div>
									<blockquote className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
										&ldquo;{t.quote}&rdquo;
									</blockquote>
									<div className="flex items-center gap-2.5">
										<div
											className="w-7 h-7 flex items-center justify-center text-xs font-black flex-shrink-0"
											style={{ background: 'rgba(245,197,24,0.1)', color: '#f5c518' }}
										>
											{t.avatar}
										</div>
										<div>
											<div className="text-xs font-bold text-white">{t.author}</div>
											<div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.role}, {t.company}</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Stats row */}
						<div
							className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 reveal"
							style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
						>
							{[
								{ value: '10,000+', label: 'Teams worldwide' },
								{ value: '99.9%', label: 'Uptime SLA' },
								{ value: '200+', label: 'Integrations' },
								{ value: '4.9/5', label: 'Customer rating' },
							].map((stat) => (
								<div key={stat.label}>
									<div
										className="font-black mb-1"
										style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.04em', color: '#f5c518' }}
									>
										{stat.value}
									</div>
									<div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

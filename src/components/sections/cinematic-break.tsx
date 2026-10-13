type CinematicBreakProps = {
	headline: string;
	accent?: string;
	sub?: string;
	variant?: 'grid' | 'radial' | 'diagonal' | 'cross';
};

export function CinematicBreak({ headline, accent, sub, variant = 'grid' }: CinematicBreakProps) {
	return (
		<section className="relative overflow-hidden" style={{ minHeight: '420px', display: 'flex', alignItems: 'center' }}>
			{/* Deep layered background */}
			<div className="absolute inset-0" style={{ background: '#020202' }} />

			{/* Variant-specific SVG environment */}
			{variant === 'grid' && (
				<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 420" fill="none">
					{/* Perspective grid floor */}
					{[...Array(12)].map((_, i) => (
						<line
							key={`h${i}`}
							x1="0" y1={420 - i * 35}
							x2="1440" y2={420 - i * 35}
							stroke="rgba(245,197,24,0.04)"
							strokeWidth="1"
						/>
					))}
					{[...Array(20)].map((_, i) => {
						const x = i * 76;
						return (
							<line
								key={`v${i}`}
								x1={x} y1="0"
								x2={x} y2="420"
								stroke="rgba(255,255,255,0.025)"
								strokeWidth="1"
							/>
						);
					})}
					{/* Converging perspective lines from center-bottom */}
					{[-6, -4, -2, 0, 2, 4, 6].map((offset, i) => (
						<line
							key={`p${i}`}
							x1={720 + offset * 60} y1="420"
							x2={720 + offset * 400} y2="0"
							stroke={`rgba(245,197,24,${0.03 + i * 0.005})`}
							strokeWidth="1"
						/>
					))}
					{/* Horizontal accent line */}
					<line x1="0" y1="210" x2="1440" y2="210" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
					{/* Yellow glow orb */}
					<ellipse cx="720" cy="420" rx="500" ry="200" fill="rgba(245,197,24,0.04)" />
					{/* Structural rectangle */}
					<rect x="60" y="60" width="200" height="1" fill="rgba(255,255,255,0.08)" />
					<rect x="60" y="60" width="1" height="80" fill="rgba(255,255,255,0.08)" />
					<rect x="1180" y="300" width="200" height="1" fill="rgba(255,255,255,0.06)" />
					<rect x="1379" y="220" width="1" height="80" fill="rgba(255,255,255,0.06)" />
				</svg>
			)}

			{variant === 'radial' && (
				<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 420" fill="none">
					{/* Concentric rings */}
					{[80, 160, 240, 320, 400, 480, 560].map((r, i) => (
						<circle
							key={r}
							cx="720" cy="210"
							r={r}
							stroke={`rgba(245,197,24,${0.06 - i * 0.007})`}
							strokeWidth="1"
							fill="none"
						/>
					))}
					{/* Radial spokes */}
					{[...Array(16)].map((_, i) => {
						const angle = (i / 16) * Math.PI * 2;
						const x2 = 720 + Math.cos(angle) * 600;
						const y2 = 210 + Math.sin(angle) * 600;
						return (
							<line
								key={i}
								x1="720" y1="210"
								x2={x2} y2={y2}
								stroke="rgba(255,255,255,0.02)"
								strokeWidth="1"
							/>
						);
					})}
					{/* Center glow */}
					<circle cx="720" cy="210" r="4" fill="#f5c518" opacity="0.6" />
					<circle cx="720" cy="210" r="20" fill="rgba(245,197,24,0.08)" />
					<circle cx="720" cy="210" r="60" fill="rgba(245,197,24,0.04)" />
					{/* Corner marks */}
					<rect x="40" y="40" width="60" height="1" fill="rgba(255,255,255,0.1)" />
					<rect x="40" y="40" width="1" height="60" fill="rgba(255,255,255,0.1)" />
					<rect x="1340" y="340" width="60" height="1" fill="rgba(255,255,255,0.08)" />
					<rect x="1399" y="280" width="1" height="60" fill="rgba(255,255,255,0.08)" />
				</svg>
			)}

			{variant === 'diagonal' && (
				<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 420" fill="none">
					{/* Diagonal slash lines */}
					{[...Array(18)].map((_, i) => (
						<line
							key={i}
							x1={i * 90 - 200} y1="0"
							x2={i * 90 + 200} y2="420"
							stroke="rgba(255,255,255,0.025)"
							strokeWidth="1"
						/>
					))}
					{/* Bold diagonal accent */}
					<line x1="0" y1="420" x2="1440" y2="0" stroke="rgba(245,197,24,0.07)" strokeWidth="2" />
					<line x1="0" y1="380" x2="1440" y2="-40" stroke="rgba(245,197,24,0.03)" strokeWidth="1" />
					{/* Large geometric form */}
					<polygon
						points="1100,0 1440,0 1440,280"
						fill="rgba(245,197,24,0.025)"
					/>
					<polygon
						points="0,420 340,420 0,140"
						fill="rgba(255,255,255,0.015)"
					/>
					{/* Accent marks */}
					<rect x="80" y="180" width="120" height="1" fill="rgba(245,197,24,0.15)" />
					<rect x="1240" y="240" width="120" height="1" fill="rgba(245,197,24,0.1)" />
				</svg>
			)}

			{variant === 'cross' && (
				<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 420" fill="none">
					{/* Fine grid */}
					{[...Array(30)].map((_, i) => (
						<line key={`h${i}`} x1="0" y1={i * 14} x2="1440" y2={i * 14} stroke="rgba(255,255,255,0.018)" strokeWidth="1" />
					))}
					{[...Array(50)].map((_, i) => (
						<line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="420" stroke="rgba(255,255,255,0.018)" strokeWidth="1" />
					))}
					{/* Cross-hair center */}
					<line x1="0" y1="210" x2="1440" y2="210" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
					<line x1="720" y1="0" x2="720" y2="420" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
					{/* Target rings */}
					<circle cx="720" cy="210" r="100" stroke="rgba(245,197,24,0.05)" strokeWidth="1" fill="none" />
					<circle cx="720" cy="210" r="200" stroke="rgba(245,197,24,0.03)" strokeWidth="1" fill="none" />
					{/* Corner brackets */}
					<path d="M40 40 L40 80 M40 40 L80 40" stroke="rgba(245,197,24,0.2)" strokeWidth="1.5" fill="none" />
					<path d="M1400 40 L1400 80 M1400 40 L1360 40" stroke="rgba(245,197,24,0.2)" strokeWidth="1.5" fill="none" />
					<path d="M40 380 L40 340 M40 380 L80 380" stroke="rgba(245,197,24,0.2)" strokeWidth="1.5" fill="none" />
					<path d="M1400 380 L1400 340 M1400 380 L1360 380" stroke="rgba(245,197,24,0.2)" strokeWidth="1.5" fill="none" />
				</svg>
			)}

			{/* Dark gradient vignette */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)',
				}}
			/>

			{/* Content */}
			<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 reveal">
				<div className="max-w-3xl">
					{accent && (
						<div className="flex items-center gap-3 mb-6">
							<div style={{ width: '40px', height: '1px', background: '#f5c518' }} />
							<span
								className="text-xs font-bold uppercase tracking-widest"
								style={{ color: '#f5c518', letterSpacing: '0.2em' }}
							>
								{accent}
							</span>
						</div>
					)}
					<h2
						className="font-black leading-none"
						style={{
							fontSize: 'clamp(2.8rem, 6vw, 5rem)',
							letterSpacing: '-0.04em',
							color: '#fff',
						}}
					>
						{headline}
					</h2>
					{sub && (
						<p
							className="mt-6 text-lg leading-relaxed"
							style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px' }}
						>
							{sub}
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

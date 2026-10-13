import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';
import { CtaSection } from '@/components/sections/cta';

const milestones = [
	{ year: '2019', event: 'Founded in San Francisco with a mission to make operations intelligent.' },
	{ year: '2020', event: 'Launched Nexus Flow — our first workflow automation product. 500 customers in 6 months.' },
	{ year: '2021', event: 'Series A: $18M raised. Launched Nexus Data with 100+ integrations.' },
	{ year: '2022', event: 'Series B: $65M raised. Expanded to Europe and APAC. 2,000+ customers.' },
	{ year: '2023', event: 'Launched Nexus AI. Crossed $50M ARR. Named a Gartner Cool Vendor.' },
	{ year: '2024', event: 'General Availability of the full Nexus platform. 10,000+ teams worldwide.' },
];

const team = [
	{ name: 'Alex Rivera', role: 'CEO & Co-Founder', bio: 'Former VP Engineering at Stripe. Built operations infrastructure at scale.' },
	{ name: 'Jordan Kim', role: 'CTO & Co-Founder', bio: 'Ex-Google Brain. PhD in distributed systems from MIT.' },
	{ name: 'Sam Patel', role: 'CPO', bio: 'Former PM at Notion and Figma. Obsessed with product-led growth.' },
	{ name: 'Taylor Brooks', role: 'CFO', bio: 'Previously CFO at two unicorns. Expert in SaaS finance and scaling.' },
	{ name: 'Morgan Lee', role: 'VP Sales', bio: 'Built enterprise sales teams at Salesforce and HubSpot.' },
	{ name: 'Casey Zhang', role: 'VP Engineering', bio: 'Former Staff Engineer at Cloudflare. Expert in distributed systems.' },
];

const investors = ['Sequoia Capital', 'Andreessen Horowitz', 'Founders Fund', 'Tiger Global', 'Coatue'];

export default function AboutPage() {
	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main id="main-content" tabIndex={-1}>
				{/* Hero — cinematic full-bleed */}
				<section className="relative overflow-hidden" style={{ height: '100vh', minHeight: '680px', maxHeight: '900px' }}>

					{/* Architectural SVG background with slow zoom */}
					<div
						className="absolute inset-0"
						style={{
							animation: 'heroZoom 18s ease-in-out infinite alternate',
							transformOrigin: 'center center',
						}}
					>
						<svg
							viewBox="0 0 1440 900"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
							style={{ width: '100%', height: '100%', display: 'block' }}
						>
							<defs>
								<radialGradient id="abtHeroGlow" cx="72%" cy="38%" r="45%">
									<stop offset="0%" stopColor="#f5c518" stopOpacity="0.09" />
									<stop offset="100%" stopColor="#000" stopOpacity="0" />
								</radialGradient>
								<radialGradient id="abtCenterGlow" cx="50%" cy="50%" r="40%">
									<stop offset="0%" stopColor="#1a1a1a" stopOpacity="1" />
									<stop offset="100%" stopColor="#000000" stopOpacity="1" />
								</radialGradient>
								<filter id="abtBlur">
									<feGaussianBlur stdDeviation="0.6" />
								</filter>
							</defs>

							{/* Base */}
							<rect width="1440" height="900" fill="#050505" />

							{/* Deep perspective floor grid */}
							{[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => (
								<line
									key={`fg-${i}`}
									x1={720 - (720 * t)} y1="900"
									x2={720 - (720 * t * 0.05)} y2="520"
									stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1"
									filter="url(#abtBlur)"
								/>
							))}
							{[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => (
								<line
									key={`fgr-${i}`}
									x1={720 + (720 * t)} y1="900"
									x2={720 + (720 * t * 0.05)} y2="520"
									stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1"
									filter="url(#abtBlur)"
								/>
							))}
							{/* Horizontal floor lines */}
							{[0,1,2,3,4,5,6].map((i) => {
								const y = 520 + (i * 63);
								const spread = i * 110;
								return (
									<line key={`fh-${i}`} x1={720 - spread} y1={y} x2={720 + spread} y2={y}
										stroke="#ffffff" strokeOpacity="0.035" strokeWidth="1" />
								);
							})}

							{/* Left structural column */}
							<rect x="160" y="0" width="3" height="900" fill="#ffffff" fillOpacity="0.06" />
							<rect x="161" y="0" width="80" height="900" fill="#ffffff" fillOpacity="0.012" />
							<rect x="240" y="0" width="1" height="900" fill="#ffffff" fillOpacity="0.04" />
							{/* Column detail lines */}
							{[80,160,240,320,400,480,560,640,720,800].map((y, i) => (
								<line key={`lcd-${i}`} x1="160" y1={y} x2="241" y2={y}
									stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
							))}

							{/* Right structural column */}
							<rect x="1197" y="0" width="3" height="900" fill="#ffffff" fillOpacity="0.06" />
							<rect x="1200" y="0" width="80" height="900" fill="#ffffff" fillOpacity="0.012" />
							<rect x="1279" y="0" width="1" height="900" fill="#ffffff" fillOpacity="0.04" />
							{[80,160,240,320,400,480,560,640,720,800].map((y, i) => (
								<line key={`rcd-${i}`} x1="1197" y1={y} x2="1280" y2={y}
									stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
							))}

							{/* Ceiling perspective lines converging to vanishing point */}
							{[-400,-280,-160,-60,0,60,160,280,400].map((offset, i) => (
								<line
									key={`cl-${i}`}
									x1={720 + offset * 2.2} y1="0"
									x2={720 + offset * 0.08} y2="480"
									stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1"
									filter="url(#abtBlur)"
								/>
							))}

							{/* Central aperture — tall window of light */}
							<rect x="620" y="0" width="200" height="520" fill="#f5c518" fillOpacity="0.025" />
							<rect x="660" y="0" width="120" height="520" fill="#f5c518" fillOpacity="0.03" />
							<rect x="700" y="0" width="40" height="520" fill="#f5c518" fillOpacity="0.04" />
							{/* Window frame */}
							<rect x="620" y="0" width="1" height="520" fill="#f5c518" fillOpacity="0.15" />
							<rect x="820" y="0" width="1" height="520" fill="#f5c518" fillOpacity="0.15" />
							<line x1="620" y1="520" x2="820" y2="520" stroke="#f5c518" strokeOpacity="0.1" strokeWidth="1" />

							{/* Floor reflection of window */}
							<rect x="620" y="520" width="200" height="380" fill="#f5c518" fillOpacity="0.012" />
							<rect x="660" y="520" width="120" height="380" fill="#f5c518" fillOpacity="0.015" />

							{/* Diagonal architectural slash — right side */}
							<line x1="900" y1="0" x2="1440" y2="600" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1.5" />
							<line x1="940" y1="0" x2="1440" y2="540" stroke="#ffffff" strokeOpacity="0.025" strokeWidth="1" />

							{/* Radial glow — right side brand accent */}
							<rect x="0" y="0" width="1440" height="900" fill="url(#abtHeroGlow)" />

							{/* Subtle horizontal rule at eye level */}
							<line x1="0" y1="480" x2="1440" y2="480" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
						</svg>
					</div>

					{/* Grain texture overlay */}
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
							backgroundRepeat: 'repeat',
							backgroundSize: '200px 200px',
							opacity: 0.6,
						}}
					/>

					{/* Dark gradient overlay — heavy left, fades right */}
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background: 'linear-gradient(105deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.25) 100%)',
						}}
					/>
					{/* Top fade */}
					<div
						className="absolute inset-x-0 top-0 h-32 pointer-events-none"
						style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
					/>
					{/* Bottom fade */}
					<div
						className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
						style={{ background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 100%)' }}
					/>

					{/* Thin vertical accent line — left edge */}
					<div
						className="absolute top-0 bottom-0 pointer-events-none"
						style={{
							left: '48px',
							width: '1px',
							background: 'linear-gradient(to bottom, transparent 0%, rgba(245,197,24,0.5) 20%, rgba(245,197,24,0.5) 80%, transparent 100%)',
						}}
					/>
					{/* Yellow dot on accent line */}
					<div
						className="absolute pointer-events-none"
						style={{
							left: '44px',
							top: '50%',
							transform: 'translateY(-50%)',
							width: '9px',
							height: '9px',
							borderRadius: '50%',
							background: '#f5c518',
							boxShadow: '0 0 12px rgba(245,197,24,0.6)',
						}}
					/>

					{/* Text content — left-anchored */}
					<div className="relative h-full flex items-center">
						<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
							<div
								className="max-w-2xl"
								style={{
									paddingLeft: '24px',
									paddingTop: '40px',
									paddingBottom: '40px',
									paddingRight: '48px',
									background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 70%, transparent 100%)',
									borderRadius: '4px',
								}}
							>

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
									<span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f5c518' }}>
										About Nexus
									</span>
								</div>

								{/* Headline */}
								<h1
									className="font-black mb-8"
									style={{
										fontSize: 'clamp(2rem, 3.6vw, 3.4rem)',
										letterSpacing: '-0.03em',
										lineHeight: 1.05,
										color: '#fff',
										maxWidth: '680px',
										whiteSpace: 'nowrap',
									}}
								>
									<span style={{ display: 'block' }}>We believe every business</span>
									<span style={{ display: 'block' }}>
										deserves to{' '}
										<span style={{ color: '#f5c518' }}>operate</span>
									</span>
									<span style={{ display: 'block' }}>at its best.</span>
								</h1>

								{/* Sub-line */}
								<p
									className="font-light"
									style={{
										fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
										color: 'rgba(255,255,255,0.5)',
										letterSpacing: '0.01em',
										lineHeight: 1.7,
										maxWidth: '420px',
									}}
								>
									Founded in 2019. Built for the teams that refuse to slow down.
								</p>

								{/* Scroll indicator */}
								<div
									className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2 pointer-events-none"
									style={{ transform: 'translateX(-50%)' }}
								>
									<span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px' }}>
										Scroll
									</span>
									<div
										style={{
											width: '1px',
											height: '40px',
											background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
											animation: 'fadeInOut 2s ease-in-out infinite',
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Zoom keyframe */}
					<style>{`
						@keyframes heroZoom {
							from { transform: scale(1); }
							to   { transform: scale(1.06); }
						}
						@keyframes fadeInOut {
							0%, 100% { opacity: 0.3; }
							50%       { opacity: 1; }
						}
					`}</style>
				</section>

				{/* Mission */}
				<section className="py-20" style={{ background: '#050505' }}>
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div className="reveal">
								<h2
									className="font-black leading-tight mb-6"
									style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
								>
									Our Mission
								</h2>
								<p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
									We started Nexus because we watched brilliant teams waste their best hours on manual, repetitive work — reconciling data, chasing approvals, and fighting their own tools.
								</p>
								<p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
									We believe that operations should be intelligent by default. That every workflow should be automated. That every decision should be informed by real data.
								</p>
								<p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
									Nexus is the platform we wished existed when we were building our own companies.
								</p>
							</div>
							<div className="reveal-right">
								<div className="grid grid-cols-2 gap-4">
									{[
										{ value: '10,000+', label: 'Teams worldwide' },
										{ value: '$50M+', label: 'ARR' },
										{ value: '200+', label: 'Team members' },
										{ value: '4', label: 'Global offices' },
									].map((stat) => (
										<div
											key={stat.label}
											className="rounded-lg p-6 text-center"
											style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }}
										>
											<div
												className="font-black mb-1"
												style={{ fontSize: '2.5rem', letterSpacing: '-0.04em', color: '#f5c518' }}
											>
												{stat.value}
											</div>
											<div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
												{stat.label}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Timeline — fine grid + center glow */}
				<section className="py-20 relative overflow-hidden" style={{ background: '#080808' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
						backgroundSize: '48px 48px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)',
					}} />
					<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<h2
							className="font-black mb-16 reveal"
							style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Our Story
						</h2>
						<div className="relative">
							{/* Vertical line */}
							<div
								className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px"
								style={{ background: 'rgba(255,255,255,0.08)', transform: 'translateX(-50%)' }}
							/>
							<div className="space-y-12">
								{milestones.map((milestone, i) => (
									<div
										key={milestone.year}
										className={`relative flex flex-col lg:flex-row gap-8 reveal ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
									>
										{/* Content */}
										<div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'} pl-8 lg:pl-0`}>
											<div
												className="text-4xl font-black mb-2"
												style={{ color: 'rgba(245,197,24,0.3)', letterSpacing: '-0.04em' }}
											>
												{milestone.year}
											</div>
											<p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
												{milestone.event}
											</p>
										</div>
										{/* Dot */}
										<div
											className="absolute left-0 lg:left-1/2 top-2 w-3 h-3 rounded-full"
											style={{
												background: '#f5c518',
												transform: 'translateX(-50%)',
												boxShadow: '0 0 12px rgba(245,197,24,0.5)',
											}}
										/>
										<div className="lg:w-1/2" />
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Team — dot grid + right glow */}
				<section className="py-20 relative overflow-hidden" style={{ background: '#050505' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
						backgroundSize: '28px 28px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(245,197,24,0.04) 0%, transparent 65%)',
					}} />
					<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<h2
							className="font-black mb-12 reveal"
							style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Leadership Team
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{team.map((member, i) => (
								<div
									key={member.name}
									className="rounded-lg p-6 card-hover reveal"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
										animationDelay: `${i * 0.08}s`,
									}}
								>
									<div
										className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black mb-4"
										style={{ background: 'rgba(245,197,24,0.12)', color: '#f5c518', border: '1px solid rgba(245,197,24,0.2)' }}
									>
										{member.name.split(' ').map(n => n[0]).join('')}
									</div>
									<h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
									<div className="text-xs font-semibold mb-3" style={{ color: '#f5c518' }}>{member.role}</div>
									<p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{member.bio}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Investors */}
				<section className="py-16" style={{ background: '#080808' }}>
					<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
						<p
							className="text-xs font-semibold uppercase tracking-widest mb-10 reveal"
							style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}
						>
							Backed by the world&apos;s best investors
						</p>
						<div className="flex flex-wrap items-center justify-center gap-10 reveal">
							{investors.map((investor) => (
								<span
									key={investor}
									className="text-lg font-black uppercase tracking-tight"
									style={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.02em' }}
								>
									{investor}
								</span>
							))}
						</div>
					</div>
				</section>

				<CtaSection />
			</main>
			<Footer />
		</>
	);
}

'use client';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';
import Link from 'next/link';

const featured = {
	category: 'Guide',
	title: 'The Complete Guide to Workflow Automation in 2024',
	description:
		'Everything you need to know about automating your business operations from choosing the right tools to measuring ROI and scaling across your organization.',
	readTime: '12 min read',
	date: 'Dec 15, 2024',
};

const posts = [
	{
		category: 'Case Study',
		title: 'How Meridian Capital Cut Month-End Close by 60%',
		description: 'A deep dive into how a $2B asset manager transformed their finance operations with Nexus Flow.',
		readTime: '8 min read',
		date: 'Dec 12, 2024',
		color: '#f5c518',
	},
	{
		category: 'Product',
		title: 'Introducing Nexus AI: Predictive Operations Intelligence',
		description: 'Our new AI layer monitors your operations 24/7 and predicts failures before they impact your business.',
		readTime: '5 min read',
		date: 'Dec 8, 2024',
		color: '#8b5cf6',
	},
	{
		category: 'Engineering',
		title: 'How We Achieve 99.99% Uptime at Scale',
		description: 'A technical deep dive into the architecture decisions that power Nexus reliability.',
		readTime: '10 min read',
		date: 'Dec 5, 2024',
		color: '#3b82f6',
	},
	{
		category: 'Guide',
		title: '10 Workflows Every Operations Team Should Automate',
		description: 'The highest-ROI automations we see across thousands of Nexus customers and how to build them.',
		readTime: '7 min read',
		date: 'Nov 28, 2024',
		color: '#22c55e',
	},
	{
		category: 'Case Study',
		title: 'SwiftRoute Logistics: 3x Delivery Speed with Nexus',
		description: 'How a regional logistics company scaled from 1K to 10K daily shipments without adding headcount.',
		readTime: '6 min read',
		date: 'Nov 22, 2024',
		color: '#f97316',
	},
	{
		category: 'Product',
		title: 'Nexus Data: 200+ Integrations, Zero Engineering',
		description: 'A walkthrough of our new universal connector framework and what it means for your data stack.',
		readTime: '4 min read',
		date: 'Nov 18, 2024',
		color: '#f5c518',
	},
];

const guides = [
	{ title: 'Getting Started with Nexus', desc: 'Set up your first workflow in under 30 minutes.' },
	{ title: 'Integration Cookbook', desc: '50+ step-by-step integration recipes.' },
	{ title: 'Automation Patterns', desc: 'Best practices for scalable workflow design.' },
	{ title: 'Security & Compliance', desc: 'Enterprise security configuration guide.' },
];

export default function ResourcesPage() {
	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main id="main-content" tabIndex={-1}>
				{/* Hero — cinematic full-bleed */}
				<section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '640px', maxHeight: '900px' }}>

					{/* Architectural SVG background with slow-zoom */}
					<div className="absolute inset-0 slow-zoom" style={{ transformOrigin: 'center center' }}>
						<svg
							className="absolute inset-0 w-full h-full"
							viewBox="0 0 1440 900"
							preserveAspectRatio="xMidYMid slice"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="1440" height="900" fill="#050505" />

							{/* Deep floor plane perspective grid */}
							<g opacity="0.18" stroke="#ffffff" strokeWidth="0.5">
								{[0.55, 0.62, 0.68, 0.73, 0.78, 0.83, 0.88, 0.93, 0.98, 1.04].map((y, i) => (
									<line key={i} x1="0" y1={y * 900} x2="1440" y2={y * 900} />
								))}
								{[-200, -80, 40, 160, 280, 400, 520, 640, 760, 880, 1000, 1120, 1240, 1360, 1480, 1600].map((x, i) => (
									<line key={i} x1={x} y1="900" x2={720 + (x - 720) * 0.1} y2="480" />
								))}
							</g>

							{/* Massive left structural column */}
							<rect x="-20" y="0" width="180" height="900" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
							<rect x="160" y="0" width="2" height="900" fill="rgba(255,255,255,0.08)" />

							{/* Right structural column */}
							<rect x="1280" y="0" width="180" height="900" fill="rgba(255,255,255,0.012)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
							<rect x="1278" y="0" width="2" height="900" fill="rgba(255,255,255,0.06)" />

							{/* Ceiling structure */}
							<rect x="0" y="0" width="1440" height="120" fill="rgba(0,0,0,0.4)" />
							<line x1="0" y1="120" x2="1440" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
							<line x1="0" y1="140" x2="1440" y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

							{/* Ceiling grid */}
							<g opacity="0.06" stroke="#ffffff" strokeWidth="0.5">
								{[200, 400, 600, 800, 1000, 1200].map((x, i) => (
									<line key={i} x1={x} y1="0" x2={x} y2="120" />
								))}
								{[30, 60, 90].map((y, i) => (
									<line key={i} x1="0" y1={y} x2="1440" y2={y} />
								))}
							</g>

							{/* Central aperture tall window */}
							<rect x="560" y="120" width="320" height="680" fill="rgba(245,197,24,0.015)" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
							<rect x="560" y="120" width="320" height="680" fill="url(#windowGlow)" />

							{/* Floor reflection */}
							<rect x="560" y="800" width="320" height="100" fill="rgba(245,197,24,0.03)" />

							{/* Diagonal architectural slash */}
							<line x1="900" y1="0" x2="1440" y2="600" stroke="rgba(255,255,255,0.05)" strokeWidth="60" />
							<line x1="920" y1="0" x2="1440" y2="560" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />

							{/* Structural cross-beams */}
							<rect x="0" y="490" width="560" height="1" fill="rgba(255,255,255,0.06)" />
							<rect x="880" y="490" width="560" height="1" fill="rgba(255,255,255,0.06)" />

							{/* Small geometric accent top right */}
							<rect x="1100" y="160" width="120" height="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
							<rect x="1110" y="170" width="100" height="60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

							{/* Bottom floor line */}
							<line x1="0" y1="820" x2="1440" y2="820" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

							{/* Gradients */}
							<defs>
								<radialGradient id="windowGlow" cx="50%" cy="30%" r="60%" gradientUnits="objectBoundingBox">
									<stop offset="0%" stopColor="#f5c518" stopOpacity="0.06" />
									<stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
								</radialGradient>
							</defs>

							{/* Ambient floor glow */}
							<ellipse cx="720" cy="900" rx="400" ry="120" fill="rgba(245,197,24,0.04)" />
						</svg>
					</div>

					{/* Grain texture overlay */}
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
							backgroundRepeat: 'repeat',
							backgroundSize: '128px 128px',
							opacity: 0.6,
						}}
					/>

					{/* Dark gradient overlay heavier on left */}
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background: 'linear-gradient(105deg, rgba(3,3,3,0.97) 0%, rgba(3,3,3,0.88) 35%, rgba(3,3,3,0.55) 60%, rgba(3,3,3,0.25) 100%)',
						}}
					/>

					{/* Top fade */}
					<div
						className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
						style={{ background: 'linear-gradient(to bottom, rgba(3,3,3,1) 0%, transparent 100%)' }}
					/>

					{/* Bottom fade */}
					<div
						className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
						style={{ background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 100%)' }}
					/>

					{/* Vertical accent line */}
					<div
						className="absolute top-0 bottom-0 pointer-events-none"
						style={{
							left: '36px',
							width: '2px',
							background: 'linear-gradient(to bottom, transparent 0%, #f5c518 20%, #f5c518 80%, transparent 100%)',
							opacity: 0.7,
						}}
					/>

					{/* Content */}
					<div className="relative h-full flex items-center">
						<div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pl-16 lg:pl-20">
							<div className="max-w-2xl">

								{/* Label */}
								<div
									className="inline-flex items-center gap-2 mb-8"
									style={{
										background: 'rgba(245,197,24,0.08)',
										border: '1px solid rgba(245,197,24,0.2)',
										borderRadius: '2px',
										padding: '5px 14px',
									}}
								>
									<div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f5c518' }} />
									<span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f5c518' }}>
										Resources
									</span>
								</div>

								{/* Headline */}
								<h1
									className="font-black leading-none mb-6"
									style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '-0.04em', color: '#fff' }}
								>
									<span className="block">Insights <span style={{ color: '#f5c518', letterSpacing: '-0.02em' }}>&amp;</span></span>
									<span className="block">expertise.</span>
								</h1>

								{/* Supporting text */}
								<p
									className="text-lg leading-relaxed mb-10 max-w-md"
									style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.01em' }}
								>
									Guides, case studies, and product updates from the teams building the future of operations.
								</p>

								{/* CTAs */}
								<div className="flex items-center gap-4">
									<a href="#featured" className="btn-primary">
										Browse Guides
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
											<path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</a>
									<a
										href="#"
										className="text-sm font-semibold uppercase tracking-widest"
										style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em' }}
									>
										Case Studies
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Floating featured guide card bottom right */}
					<div
						className="absolute pointer-events-none hidden lg:block"
						style={{
							bottom: '80px',
							right: '80px',
							width: '280px',
							background: 'rgba(10,10,10,0.85)',
							border: '1px solid rgba(245,197,24,0.2)',
							backdropFilter: 'blur(20px)',
							WebkitBackdropFilter: 'blur(20px)',
							padding: '20px 24px',
						}}
					>
						{/* Top accent line */}
						<div className="w-full h-px mb-4" style={{ background: 'linear-gradient(to right, #f5c518, transparent)' }} />

						<div
							className="inline-flex items-center gap-1.5 mb-3 px-2 py-1"
							style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)' }}
						>
							<span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f5c518' }}>
								Featured Guide
							</span>
						</div>
						<p className="text-sm font-semibold text-white leading-snug mb-3" style={{ letterSpacing: '-0.02em' }}>
							The Complete Guide to Workflow Automation in 2024
						</p>
						<p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
							12 min read
						</p>
						<div className="flex items-center justify-between">
							<span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>12 min read</span>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M2 7h10M8 3l4 4-4 4" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					</div>

					{/* Scroll indicator */}
					<div
						className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
						style={{ opacity: 0.35 }}
					>
						<span className="text-xs uppercase tracking-widest text-white">Scroll</span>
						<div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
					</div>
				</section>

				{/* Featured post — radial glow background */}
				<section id="featured" className="py-20 relative overflow-hidden" style={{ background: '#060606' }}>
					{/* Radial glow */}
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,197,24,0.05) 0%, transparent 70%)',
					}} />
					{/* Fine grid texture */}
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
						backgroundSize: '48px 48px',
					}} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<div
							className="rounded-lg p-10 lg:p-16 reveal"
							style={{
								background: 'rgba(10,10,10,0.9)',
								border: '1px solid rgba(245,197,24,0.18)',
								boxShadow: '0 0 100px rgba(245,197,24,0.06), 0 40px 80px rgba(0,0,0,0.6)',
								backdropFilter: 'blur(4px)',
							}}
						>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
								<div>
									<div
										className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded"
										style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)' }}
									>
										<span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f5c518' }}>
											{featured.category}
										</span>
									</div>
									<h2
										className="font-black leading-tight mb-4"
										style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em', color: '#fff' }}
									>
										{featured.title}
									</h2>
									<p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
										{featured.description}
									</p>
									<div className="flex items-center gap-4 mb-8">
										<span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>{featured.readTime}</span>
										<span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
										<span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>{featured.date}</span>
									</div>
									<Link href="#" className="btn-primary">
										Read Guide
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
											<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								{/* Cinematic visual panel */}
								<div className="relative rounded-lg h-64 overflow-hidden" style={{ border: '1px solid rgba(245,197,24,0.1)' }}>
									<svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 256" preserveAspectRatio="xMidYMid slice" fill="none">
										<rect width="480" height="256" fill="#030303" />
										{[0,1,2,3,4,5,6,7,8].map(i => (
											<line key={`h${i}`} x1="0" y1={128 + i * 20} x2="480" y2={128 + i * 20} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
										))}
										{[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6].map(i => (
											<line key={`v${i}`} x1={240 + i * 40} y1="128" x2={240 + i * 200} y2="256" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
										))}
										<rect x="60" y="0" width="2" height="256" fill="rgba(255,255,255,0.06)" />
										<rect x="418" y="0" width="2" height="256" fill="rgba(255,255,255,0.06)" />
										<ellipse cx="240" cy="128" rx="120" ry="80" fill="rgba(245,197,24,0.04)" />
										<text x="240" y="118" textAnchor="middle" fill="rgba(245,197,24,0.18)" fontSize="72" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="-4">2024</text>
										<text x="240" y="148" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="4">AUTOMATION GUIDE</text>
										<path d="M20 20 L20 36 M20 20 L36 20" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" />
										<path d="M460 20 L460 36 M460 20 L444 20" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" />
										<path d="M20 236 L20 220 M20 236 L36 236" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" />
										<path d="M460 236 L460 220 M460 236 L444 236" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" />
									</svg>
									<div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Cinematic break */}
				<div className="relative overflow-hidden" style={{ height: '200px', background: '#030303' }}>
					<svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="xMidYMid slice" fill="none">
						<rect width="1440" height="200" fill="#030303" />
						{[-5,-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
							<line key={i} x1={720 + i * 160} y1="200" x2={720 + i * 20} y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
						))}
						<line x1="0" y1="100" x2="1440" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
						<ellipse cx="720" cy="100" rx="400" ry="90" fill="rgba(245,197,24,0.025)" />
						<line x1="0" y1="200" x2="480" y2="0" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />
						<line x1="1440" y1="200" x2="960" y2="0" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />
						<rect x="0" y="0" width="3" height="200" fill="rgba(245,197,24,0.2)" />
					</svg>
					<div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(6,6,6,0.9) 0%, transparent 30%, transparent 70%, rgba(8,8,8,0.9) 100%)' }} />
					<div className="absolute inset-0 flex items-center justify-center">
						<p className="font-black uppercase tracking-widest text-center" style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.75rem)', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.3em' }}>
							Knowledge built for teams that move fast
						</p>
					</div>
				</div>

				{/* Posts grid — dot grid + glow */}
				<section className="py-20 relative overflow-hidden" style={{ background: '#080808' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
						backgroundSize: '28px 28px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 50% 60% at 0% 0%, rgba(245,197,24,0.04) 0%, transparent 65%)',
					}} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<div className="flex items-end justify-between mb-10">
							<h2 className="font-black reveal" style={{ fontSize: '2rem', letterSpacing: '-0.03em', color: '#fff' }}>
								Latest Articles
							</h2>
							<div className="hidden md:flex items-center gap-2 reveal" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
								<div style={{ width: '24px', height: '1px', background: 'rgba(245,197,24,0.4)' }} />
								<span className="uppercase tracking-widest">6 articles</span>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{posts.map((post, i) => (
								<article
									key={post.title}
									className="rounded-lg p-6 card-hover reveal cursor-pointer relative overflow-hidden"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
										animationDelay: `${i * 0.08}s`,
									}}
								>
									<div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${post.color}40, transparent)` }} />
									<div
										className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded"
										style={{
											background: `${post.color}12`,
											border: `1px solid ${post.color}25`,
										}}
									>
										<span className="text-xs font-bold uppercase tracking-widest" style={{ color: post.color }}>
											{post.category}
										</span>
									</div>
									<h3
										className="text-base font-bold text-white mb-3 leading-snug"
										style={{ letterSpacing: '-0.02em' }}
									>
										{post.title}
									</h3>
									<p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
										{post.description}
									</p>
									<div className="flex items-center gap-3">
										<span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.readTime}</span>
										<span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
										<span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Guides — coarse grid + right glow */}
				<section className="py-20 pb-28 relative overflow-hidden" style={{ background: '#050505' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
						backgroundSize: '80px 80px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 50% 70% at 100% 50%, rgba(245,197,24,0.04) 0%, transparent 65%)',
					}} />
					<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<div className="flex items-end justify-between mb-10">
							<h2 className="font-black reveal" style={{ fontSize: '2rem', letterSpacing: '-0.03em', color: '#fff' }}>
								Documentation &amp; Guides
							</h2>
							<div className="hidden md:flex items-center gap-2 reveal" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
								<div style={{ width: '24px', height: '1px', background: 'rgba(245,197,24,0.4)' }} />
								<span className="uppercase tracking-widest">Quick start</span>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							{guides.map((guide, i) => (
								<div
									key={guide.title}
									className="rounded-lg p-6 card-hover reveal cursor-pointer relative overflow-hidden"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
										animationDelay: `${i * 0.08}s`,
									}}
								>
									<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, rgba(245,197,24,0.4), transparent)' }} />
									<div
										className="w-10 h-10 rounded flex items-center justify-center mb-4"
										style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.15)' }}
									>
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
											<path d="M4 4h10v10H4z" stroke="#f5c518" strokeWidth="1.5" strokeLinejoin="round" />
											<path d="M7 8h4M7 11h2" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" />
										</svg>
									</div>
									<h4 className="text-sm font-bold text-white mb-2">{guide.title}</h4>
									<p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
										{guide.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

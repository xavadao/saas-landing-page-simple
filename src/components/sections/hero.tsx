'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export function HeroSection() {
	const bgRef = useRef<HTMLDivElement>(null);

	// Subtle parallax on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (!bgRef.current) return;
			const y = window.scrollY;
			bgRef.current.style.transform = `translateY(${y * 0.3}px) scale(1.08)`;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: '#000' }}>

			{/* ── CINEMATIC BACKGROUND ─────────────────────────────────────── */}
			{/* SVG architectural background — abstract geometric structure */}
			<div
				ref={bgRef}
				className="absolute inset-0 w-full h-full"
				style={{
					transformOrigin: 'center center',
					transform: 'scale(1.08)',
					transition: 'transform 0.1s linear',
				}}
			>
				{/* Deep architectural SVG — grid of perspective lines + geometric forms */}
				<svg
					viewBox="0 0 1440 900"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid slice"
					className="w-full h-full"
					style={{ position: 'absolute', inset: 0 }}
				>
					<defs>
						<linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#000000" />
							<stop offset="40%" stopColor="#0a0a0a" />
							<stop offset="100%" stopColor="#111111" />
						</linearGradient>
						<linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#f5c518" stopOpacity="0.6" />
							<stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
						</linearGradient>
						<linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
							<stop offset="50%" stopColor="#ffffff" stopOpacity="0.06" />
							<stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
						</linearGradient>
						<radialGradient id="glowRight" cx="80%" cy="40%" r="50%">
							<stop offset="0%" stopColor="#f5c518" stopOpacity="0.07" />
							<stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
						</radialGradient>
						<radialGradient id="glowCenter" cx="55%" cy="50%" r="60%">
							<stop offset="0%" stopColor="#1a1400" stopOpacity="0.8" />
							<stop offset="100%" stopColor="#000000" stopOpacity="0" />
						</radialGradient>
						<filter id="blur1">
							<feGaussianBlur stdDeviation="1.5" />
						</filter>
					</defs>

					{/* Base fill */}
					<rect width="1440" height="900" fill="url(#bgGrad)" />

					{/* Subtle warm center glow */}
					<rect width="1440" height="900" fill="url(#glowCenter)" />

					{/* Right-side yellow glow */}
					<rect width="1440" height="900" fill="url(#glowRight)" />

					{/* ── PERSPECTIVE GRID — vanishing point at right center ── */}
					{/* Horizontal lines converging right */}
					{[0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 0.78, 0.88, 0.96].map((t, i) => (
						<line
							key={`h${i}`}
							x1="0" y1={900 * t}
							x2="1440" y2={450 + (900 * t - 450) * 0.15}
							stroke="rgba(255,255,255,0.04)"
							strokeWidth="1"
						/>
					))}

					{/* Vertical structural lines */}
					{[180, 360, 540, 720, 900, 1080, 1260].map((x, i) => (
						<line
							key={`v${i}`}
							x1={x} y1="0"
							x2={x} y2="900"
							stroke="rgba(255,255,255,0.025)"
							strokeWidth="1"
						/>
					))}

					{/* ── ARCHITECTURAL STRUCTURE — right side ── */}
					{/* Large rectangular frame — right panel */}
					<rect x="820" y="60" width="560" height="780"
						fill="none"
						stroke="rgba(255,255,255,0.05)"
						strokeWidth="1"
					/>
					{/* Inner frame */}
					<rect x="860" y="100" width="480" height="700"
						fill="rgba(255,255,255,0.01)"
						stroke="rgba(255,255,255,0.04)"
						strokeWidth="1"
					/>

					{/* Horizontal dividers inside right panel */}
					<line x1="860" y1="280" x2="1340" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
					<line x1="860" y1="500" x2="1340" y2="500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
					<line x1="860" y1="680" x2="1340" y2="680" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

					{/* Vertical divider inside right panel */}
					<line x1="1100" y1="100" x2="1100" y2="800" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

					{/* ── ACCENT GEOMETRY ── */}
					{/* Yellow accent vertical bar — far right */}
					<rect x="1380" y="0" width="3" height="900" fill="url(#lineGrad)" />

					{/* Yellow horizontal accent line */}
					<line x1="820" y1="280" x2="1380" y2="280"
						stroke="#f5c518"
						strokeWidth="1"
						strokeOpacity="0.25"
					/>

					{/* Yellow corner marks */}
					<path d="M820 60 L860 60 L860 100" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeOpacity="0.5" />
					<path d="M1340 60 L1340 100" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeOpacity="0.3" />
					<path d="M820 800 L860 800 L860 760" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeOpacity="0.3" />

					{/* ── ABSTRACT GEOMETRIC FILLS — right panel cells ── */}
					{/* Top-right cell: diagonal hatch */}
					{[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220].map((offset, i) => (
						<line
							key={`hatch${i}`}
							x1={1100 + offset} y1="100"
							x2={1100 + offset - 180} y2="280"
							stroke="rgba(255,255,255,0.025)"
							strokeWidth="1"
						/>
					))}

					{/* Middle-left cell: concentric rectangles */}
					<rect x="880" y="300" width="200" height="180" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
					<rect x="900" y="320" width="160" height="140" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
					<rect x="920" y="340" width="120" height="100" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
					<rect x="940" y="360" width="80" height="60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

					{/* Bottom-right cell: dot grid */}
					{[0, 1, 2, 3, 4, 5, 6].map((row) =>
						[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
							<circle
								key={`dot-${row}-${col}`}
								cx={1110 + col * 28}
								cy={510 + row * 24}
								r="1"
								fill="rgba(255,255,255,0.12)"
							/>
						))
					)}

					{/* ── SCAN LINE EFFECT ── */}
					<rect
						x="820" y="0" width="560" height="2"
						fill="rgba(245,197,24,0.15)"
						style={{ animation: 'scanLine 8s linear infinite' }}
					/>

					{/* ── LARGE TYPOGRAPHIC ELEMENT — background watermark ── */}
					<text
						x="830"
						y="820"
						fontFamily="Inter, sans-serif"
						fontSize="11"
						fontWeight="600"
						letterSpacing="6"
						fill="rgba(255,255,255,0.06)"
						textAnchor="start"
					>
						NEXUS / INTELLIGENCE PLATFORM / EST. 2024
					</text>

					{/* ── COORDINATE LABELS ── */}
					<text x="824" y="76" fontFamily="monospace" fontSize="9" fill="rgba(245,197,24,0.4)" letterSpacing="1">00.01</text>
					<text x="824" y="296" fontFamily="monospace" fontSize="9" fill="rgba(245,197,24,0.3)" letterSpacing="1">00.02</text>
					<text x="824" y="516" fontFamily="monospace" fontSize="9" fill="rgba(245,197,24,0.3)" letterSpacing="1">00.03</text>
					<text x="824" y="696" fontFamily="monospace" fontSize="9" fill="rgba(245,197,24,0.3)" letterSpacing="1">00.04</text>

					{/* ── FLOATING DATA POINTS — right panel ── */}
					{/* Top cell: metric */}
					<text x="1110" y="160" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800" fill="rgba(255,255,255,0.08)" letterSpacing="-2">94.2%</text>
					<text x="1110" y="178" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.12)" letterSpacing="3">EFFICIENCY</text>

					{/* Middle-right cell */}
					<text x="1110" y="380" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="800" fill="rgba(245,197,24,0.1)" letterSpacing="-1">$2.4M</text>
					<text x="1110" y="396" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.1)" letterSpacing="3">REVENUE</text>

					{/* Bottom-left cell */}
					<text x="880" y="620" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" fill="rgba(255,255,255,0.07)" letterSpacing="-1">12,847</text>
					<text x="880" y="636" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.1)" letterSpacing="3">AUTOMATIONS</text>
				</svg>
			</div>

			{/* ── GRADIENT OVERLAYS ─────────────────────────────────────────── */}
			{/* Left-side dark gradient for text readability */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: 'linear-gradient(105deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 100%)',
				}}
			/>
			{/* Bottom fade */}
			<div
				className="absolute bottom-0 left-0 right-0 pointer-events-none"
				style={{
					height: '220px',
					background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.7) 60%, transparent 100%)',
				}}
			/>
			{/* Top fade */}
			<div
				className="absolute top-0 left-0 right-0 pointer-events-none"
				style={{
					height: '120px',
					background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
				}}
			/>

			{/* ── FOREGROUND DESIGN ELEMENTS ───────────────────────────────── */}
			{/* Vertical yellow accent bar — left edge */}
			<div
				className="absolute left-0 top-0 bottom-0 pointer-events-none"
				style={{ width: '3px', background: 'linear-gradient(to bottom, transparent 0%, #f5c518 30%, #f5c518 70%, transparent 100%)' }}
			/>

			{/* Horizontal rule — architectural divider */}
			<div
				className="absolute pointer-events-none hidden lg:block"
				style={{
					top: '50%',
					left: '3px',
					width: '60px',
					height: '1px',
					background: 'rgba(245,197,24,0.5)',
				}}
			/>

			{/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
			<div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16 pb-28 pt-40">
				<div className="max-w-3xl">

					{/* Eyebrow label */}
					<div
						className="flex items-center gap-4 mb-10 animate-fade-in"
						style={{ opacity: 0, animationFillMode: 'forwards' }}
					>
						<div style={{ width: '32px', height: '1px', background: '#f5c518' }} />
						<span
							className="text-xs font-bold uppercase tracking-widest"
							style={{ color: '#f5c518', letterSpacing: '0.2em' }}
						>
							Intelligence Platform
						</span>
					</div>

					{/* Headline — oversized, tight, commanding */}
					<h1
						className="font-black animate-fade-up"
						style={{
							fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)',
							lineHeight: '0.92',
							letterSpacing: '-0.04em',
							color: '#ffffff',
							marginBottom: '0.15em',
							opacity: 0,
							animationFillMode: 'forwards',
							animationDelay: '0.1s',
						}}
					>
						The
					</h1>
					<h1
						className="font-black animate-fade-up"
						style={{
							fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)',
							lineHeight: '0.92',
							letterSpacing: '-0.04em',
							marginBottom: '0.15em',
							opacity: 0,
							animationFillMode: 'forwards',
							animationDelay: '0.18s',
						}}
					>
						<span style={{
							color: '#f5c518',
							textShadow: '0 0 80px rgba(245,197,24,0.3)',
						}}>
							Intelligence
						</span>
					</h1>
					<h1
						className="font-black animate-fade-up"
						style={{
							fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)',
							lineHeight: '0.92',
							letterSpacing: '-0.04em',
							color: '#ffffff',
							marginBottom: '0.15em',
							opacity: 0,
							animationFillMode: 'forwards',
							animationDelay: '0.26s',
						}}
					>
						Platform
					</h1>
					<h1
						className="font-black animate-fade-up"
						style={{
							fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)',
							lineHeight: '0.92',
							letterSpacing: '-0.04em',
							color: 'rgba(255,255,255,0.35)',
							marginBottom: '3rem',
							opacity: 0,
							animationFillMode: 'forwards',
							animationDelay: '0.34s',
						}}
					>
						Built to Scale.
					</h1>

					{/* Supporting paragraph */}
					<p
						className="animate-fade-up"
						style={{
							fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
							lineHeight: '1.7',
							color: 'rgba(255,255,255,0.5)',
							maxWidth: '520px',
							marginBottom: '3rem',
							opacity: 0,
							animationFillMode: 'forwards',
							animationDelay: '0.45s',
						}}
					>
						Nexus unifies your data, automates your workflows, and gives your team the intelligence to move faster than the competition.
					</p>

					{/* CTAs */}
					<div
						className="flex flex-wrap items-center gap-4 animate-fade-up"
						style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.55s' }}
					>
						<Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '16px 36px' }}>
							Start Free Trial
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
						<Link
							href="/products"
							className="btn-secondary"
							style={{ fontSize: '0.85rem', padding: '15px 36px' }}
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
								<path d="M5.5 4.5l4 2.5-4 2.5V4.5z" fill="currentColor" />
							</svg>
							Watch Demo
						</Link>
					</div>

					{/* Trust bar */}
					<div
						className="flex flex-wrap items-center gap-8 mt-14 animate-fade-up"
						style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.65s' }}
					>
						<div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.12)' }} className="hidden sm:block" />
						{[
							{ value: '10,000+', label: 'Teams worldwide' },
							{ value: '99.9%', label: 'Uptime SLA' },
							{ value: '4.9 / 5', label: 'Customer rating' },
						].map((stat, i) => (
							<div key={stat.label} className="flex items-baseline gap-2">
								<span
									className="font-black"
									style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#fff', letterSpacing: '-0.02em' }}
								>
									{stat.value}
								</span>
								<span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── FLOATING ARCHITECTURAL CARD — bottom right ───────────────── */}
			<div
				className="absolute hidden xl:flex flex-col gap-3 animate-fade-in"
				style={{
					right: '5%',
					bottom: '12%',
					opacity: 0,
					animationFillMode: 'forwards',
					animationDelay: '0.8s',
				}}
			>
				{/* Status card */}
				<div
					style={{
						background: 'rgba(8,8,8,0.85)',
						border: '1px solid rgba(245,197,24,0.2)',
						backdropFilter: 'blur(20px)',
						padding: '16px 20px',
						minWidth: '200px',
					}}
				>
					<div
						className="text-xs font-bold uppercase tracking-widest mb-2"
						style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}
					>
						System Status
					</div>
					<div className="flex items-center gap-2">
						<div
							className="w-2 h-2 rounded-full animate-pulse-glow"
							style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
						/>
						<span className="text-sm font-semibold" style={{ color: '#fff' }}>
							All systems operational
						</span>
					</div>
				</div>

				{/* Metric card */}
				<div
					style={{
						background: 'rgba(8,8,8,0.85)',
						border: '1px solid rgba(255,255,255,0.08)',
						backdropFilter: 'blur(20px)',
						padding: '16px 20px',
						minWidth: '200px',
					}}
				>
					<div
						className="text-xs font-bold uppercase tracking-widest mb-1"
						style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}
					>
						Automations / hr
					</div>
					<div
						className="font-black"
						style={{ fontSize: '1.75rem', color: '#f5c518', letterSpacing: '-0.03em', lineHeight: 1 }}
					>
						340
					</div>
					<div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
						↑ 18% vs last week
					</div>
				</div>
			</div>

			{/* ── SCROLL INDICATOR ─────────────────────────────────────────── */}
			<div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
				style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '1s' }}
			>
				<span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em' }}>
					Scroll
				</span>
				<div
					style={{
						width: '1px',
						height: '40px',
						background: 'linear-gradient(to bottom, rgba(245,197,24,0.6), transparent)',
						animation: 'float 2s ease-in-out infinite',
					}}
				/>
			</div>
		</section>
	);
}

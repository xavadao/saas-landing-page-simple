import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';
import Link from 'next/link';

const values = [
	{ icon: '⚡', title: 'Move Fast', desc: 'We ship weekly. We learn daily. Speed is a feature.' },
	{ icon: '◎', title: 'Think in Systems', desc: 'We solve root causes, not symptoms. First principles over convention.' },
	{ icon: '◈', title: 'Own the Outcome', desc: 'No hand-offs. No excuses. You own it from idea to impact.' },
	{ icon: '⊕', title: 'Raise the Bar', desc: 'We hire people who make everyone around them better.' },
];

const openRoles = [
	{ title: 'Senior Software Engineer — Platform', team: 'Engineering', location: 'Remote / SF', type: 'Full-time' },
	{ title: 'Staff Engineer — Data Infrastructure', team: 'Engineering', location: 'Remote / NYC', type: 'Full-time' },
	{ title: 'Product Manager — Nexus AI', team: 'Product', location: 'Remote', type: 'Full-time' },
	{ title: 'Senior Designer — Product', team: 'Design', location: 'Remote / SF', type: 'Full-time' },
	{ title: 'Enterprise Account Executive', team: 'Sales', location: 'Remote / NYC', type: 'Full-time' },
	{ title: 'Head of Customer Success', team: 'Customer Success', location: 'Remote', type: 'Full-time' },
	{ title: 'Senior Marketing Manager', team: 'Marketing', location: 'Remote / SF', type: 'Full-time' },
];

const perks = [
	{ icon: '💰', title: 'Competitive Comp', desc: 'Top-of-market salary + meaningful equity.' },
	{ icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere. We have hubs in SF and NYC.' },
	{ icon: '🏥', title: 'Full Benefits', desc: 'Medical, dental, vision — 100% covered.' },
	{ icon: '📚', title: 'Learning Budget', desc: '$2,500/year for courses, books, and conferences.' },
	{ icon: '🏖️', title: 'Unlimited PTO', desc: 'We mean it. Minimum 3 weeks encouraged.' },
	{ icon: '⚙️', title: 'Top-Tier Setup', desc: '$3,000 home office stipend on day one.' },
];

export default function CareersPage() {
	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main>
				{/* Hero */}
				<section
					className="relative pt-40 pb-24 overflow-hidden grid-overlay"
					style={{ background: '#080808' }}
				>
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(245,197,24,0.07) 0%, transparent 70%)',
						}}
					/>
					<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
						<div className="max-w-3xl">
							<div
								className="inline-flex items-center gap-2 mb-6"
								style={{
									background: 'rgba(245,197,24,0.08)',
									border: '1px solid rgba(245,197,24,0.2)',
									borderRadius: '100px',
									padding: '5px 14px',
								}}
							>
								<div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
								<span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f5c518' }}>
									We&apos;re Hiring — {openRoles.length} Open Roles
								</span>
							</div>
							<h1
								className="font-black leading-none mb-6"
								style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.04em', color: '#fff' }}
							>
								Build the future
								<br />
								<span className="text-gradient">of operations.</span>
							</h1>
							<p
								className="text-xl leading-relaxed"
								style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px' }}
							>
								We&apos;re a team of builders, thinkers, and operators on a mission to make every business run at its full potential.
							</p>
						</div>
					</div>
				</section>

				{/* Values — dot grid + left glow */}
				<section className="py-20 relative overflow-hidden" style={{ background: '#050505' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
						backgroundSize: '28px 28px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 50% 70% at 0% 50%, rgba(245,197,24,0.05) 0%, transparent 65%)',
					}} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<h2
							className="font-black mb-12 reveal"
							style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							How we work.
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{values.map((value, i) => (
								<div
									key={value.title}
									className="rounded-lg p-6 reveal"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
										animationDelay: `${i * 0.08}s`,
									}}
								>
									<div className="text-3xl mb-4" style={{ color: '#f5c518' }}>{value.icon}</div>
									<h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
									<p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
										{value.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Open roles — coarse grid + right glow */}
				<section className="py-20 relative overflow-hidden" style={{ background: '#080808' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
						backgroundSize: '80px 80px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 50% 60% at 100% 0%, rgba(245,197,24,0.04) 0%, transparent 65%)',
					}} />
					<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<h2
							className="font-black mb-12 reveal"
							style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Open Roles
						</h2>
						<div className="space-y-3">
							{openRoles.map((role, i) => (
								<div
									key={role.title}
									className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg p-6 card-hover reveal cursor-pointer"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
										animationDelay: `${i * 0.05}s`,
									}}
								>
									<div>
										<h3
											className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-200"
											style={{ letterSpacing: '-0.02em' }}
										>
											{role.title}
										</h3>
										<div className="flex flex-wrap items-center gap-3">
											<span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{role.team}</span>
											<span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
											<span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{role.location}</span>
											<span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
											<span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{role.type}</span>
										</div>
									</div>
									<div className="flex items-center gap-3 flex-shrink-0">
										<span
											className="text-xs font-bold px-3 py-1.5 rounded"
											style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.15)', color: '#f5c518' }}
										>
											{role.team}
										</span>
										<svg
											width="20" height="20" viewBox="0 0 20 20" fill="none"
											className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
										>
											<path d="M4 10h12M12 6l4 4-4 4" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Perks — dot grid + left glow */}
				<section className="py-20 pb-24 relative overflow-hidden" style={{ background: '#050505' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
						backgroundSize: '28px 28px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 50% 70% at 0% 100%, rgba(245,197,24,0.04) 0%, transparent 65%)',
					}} />
					<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<h2
							className="font-black mb-12 reveal"
							style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Benefits & Perks
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{perks.map((perk, i) => (
								<div
									key={perk.title}
									className="flex items-start gap-4 rounded-lg p-6 reveal"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
										animationDelay: `${i * 0.08}s`,
									}}
								>
									<div className="text-2xl flex-shrink-0">{perk.icon}</div>
									<div>
										<h4 className="text-sm font-bold text-white mb-1">{perk.title}</h4>
										<p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{perk.desc}</p>
									</div>
								</div>
							))}
						</div>

						<div className="mt-16 text-center reveal">
							<p className="text-lg mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
								Don&apos;t see the right role? We&apos;re always looking for exceptional people.
							</p>
							<Link href="/contact" className="btn-primary">
								Send Us Your Resume
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

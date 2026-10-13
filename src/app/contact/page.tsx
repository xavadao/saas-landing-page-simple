'use client';

import { useState } from 'react';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';

const contactOptions = [
	{
		icon: '⚡',
		title: 'Start a Free Trial',
		desc: 'Get full access to Nexus for 14 days. No credit card required.',
		cta: 'Start Free Trial',
		color: '#f5c518',
	},
	{
		icon: '◎',
		title: 'Book a Demo',
		desc: 'See Nexus in action with a personalized walkthrough from our team.',
		cta: 'Schedule Demo',
		color: '#3b82f6',
	},
	{
		icon: '◈',
		title: 'Talk to Sales',
		desc: 'Custom pricing and enterprise features for large organizations.',
		cta: 'Contact Sales',
		color: '#8b5cf6',
	},
];

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		teamSize: '',
		message: '',
		type: 'demo',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main>
				{/* Hero */}
				<section
					className="relative pt-40 pb-16 overflow-hidden grid-overlay"
					style={{ background: '#080808' }}
				>
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(245,197,24,0.07) 0%, transparent 70%)',
						}}
					/>
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
								Get in Touch
							</span>
						</div>
						<h1
							className="font-black leading-none mb-6"
							style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.04em', color: '#fff' }}
						>
							Let&apos;s get you
							<br />
							<span className="text-gradient">started.</span>
						</h1>
						<p
							className="text-xl mx-auto"
							style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '480px' }}
						>
							Choose how you&apos;d like to connect with us.
						</p>
					</div>
				</section>

				{/* Contact options — dot grid + center glow */}
				<section className="py-12 relative overflow-hidden" style={{ background: '#060606' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
						backgroundSize: '28px 28px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,197,24,0.05) 0%, transparent 70%)',
					}} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

						{/* Option cards */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
							{contactOptions.map((option) => (
								<div
									key={option.title}
									className="rounded-lg p-6 card-hover reveal cursor-pointer"
									style={{
										background: '#0a0a0a',
										border: '1px solid rgba(255,255,255,0.07)',
									}}
								>
									<div className="text-3xl mb-4" style={{ color: option.color }}>{option.icon}</div>
									<h3 className="text-base font-bold text-white mb-2">{option.title}</h3>
									<p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
										{option.desc}
									</p>
									<span className="text-sm font-bold" style={{ color: option.color }}>
										{option.cta} →
									</span>
								</div>
							))}
						</div>

						{/* Separator */}
						<div className="my-12" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.25), transparent)' }} />

						{/* Guided form — open, no heavy container */}
						<div className="max-w-xl mx-auto pb-16">
							{submitted ? (
								<div className="text-center py-16">
									<div
										className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
										style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
									>
										<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
											<path d="M6 14l5 5 11-11" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<h3 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: '-0.03em' }}>
										Message received!
									</h3>
									<p style={{ color: 'rgba(255,255,255,0.45)' }}>
										Our team will be in touch within 1 business day.
									</p>
								</div>
							) : (
								<>
									<div className="mb-10">
										<h2
											className="font-black mb-2"
											style={{ fontSize: '2rem', letterSpacing: '-0.03em', color: '#fff' }}
										>
											Tell us about yourself
										</h2>
										<p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.95rem' }}>
											We&apos;ll get back to you within one business day.
										</p>
									</div>

									<form onSubmit={handleSubmit}>

										{/* Name */}
										<div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '28px', transition: 'border-color 0.2s' }}>
											<input
												type="text"
												required
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
												className="w-full bg-transparent text-white outline-none"
												style={{ fontSize: '1.05rem', padding: '8px 0', caretColor: '#f5c518' }}
												onFocus={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(245,197,24,0.6)'; }}
												onBlur={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'; }}
												placeholder="What's your name?"
											/>
										</div>

										{/* Email */}
										<div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '28px', transition: 'border-color 0.2s' }}>
											<input
												type="email"
												required
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												className="w-full bg-transparent text-white outline-none"
												style={{ fontSize: '1.05rem', padding: '8px 0', caretColor: '#f5c518' }}
												onFocus={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(245,197,24,0.6)'; }}
												onBlur={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'; }}
												placeholder="Work email"
											/>
										</div>

										{/* Company + Team Size */}
										<div className="grid grid-cols-2 gap-8" style={{ marginBottom: '28px' }}>
											<div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', transition: 'border-color 0.2s' }}>
												<input
													type="text"
													value={formData.company}
													onChange={(e) => setFormData({ ...formData, company: e.target.value })}
													className="w-full bg-transparent text-white outline-none"
													style={{ fontSize: '1.05rem', padding: '8px 0', caretColor: '#f5c518' }}
													onFocus={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(245,197,24,0.6)'; }}
													onBlur={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'; }}
													placeholder="Company"
												/>
											</div>
											<div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', transition: 'border-color 0.2s' }}>
												<select
													value={formData.teamSize}
													onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
													className="w-full bg-transparent outline-none appearance-none cursor-pointer"
													style={{
														fontSize: '1.05rem',
														padding: '8px 0',
														color: formData.teamSize ? '#fff' : 'rgba(255,255,255,0.35)',
													}}
													onFocus={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(245,197,24,0.6)'; }}
													onBlur={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'; }}
												>
													<option value="" style={{ background: '#111' }}>Team size</option>
													<option value="1-10" style={{ background: '#111' }}>1–10</option>
													<option value="11-50" style={{ background: '#111' }}>11–50</option>
													<option value="51-200" style={{ background: '#111' }}>51–200</option>
													<option value="201-1000" style={{ background: '#111' }}>201–1,000</option>
													<option value="1000+" style={{ background: '#111' }}>1,000+</option>
												</select>
											</div>
										</div>

										{/* Message */}
										<div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '44px', transition: 'border-color 0.2s' }}>
											<textarea
												rows={3}
												value={formData.message}
												onChange={(e) => setFormData({ ...formData, message: e.target.value })}
												className="w-full bg-transparent text-white outline-none resize-none"
												style={{ fontSize: '1.05rem', padding: '8px 0', caretColor: '#f5c518' }}
												onFocus={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(245,197,24,0.6)'; }}
												onBlur={(e) => { (e.target.parentElement as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'; }}
												placeholder="Tell us about your use case…"
											/>
										</div>

										{/* CTA */}
										<button
											type="submit"
											className="w-full flex items-center justify-center gap-3 font-bold transition-all duration-300"
											style={{
												background: '#f5c518',
												color: '#000',
												padding: '20px 32px',
												borderRadius: '8px',
												fontSize: '1rem',
												letterSpacing: '-0.01em',
												boxShadow: '0 0 32px rgba(245,197,24,0.22), 0 4px 16px rgba(0,0,0,0.4)',
											}}
											onMouseEnter={(e) => {
												(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 52px rgba(245,197,24,0.4), 0 8px 24px rgba(0,0,0,0.5)';
												(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
											}}
											onMouseLeave={(e) => {
												(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(245,197,24,0.22), 0 4px 16px rgba(0,0,0,0.4)';
												(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
											}}
										>
											Send message
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
												<path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>

										<p className="text-xs text-center mt-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
											By submitting, you agree to our Privacy Policy and Terms of Service.
										</p>
									</form>
								</>
							)}
						</div>
					</div>
				</section>

				{/* Office info — coarse grid + center glow */}
				<section className="py-16 pb-24 relative overflow-hidden" style={{ background: '#050505' }}>
					<div className="absolute inset-0 pointer-events-none" style={{
						backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
						backgroundSize: '80px 80px',
					}} />
					<div className="absolute inset-0 pointer-events-none" style={{
						background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,197,24,0.04) 0%, transparent 65%)',
					}} />
					<div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{[
								{ city: 'San Francisco', address: '340 Pine Street, Suite 800\nSan Francisco, CA 94104', type: 'HQ' },
								{ city: 'New York', address: '1 World Trade Center, Floor 85\nNew York, NY 10007', type: 'Office' },
								{ city: 'London', address: '1 Canada Square, Canary Wharf\nLondon, E14 5AB', type: 'Office' },
							].map((office) => (
								<div
									key={office.city}
									className="rounded-lg p-6 reveal"
									style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }}
								>
									<div className="flex items-center gap-2 mb-3">
										<span className="text-base font-bold text-white">{office.city}</span>
										<span
											className="text-xs font-bold px-2 py-0.5 rounded"
											style={{ background: 'rgba(245,197,24,0.1)', color: '#f5c518', border: '1px solid rgba(245,197,24,0.2)' }}
										>
											{office.type}
										</span>
									</div>
									<p className="text-sm whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.4)' }}>
										{office.address}
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

'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
	{
		name: 'Starter',
		monthlyPrice: 49,
		yearlyPrice: 39,
		description: 'For small teams getting started with automation.',
		features: [
			'Up to 5 users',
			'10 active workflows',
			'25 integrations',
			'10K automations/month',
			'Email support',
			'7-day data retention',
		],
		cta: 'Start Free Trial',
		popular: false,
	},
	{
		name: 'Growth',
		monthlyPrice: 149,
		yearlyPrice: 119,
		description: 'For scaling teams that need more power and visibility.',
		features: [
			'Up to 25 users',
			'Unlimited workflows',
			'100+ integrations',
			'500K automations/month',
			'Priority support',
			'90-day data retention',
			'AI insights',
			'Custom dashboards',
		],
		cta: 'Start Free Trial',
		popular: true,
	},
	{
		name: 'Enterprise',
		monthlyPrice: 499,
		yearlyPrice: 399,
		description: 'For large organizations with advanced security needs.',
		features: [
			'Unlimited users',
			'Unlimited workflows',
			'200+ integrations',
			'Unlimited automations',
			'Dedicated support',
			'Unlimited data retention',
			'Advanced AI & ML',
			'SSO & SAML',
			'Custom SLA',
			'On-premise option',
		],
		cta: 'Contact Sales',
		popular: false,
	},
];

export function PricingSection() {
	const [yearly, setYearly] = useState(false);

	return (
		<section
			id="pricing"
			className="py-24 lg:py-32 relative overflow-hidden"
			style={{ background: '#080808' }}
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,197,24,0.04) 0%, transparent 60%)',
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<div className="text-center max-w-2xl mx-auto mb-16 reveal">
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
							Pricing
						</span>
					</div>
					<h2
						className="font-black leading-none mb-4"
						style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', color: '#fff' }}
					>
						Simple, transparent
						<br />
						<span className="text-gradient">pricing.</span>
					</h2>
					<p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
						Start free. Scale as you grow. No hidden fees.
					</p>

					{/* Toggle */}
					<div className="toggle-track inline-flex">
						<button
							className={`toggle-option ${!yearly ? 'active' : ''}`}
							onClick={() => setYearly(false)}
						>
							Monthly
						</button>
						<button
							className={`toggle-option ${yearly ? 'active' : ''}`}
							onClick={() => setYearly(true)}
						>
							Yearly
							<span
								className="ml-2 text-xs font-bold px-1.5 py-0.5 rounded"
								style={{
									background: yearly ? 'rgba(0,0,0,0.2)' : 'rgba(245,197,24,0.15)',
									color: yearly ? '#000' : '#f5c518',
								}}
							>
								-20%
							</span>
						</button>
					</div>
				</div>

				{/* Plans */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 reveal">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className="relative rounded-lg p-8 flex flex-col"
							style={{
								background: plan.popular ? '#0f0f0f' : '#0a0a0a',
								border: plan.popular
									? '1px solid rgba(245,197,24,0.35)'
									: '1px solid rgba(255,255,255,0.07)',
								boxShadow: plan.popular ? '0 0 60px rgba(245,197,24,0.08)' : 'none',
							}}
						>
							{/* Popular badge */}
							{plan.popular && (
								<div
									className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
									style={{ background: '#f5c518', color: '#000' }}
								>
									Most Popular
								</div>
							)}

							{/* Plan header */}
							<div className="mb-8">
								<h3
									className="text-lg font-bold text-white mb-2"
									style={{ letterSpacing: '-0.02em' }}
								>
									{plan.name}
								</h3>
								<p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
									{plan.description}
								</p>
								<div className="flex items-end gap-1">
									<span
										className="font-black leading-none"
										style={{ fontSize: '3rem', letterSpacing: '-0.04em', color: '#fff' }}
									>
										${yearly ? plan.yearlyPrice : plan.monthlyPrice}
									</span>
									<span className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
										/mo
									</span>
								</div>
								{yearly && (
									<div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
										Billed annually (${plan.yearlyPrice * 12}/yr)
									</div>
								)}
							</div>

							{/* CTA */}
							<Link
								href="/contact"
								className={plan.popular ? 'btn-primary mb-8 justify-center' : 'btn-secondary mb-8 justify-center'}
							>
								{plan.cta}
							</Link>

							{/* Features */}
							<div className="flex-1">
								<div
									className="text-xs font-semibold uppercase tracking-widest mb-4"
									style={{ color: 'rgba(255,255,255,0.3)' }}
								>
									What&apos;s included
								</div>
								<ul className="space-y-3">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-center gap-3">
											<div
												className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
												style={{
													background: plan.popular ? 'rgba(245,197,24,0.15)' : 'rgba(255,255,255,0.06)',
													border: plan.popular ? '1px solid rgba(245,197,24,0.3)' : '1px solid rgba(255,255,255,0.1)',
												}}
											>
												<svg width="8" height="8" viewBox="0 0 8 8" fill="none">
													<path
														d="M1.5 4l1.5 1.5L6.5 2"
														stroke={plan.popular ? '#f5c518' : 'rgba(255,255,255,0.5)'}
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				{/* Enterprise note */}
				<div className="text-center mt-12 reveal">
					<p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
						All plans include a 14-day free trial. No credit card required.{' '}
						<Link href="/contact" style={{ color: '#f5c518' }}>
							Talk to sales
						</Link>{' '}
						for custom pricing.
					</p>
				</div>
			</div>
		</section>
	);
}

'use client';
// Product showcase - cinematic reveal with glow
export function ProductShowcaseSection() {
	return (
		<section
			className="relative py-32 overflow-hidden"
			style={{ background: '#030303' }}
		>
			{/* Section label */}
			<div className="max-w-7xl mx-auto px-8 lg:px-16 mb-16">
				<div className="flex items-center gap-4 mb-6 reveal">
					<div style={{ width: '32px', height: '1px', background: '#f5c518' }} />
					<span
						className="text-xs font-bold uppercase tracking-widest"
						style={{ color: '#f5c518', letterSpacing: '0.2em' }}
					>
						Product
					</span>
				</div>
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<h2
						className="font-black reveal"
						style={{
							fontSize: 'clamp(2.5rem, 5vw, 4rem)',
							lineHeight: '0.95',
							letterSpacing: '-0.03em',
							color: '#fff',
							maxWidth: '600px',
						}}
					>
						One platform.
						<br />
						<span style={{ color: 'rgba(255,255,255,0.35)' }}>Every workflow.</span>
					</h2>
					<p
						className="reveal"
						style={{
							fontSize: '1rem',
							lineHeight: '1.7',
							color: 'rgba(255,255,255,0.45)',
							maxWidth: '360px',
						}}
					>
						See how Nexus brings your data, automation, and intelligence together in a single, unified workspace.
					</p>
				</div>
			</div>

			{/* Dashboard mockup — full-width cinematic */}
			<div className="max-w-7xl mx-auto px-8 lg:px-16">
				{/* Ambient glow behind the UI */}
				<div className="relative" style={{ filter: 'drop-shadow(0 0 80px rgba(245,197,24,0.1)) drop-shadow(0 0 200px rgba(245,197,24,0.05))' }}>
				<div
					className="reveal"
					style={{
						background: '#0a0a0a',
						border: '1px solid rgba(255,255,255,0.09)',
						overflow: 'hidden',
						transform: 'perspective(1400px) rotateX(1.5deg)',
						transformOrigin: 'center top',
					}}
				>
					{/* Top chrome bar */}
					<div
						className="flex items-center justify-between px-6 py-4"
						style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#070707' }}
					>
						<div className="flex items-center gap-3">
							<div className="flex gap-1.5">
								<div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
								<div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
								<div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
							</div>
							<div
								className="flex items-center px-4 py-1.5 gap-2"
								style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
							>
								<div className="w-2 h-2 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
								<span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
									app.nexus.io / dashboard
								</span>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>
								v4.2.1
							</span>
							<div
								className="px-3 py-1 text-xs font-bold uppercase tracking-wider"
								style={{ background: 'rgba(245,197,24,0.1)', color: '#f5c518', border: '1px solid rgba(245,197,24,0.2)' }}
							>
								Live
							</div>
						</div>
					</div>

					{/* Dashboard body */}
					<div className="flex" style={{ minHeight: '520px' }}>
						{/* Sidebar */}
						<div
							className="hidden lg:flex flex-col gap-1 py-6 px-4"
							style={{ width: '200px', borderRight: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}
						>
							{[
								{ label: 'Overview', active: true, icon: '▣' },
								{ label: 'Workflows', active: false, icon: '⟳' },
								{ label: 'Analytics', active: false, icon: '◈' },
								{ label: 'Integrations', active: false, icon: '⊕' },
								{ label: 'AI Insights', active: false, icon: '✦' },
								{ label: 'Settings', active: false, icon: '⚙' },
							].map((item) => (
								<div
									key={item.label}
									className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium"
									style={{
										color: item.active ? '#f5c518' : 'rgba(255,255,255,0.3)',
										background: item.active ? 'rgba(245,197,24,0.06)' : 'transparent',
										borderLeft: item.active ? '2px solid #f5c518' : '2px solid transparent',
										cursor: 'default',
									}}
								>
									<span style={{ fontSize: '0.7rem', opacity: 0.7 }}>{item.icon}</span>
									{item.label}
								</div>
							))}
						</div>

						{/* Main content */}
						<div className="flex-1 p-6 lg:p-8">
							{/* Top metrics row */}
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
								{[
									{ label: 'Total Revenue', value: '$2.4M', change: '+18.3%', up: true },
									{ label: 'Active Workflows', value: '1,284', change: '+42', up: true },
									{ label: 'Efficiency Score', value: '94.2%', change: '+6.1%', up: true },
									{ label: 'Incidents', value: '3', change: '-82%', up: false },
								].map((metric) => (
									<div
										key={metric.label}
										className="p-4"
										style={{
											background: 'rgba(255,255,255,0.02)',
											border: '1px solid rgba(255,255,255,0.06)',
										}}
									>
										<div className="text-xs mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
											{metric.label}
										</div>
										<div
											className="font-black mb-1"
											style={{ fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}
										>
											{metric.value}
										</div>
										<div
											className="text-xs font-semibold"
											style={{ color: metric.up ? '#22c55e' : '#f5c518' }}
										>
											{metric.change} vs last month
										</div>
									</div>
								))}
							</div>

							{/* Chart + activity row */}
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
								{/* Chart — 2/3 width */}
								<div
									className="lg:col-span-2 p-6"
									style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
								>
									<div className="flex items-center justify-between mb-6">
										<div>
											<div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
												Revenue Performance
											</div>
											<div className="font-bold text-white">Q4 2024</div>
										</div>
										<div className="flex gap-2">
											{['1W', '1M', '3M', 'YTD'].map((t, i) => (
												<div
													key={t}
													className="px-2.5 py-1 text-xs font-semibold"
													style={{
														background: i === 1 ? '#f5c518' : 'transparent',
														color: i === 1 ? '#000' : 'rgba(255,255,255,0.3)',
														border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.08)',
														cursor: 'default',
													}}
												>
													{t}
												</div>
											))}
										</div>
									</div>
									{/* Bar chart */}
									<div className="flex items-end gap-2" style={{ height: '120px' }}>
										{[38, 52, 44, 68, 55, 72, 60, 80, 65, 88, 74, 100].map((h, i) => (
											<div key={i} className="flex-1 flex flex-col justify-end gap-0.5">
												<div
													style={{
														height: `${h}%`,
														background: i === 11
															? '#f5c518'
															: i >= 9
																? `rgba(245,197,24,${0.25 + (i - 9) * 0.1})`
																: 'rgba(255,255,255,0.07)',
														transition: 'height 0.3s ease',
													}}
												/>
											</div>
										))}
									</div>
									{/* X-axis labels */}
									<div className="flex justify-between mt-3">
										{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
											<div key={m} className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
												{m}
											</div>
										))}
									</div>
								</div>

								{/* Activity feed — 1/3 width */}
								<div
									className="p-6"
									style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
								>
									<div className="text-xs uppercase tracking-wider mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
										Live Activity
									</div>
									<div className="space-y-4">
										{[
											{ text: 'Invoice workflow completed', time: '2m', dot: '#22c55e', label: 'Done' },
											{ text: 'Salesforce sync triggered', time: '5m', dot: '#f5c518', label: 'Sync' },
											{ text: 'AI model retrained', time: '12m', dot: '#3b82f6', label: 'AI' },
											{ text: 'Alert: latency resolved', time: '18m', dot: '#a855f7', label: 'Alert' },
											{ text: 'New user onboarded', time: '24m', dot: '#22c55e', label: 'User' },
										].map((item, i) => (
											<div key={i} className="flex items-start gap-3">
												<div
													className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
													style={{ background: item.dot }}
												/>
												<div className="flex-1 min-w-0">
													<div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
														{item.text}
													</div>
													<div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.2)' }}>
														{item.time} ago
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom accent bar */}
					<div
						style={{
							height: '3px',
							background: 'linear-gradient(90deg, #f5c518 0%, rgba(245,197,24,0.3) 50%, transparent 100%)',
						}}
					/>
				</div>

				{/* Caption below mockup */}
				<div className="flex items-center justify-between mt-6 reveal">
					<p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
						Real-time operations dashboard — unified across all your tools and data sources.
					</p>
					<div className="flex items-center gap-2">
						<div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
						<span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.3)' }}>
							Live data
						</span>
					</div>
				</div>
				</div>{/* /glow wrapper */}
			</div>
		</section>
	);
}

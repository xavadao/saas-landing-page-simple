'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ label: 'Products', href: '/products' },
	{ label: 'Industries', href: '/industries' },
	{ label: 'Resources', href: '/resources' },
	{ label: 'Careers', href: '/careers' },
	{ label: 'About', href: '/about' },
];

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		// Close mobile menu and re-evaluate scroll position on route change.
		// Do NOT call window.scrollTo here — Next.js App Router resets scroll
		// natively. Calling scrollTo on the old page causes the visible jump.
		setMenuOpen(false);
		setScrolled(false);
	}, [pathname]);


  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia('(min-width: 1024px)');
    if (desktop.matches) { setMenuOpen(false); return; }
    const onDesktopChange = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', onDesktopChange);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const toggle = document.getElementById('nexus-menu-toggle');
    const links = [...document.querySelectorAll<HTMLAnchorElement>('#nexus-mobile-menu a')];
    const focusable = [toggle, ...links].filter((element): element is HTMLElement => element instanceof HTMLElement);
    links[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
      if (event.key !== 'Tab' || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onDesktopChange);
      if (!desktop.matches && toggle?.isConnected && toggle.getClientRects().length) toggle.focus();
    };
  }, [menuOpen]);

	return (
		<>
			<nav
				className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
				style={{
					background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
					backdropFilter: scrolled ? 'blur(12px)' : 'none',
					borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
				}}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 lg:h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-2 group">
							<div
								className="w-8 h-8 flex items-center justify-center"
								style={{ background: '#f5c518', borderRadius: '2px' }}
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" fill="#000" />
								</svg>
							</div>
							<span
								className="text-xl font-black tracking-tight text-white"
								style={{ letterSpacing: '-0.03em' }}
							>
								NEXUS
							</span>
						</Link>

						{/* Desktop links */}
						<div className="hidden lg:flex items-center gap-8">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm font-medium transition-colors duration-200"
									style={{
										color: pathname === link.href ? '#f5c518' : 'rgba(255,255,255,0.65)',
									}}
									onClick={() => window.scrollTo(0, 0)}
									onMouseEnter={(e) => {
										if (pathname !== link.href)
											e.currentTarget.style.color = '#fff';
									}}
									onMouseLeave={(e) => {
										if (pathname !== link.href)
											e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
									}}
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Desktop CTA */}
						<div className="hidden lg:flex items-center gap-4">
							<Link
								href="/contact"
								className="text-sm font-medium transition-colors duration-200"
								style={{ color: 'rgba(255,255,255,0.65)' }}
								onClick={() => window.scrollTo(0, 0)}
								onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
								onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
							>
								Sign in
							</Link>
							<Link href="/contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }} onClick={() => window.scrollTo(0, 0)}>
								Get Started
							</Link>
						</div>

						{/* Mobile menu button */}
						<button
							className="lg:hidden flex flex-col gap-1.5 p-2"
							onClick={() => setMenuOpen(!menuOpen)}
							id="nexus-menu-toggle"
          aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="nexus-mobile-menu"
              type="button"
						>
							<span
								className="block w-6 h-0.5 bg-white transition-all duration-300"
								style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
							/>
							<span
								className="block w-6 h-0.5 bg-white transition-all duration-300"
								style={{ opacity: menuOpen ? 0 : 1 }}
							/>
							<span
								className="block w-6 h-0.5 bg-white transition-all duration-300"
								style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
							/>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			<div
				id="nexus-mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className="fixed inset-0 z-40 lg:hidden overflow-y-auto overscroll-contain transition-all duration-300"
				style={{
					opacity: menuOpen ? 1 : 0,
					pointerEvents: menuOpen ? 'all' : 'none',
					background: 'rgba(8,8,8,0.98)',
					backdropFilter: 'blur(20px)',
					paddingTop: '80px',
				}}
			>
				<div className="flex flex-col px-6 py-8 gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-2xl font-bold transition-colors duration-200"
							style={{ color: pathname === link.href ? '#f5c518' : '#fff' }}
							onClick={() => window.scrollTo(0, 0)}
						>
							{link.label}
						</Link>
					))}
					<div className="section-line my-2" />
					<Link href="/contact" className="text-xl font-medium" style={{ color: 'rgba(255,255,255,0.6)' }} onClick={() => window.scrollTo(0, 0)}>
						Sign in
					</Link>
					<Link href="/contact" className="btn-primary w-fit" onClick={() => window.scrollTo(0, 0)}>
						Get Started
					</Link>
				</div>
			</div>
		</>
	);
}

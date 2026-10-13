import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ScrollRevealInit } from '@/components/scroll-reveal';
import { HeroSection } from '@/components/sections/hero';
import { ProductShowcaseSection } from '@/components/sections/product-showcase';
import { LogosSection } from '@/components/sections/logos';
import { FeaturesSection } from '@/components/sections/features';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { IndustriesSection } from '@/components/sections/industries';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CtaSection } from '@/components/sections/cta';
import { CinematicBreak } from '@/components/sections/cinematic-break';

export default function HomePage() {
	return (
		<>
			<ScrollRevealInit />
			<Nav />
			<main>
				{/* 1. Hero — cinematic, editorial */}
				<HeroSection />

				{/* 2. Product reveal — glow + depth */}
				<ProductShowcaseSection />

				{/* 3. Social proof logos */}
				<LogosSection />

				{/* 4. Features — alternating UI + cinematic interludes */}
				<FeaturesSection />

				{/* 5. Cinematic break — mood + scale statement */}
				<CinematicBreak
					variant="radial"
					accent="Scale"
					headline={"Engineered for\nenterprise scale."}
					sub="From 10-person startups to Fortune 500 teams — Nexus grows with you without friction."
				/>

				{/* 6. How It Works — deep grid background */}
				<HowItWorksSection />

				{/* 7. Cinematic break — industries transition */}
				<CinematicBreak
					variant="diagonal"
					accent="Industries"
					headline={"Built for every\nindustry."}
					sub="Purpose-built workflows and integrations for the sectors that move the world."
				/>

				{/* 8. Industries grid */}
				<IndustriesSection />

				{/* 9. Testimonials — asymmetric, textured */}
				<TestimonialsSection />

				{/* 10. Cinematic break — pricing transition */}
				<CinematicBreak
					variant="cross"
					accent="Pricing"
					headline={"Simple pricing.\nNo surprises."}
					sub="Start free. Scale when you're ready. Cancel anytime."
				/>

				{/* 11. Pricing */}
				<PricingSection />

				{/* 12. Final CTA — cinematic full-bleed */}
				<CtaSection />
			</main>
			<Footer />
		</>
	);
}

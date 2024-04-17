import { motion } from 'framer-motion';

import HeroBanner from '../assets/hero-banner.jpeg';
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight';

export function HeroHighlightSection() {
	return (
		<HeroHighlight>
			<div className="flex flex-col lg:flex-row items-center gap-10 mt-[100px] md:mt-0">
				<div>
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: [20, -5, 0],
						}}
						transition={{
							duration: 1,
							ease: [0.4, 0.0, 0.2, 1],
						}}
						className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug"
					>
						We welcome you to the Hogwart of India,{' '}
						<Highlight className="text-black dark:text-white">
							BIT Sindri
						</Highlight>{' '}
						and be a part of{' '}
						<Highlight className="text-black dark:text-white">
							Tech Udbhav.
						</Highlight>{' '}
					</motion.h1>{' '}
					<br />
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: [20, -5, 0],
						}}
						transition={{
							duration: 1,
							ease: [0.4, 0.0, 0.2, 1],
						}}
						className="text-lg px-4 md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug"
					>
						<Highlight className="text-black dark:text-white">
							IETE Students Forum
						</Highlight>{' '}
						is here with its annual tech fest Tech Udbhav to discover the magic
						of science, with a magical chip equipped in our skull and spells
						learnt, tried and tasted by time.
					</motion.h1>
				</div>
				<motion.div
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 1,
						ease: [0.4, 0.0, 0.2, 1],
					}}
				>
					<img
						src={HeroBanner}
						alt="Banner"
						className="h-[400px] md:h-[500px] rounded-[22px]"
					/>
				</motion.div>
			</div>
		</HeroHighlight>
	);
}

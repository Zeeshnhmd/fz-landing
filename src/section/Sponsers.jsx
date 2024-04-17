import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';

import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import Sponser from '../assets/sponsers.jpg';

export const Sponsers = () => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }) {
		if (!currentTarget) return;
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className={
				'relative flex items-center bg-white dark:bg-black justify-center w-full group'
			}
			onMouseMove={handleMouseMove}
		>
			<div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
			<motion.div
				className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					WebkitMaskImage: useMotionTemplate`
      radial-gradient(
        200px circle at ${mouseX}px ${mouseY}px,
        black 0%,
        transparent 100%
      )
    `,
					maskImage: useMotionTemplate`
      radial-gradient(
        200px circle at ${mouseX}px ${mouseY}px,
        black 0%,
        transparent 100%
      )
    `,
				}}
			/>
			<div className="flex flex-col items-center justify-center z-20">
				<h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug">
					Our Sponsers
				</h1>
				<InfiniteMovingCards items={sponsers} direction="right" speed="slow" />
			</div>
		</div>
	);
};

const sponsers = [
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
	{ image: Sponser },
];

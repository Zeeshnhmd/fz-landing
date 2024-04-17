import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import Sponser from '../assets/sponsers.jpg';

export const Sponsers = () => {
	return (
		<div className="flex flex-col items-center justify-center z-20">
			<h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug">
				Our Sponsers
			</h1>
			<InfiniteMovingCards items={sponsers} direction="right" speed="slow" />
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

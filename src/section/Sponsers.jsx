import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import Sponser1 from '../assets/sponser-11.png';
import Sponser2 from '../assets/sponser-22.png';
import Sponser3 from '../assets/sponser-33.png';
import Sponser4 from '../assets/sponser-44.png';
import Sponser5 from '../assets/sponser-55.jpg';

export const Sponsers = () => {
	return (
		<div className="flex flex-col items-center justify-center z-20 pb-10 md:pb-20">
			<h1 className="text-2xl pb-5 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug">
				Our Sponsers
			</h1>
			<InfiniteMovingCards items={sponsers} direction="right" speed="slow" />
		</div>
	);
};

const sponsers = [
	{ id: 1, image: Sponser1 },
	{ id: 2, image: Sponser2 },
	{ id: 3, image: Sponser3 },
	{ id: 4, image: Sponser4 },
	{ id: 5, image: Sponser5 },
];

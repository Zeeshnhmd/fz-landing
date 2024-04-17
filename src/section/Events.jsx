import Poster1 from '../assets/poster-11.webp';
import Poster2 from '../assets/poster-22.webp';
import Poster3 from '../assets/poster-33.webp';
import { Meteors } from '../components/ui/meteors';

export function Events() {
	return (
		<div className="flex flex-col items-center justify-center z-20 pt-10">
			<h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug">
				Our Events
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 max-w-7xl px-5">
				{eventContents.map((el) => (
					<div
						key={el.id}
						className="w-full relative max-w-xs rounded-lg border border-gray-800"
					>
						<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
						<div className="inline-flex items-center justify-center rounded-lg bg-gray-900 backdrop-blur-3xl">
							<div className="relative overflow-hidden rounded-lg">
								<div className="overflow-hidden">
									<img
										src={el.poster}
										alt="thumbnail"
										className={`rounded-t-lg`}
									/>
								</div>
								<div className=" relative p-4">
									<div className="flex items-center justify-between">
										<h2 className="font-bold my-2 text-lg text-white">
											{el.eventname}
										</h2>
										<span className="text-sm text-white">{el.eventTime}</span>
									</div>
									<h2 className="font-normal my-2 text-sm text-white">
										{el.description}
									</h2>
									<div className="flex flex-row justify-between items-center mt-5">
										<div className="relative z-10 px-6 py-2 bg-white text-black font-bold rounded-md block text-xs">
											<a href={el.ruleBook}>Rule Book</a>
										</div>
										<div className="relative z-10 px-6 py-2 bg-white text-black font-bold rounded-md block text-xs">
											<a href={el.googleForm}>Register</a>
										</div>
										<Meteors number={20} />
									</div>
								</div>{' '}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const eventContents = [
	{
		id: 1,
		poster: Poster1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed sequi repudiandae similique minus nobis ab recusandae aliquam tempore voluptas.',
		eventTime: '20 April, 2024',
		googleForm: 'https://techudbhav.com',
		ruleBook: 'https://techudbhav.com',
		eventname: 'Robo Soccer',
		avatar: 'TU',
	},
	{
		id: 2,
		poster: Poster2,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed sequi repudiandae similique minus nobis ab recusandae aliquam tempore voluptas.',
		eventTime: '20 April, 2024',
		googleForm: 'https://techudbhav.com',
		ruleBook: 'https://techudbhav.com',
		eventname: 'Robo Soccer',
		avatar: 'TU',
	},
	{
		id: 3,
		poster: Poster3,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed sequi repudiandae similique minus nobis ab recusandae aliquam tempore voluptas.',
		eventTime: '20 April, 2024',
		googleForm: 'https://techudbhav.com',
		ruleBook: 'https://techudbhav.com',
		eventname: 'Robo Soccer',
		avatar: 'TU',
	},
	{
		id: 4,
		poster: Poster1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed sequi repudiandae similique minus nobis ab recusandae aliquam tempore voluptas.',
		eventTime: '20 April, 2024',
		googleForm: 'https://techudbhav.com',
		ruleBook: 'https://techudbhav.com',
		eventname: 'Robo Soccer',
		avatar: 'TU',
	},
	{
		id: 5,
		poster: Poster1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed sequi repudiandae similique minus nobis ab recusandae aliquam tempore voluptas.',
		eventTime: '20 April, 2024',
		googleForm: 'https://techudbhav.com',
		ruleBook: 'https://techudbhav.com',
		eventname: 'Robo Soccer',
		avatar: 'TU',
	},
	{
		id: 6,
		poster: Poster1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed sequi repudiandae similique minus nobis ab recusandae aliquam tempore voluptas.',
		eventTime: '20 April, 2024',
		googleForm: 'https://techudbhav.com',
		ruleBook: 'https://techudbhav.com',
		eventname: 'Robo Soccer',
		avatar: 'TU',
	},
];

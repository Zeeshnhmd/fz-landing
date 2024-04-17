import Poster1 from '../assets/poster-11.jpg';
import Poster2 from '../assets/poster-22.jpg';
import Poster3 from '../assets/poster-33.jpg';

export function Events() {
	return (
		<div className="flex flex-col items-center justify-center z-20 pt-10">
			<h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug">
				Our Events
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 max-w-7xl">
				{eventContents.map((el) => (
					<div
						key={el.id}
						className="relative inline-flex overflow-hidden rounded-2xl p-[2px]"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 backdrop-blur-3xl">
							<div className="relative overflow-hidden h-full rounded-2xl">
								<div className="w-full aspect-w-16 aspect-h-10 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
									<img
										src={el.poster}
										alt="thumbnail"
										className={`rounded-t-2xl`}
									/>
								</div>
								<div className="p-4">
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
										<div className="relative z-10 px-6 py-2 bg-white text-black font-bold rounded-xl block text-xs">
											<a href={el.ruleBook}>Rule Book</a>
										</div>
										<div className="relative z-10 px-6 py-2 bg-white text-black font-bold rounded-xl block text-xs">
											<a href={el.googleForm}>Register</a>
										</div>
									</div>
								</div>
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

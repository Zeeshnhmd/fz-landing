import Logo from '../assets/logo.jpeg';

const Navbar = () => {
	return (
		<header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between text-white">
			<aside className="flex items-center gap-[5px]">
				<img src={Logo} alt="fuzzie logo" className="h-8" /> Tech Udbhav
			</aside>
			<nav className="absolute left-[50%] top-[50%] trasfrom translate-x-[-50%] translate-y-[-50%] hidden md:block">
				<ul className="flex items-center gap-4  list-none">
					<li className="cursor-pointer">
						<a href="#events">Events</a>
					</li>
					<li className="cursor-pointer">
						<a href="#sponsers">Sponsers</a>
					</li>
					<li className="cursor-pointer">
						<a href="/" target="_blank">
							Main Site
						</a>
					</li>
				</ul>
			</nav>
			<aside className="flex items-center gap-4">
				<a
					href="#"
					className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
						<a href="" target="_blank">
							Contact Us
						</a>
					</span>
				</a>
			</aside>
		</header>
	);
};

export default Navbar;

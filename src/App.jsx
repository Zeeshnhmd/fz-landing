import { HeroHighlightSection } from './section/HeroHighlight';
import Navbar from './section/Navbar';
import { Events } from './section/Events';
import { Sponsers } from './section/Sponsers';

import './global.css';

const App = () => {
	return (
		<div>
			<Navbar />
			<HeroHighlightSection />
			<Events />
			<Sponsers />
		</div>
	);
};

export default App;

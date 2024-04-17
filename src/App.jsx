import { HeroHighlightSection } from './section/HeroHighlight';
import Navbar from './section/Navbar';
import { Sponsers } from './section/Sponsers';
import { HeroHighlight } from './components/ui/hero-highlight';
import { Events } from './section/Events';

import './global.css';
import { Footer } from './section/Footer';

const App = () => {
	return (
		<>
			<HeroHighlight>
				<Navbar />
				<HeroHighlightSection />
				<Events />
				<Sponsers />
			</HeroHighlight>
			<Footer />
		</>
	);
};

export default App;

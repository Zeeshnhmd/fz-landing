import { HeroHighlightSection } from './section/HeroHighlight';
import Navbar from './section/Navbar';
import { Sponsers } from './section/Sponsers';
import { HeroHighlight } from './components/ui/hero-highlight';

import './global.css';

const App = () => {
	return (
		<HeroHighlight>
			<Navbar />
			<HeroHighlightSection />
			{/* <Events /> */}
			<Sponsers />
		</HeroHighlight>
	);
};

export default App;

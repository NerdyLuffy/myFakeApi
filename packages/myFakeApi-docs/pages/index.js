import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickDocs from '../components/QuickDocs';
import Footer from '../components/Footer';
import ApiDocs from '../components/ApiDocs';

const Index = () => (
	<div>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<Hero />
				<QuickDocs />
				<ApiDocs />
				<Footer />
			</ColorModeProvider>
		</ThemeProvider>
	</div>
);

export default Index;

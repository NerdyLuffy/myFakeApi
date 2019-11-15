import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickDocs from '../components/QuickDocs';
import Footer from '../components/Footer';

const Index = () => (
	<>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<Hero />
				<QuickDocs />
				<Footer />
			</ColorModeProvider>
		</ThemeProvider>
	</>
);

export default Index;

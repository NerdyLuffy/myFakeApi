import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickDocs from '../components/QuickDocs';

const Index = () => (
	<>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<Hero />
				<QuickDocs />
			</ColorModeProvider>
		</ThemeProvider>
	</>
);

export default Index;

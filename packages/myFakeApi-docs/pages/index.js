import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Index = () => (
	<>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<Hero />
			</ColorModeProvider>
		</ThemeProvider>
	</>
);

export default Index;

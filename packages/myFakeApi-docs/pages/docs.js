import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import Cars from '../content/Cars';

const docs = () => (
	<>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<Cars />
			</ColorModeProvider>
		</ThemeProvider>
	</>
);

export default docs;

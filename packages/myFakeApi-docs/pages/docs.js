import {
	CSSReset,
	ThemeProvider,
	ColorModeProvider,
	Box,
	Heading,
	Text,
	Button,
	SimpleGrid
} from '@chakra-ui/core';
import Navbar from '../components/Navbar';

import Cars from '../content/Cars';
import SideNav from '../components/SideNav';

const docs = () => (
	<>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<SideNav />
				<Cars />
			</ColorModeProvider>
		</ThemeProvider>
	</>
);

export default docs;

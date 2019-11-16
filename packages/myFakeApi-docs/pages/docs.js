import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import ApiDocs from '../components/ApiDocs';

const docs = () => (
	<div>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<ApiDocs />
			</ColorModeProvider>
		</ThemeProvider>
	</div>
);

export default docs;

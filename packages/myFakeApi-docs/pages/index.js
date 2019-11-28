import React from 'react';
import SEO from '../components/SEO';
import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickDocs from '../components/QuickDocs';
import ApiDocs from '../components/ApiDocs';
import Contributions from '../components/Contributions';
import Footer from '../components/Footer';

const Index = () => (
	<div>
		<SEO />
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<Navbar />
				<Hero />
				<QuickDocs />
				<ApiDocs />
				<Contributions />
				<Footer />
			</ColorModeProvider>
		</ThemeProvider>
	</div>
);

export default Index;

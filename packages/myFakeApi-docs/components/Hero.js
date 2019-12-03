import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/core';

const Hero = () => (
	<>
		<Box px={[10, 10, 32, 40]} width="full">
			<Heading size="lg" fontSize="55px" as="h1">
				My Fake API ⚡️
			</Heading>
			<Text pt={5} fontSize="2xl">
				Kickstart new applications at light speed using our modular and free to
				use API mocking service that gives you all the essential endpoints you
				would require to scaffold, mock and test your applications.
			</Text>
		</Box>
	</>
);

export default Hero;

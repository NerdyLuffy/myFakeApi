import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/core';
import Link from 'next/link';

const Hero = () => (
	<>
		<SimpleGrid>
			<Box pl={10} pr={10} width="full">
				<Heading size="lg" fontSize="55px" as="h1">
					My Fake API ⚡️
				</Heading>
				<Text mt={5} fontSize="2xl">
					Kickstart new applications at light speed using our modular and free
					to use API mocking service that gives you all the essential endpoints
					you would require to scaffold, mock and test your applications.
				</Text>
			</Box>
		</SimpleGrid>
	</>
);

export default Hero;

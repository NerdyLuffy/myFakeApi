import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import Download from './Download';

const Postman = () => (
	<>
		<Heading size="lg" fontSize="55px" as="h1">
			Postman Collection
		</Heading>
		<Text fontSize="lg" pt={5}>
			A free postman collection with all our routes.
		</Text>
		<Box pt={5}>
			<Download />
		</Box>
	</>
);

export default Postman;

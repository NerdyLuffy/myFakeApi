import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/core';
import Stats from '../components/Stats';
import Postman from './Postman';

const Cars = () => (
	<>
		<SimpleGrid minChildWidth="200px" spacing={10} pt={10} pr={10} pl={10}>
			<Box>
				<Postman />
			</Box>
			<Box>
				<Stats />
			</Box>
		</SimpleGrid>
	</>
);

export default Cars;

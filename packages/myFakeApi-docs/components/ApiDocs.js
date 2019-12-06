import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/core';
import Stats from '../components/Stats';
import Postman from './Postman';

const ApiDocs = () => (
	<>
		<Box px={[10, 10, 32, 40]} width="full">
			<SimpleGrid minChildWidth="200px" spacing={10} pt={10}>
				<Box>
					<Postman />
				</Box>
				<Box>
					<Stats />
				</Box>
			</SimpleGrid>
		</Box>
	</>
);

export default ApiDocs;

import { Heading, SimpleGrid, Box } from '@chakra-ui/core';

import AllApi from '../components/AllApi';
import Stats from '../components/Stats';
import Postman from './Postman';

const Cars = () => (
	<>
		<SimpleGrid>
			<Box pl={10} pr={10} pt={10}>
				<Heading size="lg" fontSize="55px" as="h1">
					Guide
				</Heading>
				<AllApi />
				<SimpleGrid minChildWidth="400px" spacing={2} pt={10} pb={10}>
					<Box>
						<Postman />
					</Box>
					<Box>
						<Stats />
					</Box>
				</SimpleGrid>
			</Box>
		</SimpleGrid>
	</>
);

export default Cars;

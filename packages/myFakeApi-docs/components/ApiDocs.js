import { Box, SimpleGrid } from '@chakra-ui/core';
import Stats from '../components/Stats';
import Postman from './Postman';

const Cars = () => (
	<>
		<SimpleGrid>
			<Box pl={10} pr={10} pt={10}>
				<SimpleGrid minChildWidth="200px" spacing={10} pt={10} pb={10}>
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

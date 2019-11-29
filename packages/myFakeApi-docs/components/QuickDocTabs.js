import React from 'react';
import {
	Box,
	SimpleGrid,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel
} from '@chakra-ui/core';
import Car from '../components/codeblock/Car.mdx';
import Cars from '../components/codeblock/Cars.mdx';

const QuickDocTabs = () => (
	<>
		<Box>
			<Tabs isFitted variant="line">
				<TabList mb="1em">
					<Tab fontSize="lg" fontWeight="medium">
						List Single Car
					</Tab>
					<Tab fontSize="lg" fontWeight="medium">
						List All Cars
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Box borderWidth="1px" p={4}>
							<SimpleGrid columns={2} spacing={5} minChildWidth="200px" pr={20}>
								<Text fontSize="2xl">Request</Text>
								<Text fontSize="xl" as="samp">
									/api/cars/:id
								</Text>
								<Text fontSize="2xl">Response</Text>
								<Car />
							</SimpleGrid>
						</Box>
					</TabPanel>
					<TabPanel>
						<Box borderWidth="1px" p={4}>
							<SimpleGrid columns={2} spacing={5} minChildWidth="200px" pr={20}>
								<Text fontSize="2xl">Request</Text>
								<Text fontSize="xl" as="samp">
									/api/cars
								</Text>
								<Text fontSize="2xl">Response</Text>
								<Cars />
							</SimpleGrid>
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	</>
);

export default QuickDocTabs;

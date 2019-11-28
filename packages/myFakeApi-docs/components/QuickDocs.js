import React from 'react';
import {
	Box,
	Heading,
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
import ComingSoon from '../components/codeblock/ComingSoon.mdx';

const QuickDocs = () => (
	<>
		<Box pl={10} pr={10} pt={10} width="full">
			<Heading size="lg" fontSize="55px" as="h1">
				Get Started
			</Heading>
			<Text mt={5} pb={10} fontSize="2xl">
				MyFakeAPI is a free online REST API that you can use whenever you need
				some fake data. No registration, tokens or keys required.
			</Text>

			<Tabs isFitted variant="line">
				<TabList mb="1em">
					<Tab fontSize="lg" fontWeight="medium">
						List Single Car
					</Tab>
					<Tab fontSize="lg" fontWeight="medium">
						List All Cars
					</Tab>
					<Tab fontSize="lg" fontWeight="medium">
						More Coming Soon 🚀
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
					<TabPanel>
						<Box borderWidth="1px" p={4}>
							<SimpleGrid columns={2} spacing={5} minChildWidth="200px" pr={20}>
								<Text fontSize="2xl">Request</Text>
								<Text fontSize="xl" as="samp">
									/api/comingsoon/:id
								</Text>
								<Text fontSize="2xl">Response</Text>
								<ComingSoon />
							</SimpleGrid>
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	</>
);

export default QuickDocs;

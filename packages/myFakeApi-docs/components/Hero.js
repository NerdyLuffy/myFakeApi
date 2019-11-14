import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/core';

const Hero = () => (
	<>
		<SimpleGrid>
			<Box pl={10} pr={10} width="full">
				<Heading size="lg" fontSize="55px" as="h1">
					My Fake API ⚡️
				</Heading>
				<Text mt={5} fontSize="2xl">
					Build truely accessible web applications with speed and precision
					using our modular and accessible API mocking library that gives you
					all the building blocks you need to build, integrate, mock and test
					your applications.
				</Text>
				<Button
					size="lg"
					variant="solid"
					mt={10}
					fontWeight="medium"
					borderRadius="6px"
					boxShadow="lg"
					variantColor="gray"
				>
					Get Started
				</Button>
			</Box>
		</SimpleGrid>
	</>
);

export default Hero;

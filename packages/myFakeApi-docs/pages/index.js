import {
	Box,
	CSSReset,
	ThemeProvider,
	Heading,
	Text,
	Button,
	SimpleGrid
} from "@chakra-ui/core";

const Index = () => (
	<>
		<ThemeProvider>
			<CSSReset />
			<SimpleGrid>
				<Box p={80} width="full" bg="white">
					<Heading size="lg" fontSize="55px" as="h1" color="black">
						My Fake API ⚡️
					</Heading>
					<Text mt={5} fontSize="2xl">
						Build truely accessible web applications with speed and precision
						using our modular and accessible API mocking library that gives you
						all the building blocks you need to build, mock, integrate and test
						your applications.
					</Text>
					<Button
						size="lg"
						variant="solid"
						bg="black"
						color="white"
						_hover={{ bg: "#0d0" }}
						mt={5}
						fontWeight="medium"
						borderRadius="6px"
						boxShadow="md"
					>
						Get Started
					</Button>
				</Box>
			</SimpleGrid>
		</ThemeProvider>
	</>
);

export default Index;

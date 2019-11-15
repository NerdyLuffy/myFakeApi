import {
	Heading,
	Text,
	SimpleGrid,
	Box,
	Button,
	Flex,
	Avatar,
	AvatarBadge,
	Stack,
	Badge
} from '@chakra-ui/core';

const Cars = () => (
	<>
		<SimpleGrid>
			<Box pl={20} pr={20} pb={20}>
				<Box pb={5}>
					<Heading as="h1" size="xl">
						Getting Started
					</Heading>
				</Box>
				<Text fontSize="lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
					aperiam modi eum quam, cupiditate nesciunt corrupti cumque iste iusto
					nam consequuntur nulla incidunt aliquid similique laboriosam.
					Consequatur, nemo. Nisi, repellendus sed? Alias accusantium tempora
					ducimus iure maxime delectus architecto dignissimos quos doloribus
					libero facere, ipsum eaque. Labore cum recusandae quides expedita
					officia ipsa, odit optio temporibus eos eligendi? Exercitationem autem
					dolores quae natus quo incidunt minima sit magni possimus? In rerum
					quod, illo eveniet vitae provident nisi mollitia ducimus
					necessitatibus amet. Id, voluptatibus. Ratione iste ipsum libero quam
					corporis quisquam excepturi? Rerum vero quia et, minus iusto unde
					autem repellat!
				</Text>
				<Box pb={5} pt={5}>
					<Heading>Mocking an API</Heading>
				</Box>
				<Text fontSize="lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
					aperiam modi eum quam, cupiditate nesciunt corrupti cumque iste iusto
					nam consequuntur nulla incidunt aliquid similique laboriosam.
					Consequatur, nemo. Nisi, repellendus sed? Alias accusantium tempora
					ducimus iure maxime delectus architecto dignissimos quos doloribus
					libero facere, ipsum eaque. Labore cum recusandae quides expedita
					officia ipsa, odit optio temporibus eos eligendi? Exercitationem autem
					dolores quae natus quo incidunt minima sit magni possimus? In rerum
					quod, illo eveniet vitae provident nisi mollitia ducimus
					necessitatibus amet. Id, voluptatibus. Ratione iste ipsum libero quam
					corporis quisquam excepturi? Rerum vero quia et, minus iusto unde
					autem repellat!
				</Text>
				<Box pb={5} pt={5}>
					<Heading>Calling an API</Heading>
				</Box>
				<Text fontSize="lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
					aperiam modi eum quam, cupiditate nesciunt corrupti cumque iste iusto
					nam consequuntur nulla incidunt aliquid similique laboriosam.
					Consequatur, nemo. Nisi, repellendus sed? Alias accusantium tempora
					ducimus iure maxime delectus architecto dignissimos quos doloribus
					libero facere, ipsum eaque. Labore cum recusandae quides expedita
					officia ipsa, odit optio temporibus eos eligendi? Exercitationem autem
					dolores quae natus quo incidunt minima sit magni possimus? In rerum
					quod, illo eveniet vitae provident nisi mollitia ducimus
					necessitatibus amet. Id, voluptatibus. Ratione iste ipsum libero quam
					corporis quisquam excepturi? Rerum vero quia et, minus iusto unde
					autem repellat!
				</Text>
				<Flex pt={10} pb={10}>
					<Avatar
						src="https://avatars2.githubusercontent.com/u/39453522?s=460&v=4"
						name="Angad Gupta"
					>
						<AvatarBadge size=".9em" bg="green.500" />
					</Avatar>
					<Box ml="3">
						<Text fontWeight="bold">
							Angad Gupta
							<Badge ml="1" variantColor="pink">
								Core Contributor
							</Badge>
						</Text>
						<Text fontSize="sm">
							Last modified on {new Date().getUTCDate()}/{new Date().getMonth()}
							/{new Date().getFullYear()}
						</Text>
					</Box>
				</Flex>
				<Flex>
					<Button
						size="md"
						variant="solid"
						mt={0}
						fontWeight="medium"
						borderRadius="6px"
						boxShadow="lg"
						variantColor="teal"
					>
						Next
					</Button>
				</Flex>
			</Box>
		</SimpleGrid>
	</>
);

export default Cars;

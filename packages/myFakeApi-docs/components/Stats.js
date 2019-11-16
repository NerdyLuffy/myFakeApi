import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	SimpleGrid,
	Heading,
	Button,
	Box
} from '@chakra-ui/core';

const Stats = () => (
	<>
		<SimpleGrid>
			<Box pl={10} pr={10} pt={10} width="full">
				<Heading size="lg" fontSize="55px" as="h1" mb={5}>
					Statistics
				</Heading>
				<StatGroup>
					<Stat>
						<StatLabel fontSize="lg">API Requests</StatLabel>
						<StatNumber>345,670</StatNumber>
						<StatHelpText>
							<StatArrow type="increase" />
							53.39%
						</StatHelpText>
					</Stat>

					<Stat>
						<StatLabel fontSize="lg">API Responses</StatLabel>
						<StatNumber>385,670</StatNumber>
						<StatHelpText>
							<StatArrow type="decrease" />
							2.05%
						</StatHelpText>
					</Stat>

					<Stat>
						<StatLabel fontSize="lg">API Requests</StatLabel>
						<StatNumber>345,670</StatNumber>
						<StatHelpText>
							<StatArrow type="increase" />
							53.39%
						</StatHelpText>
					</Stat>

					<Stat>
						<StatLabel fontSize="lg">API Responses</StatLabel>
						<StatNumber>385,670</StatNumber>
						<StatHelpText>
							<StatArrow type="decrease" />
							2.05%
						</StatHelpText>
					</Stat>
				</StatGroup>
				<Button
					size="lg"
					variant="solid"
					mt={5}
					fontWeight="medium"
					borderRadius="6px"
					boxShadow="lg"
					variantColor="teal"
				>
					Read More
				</Button>
			</Box>
		</SimpleGrid>
	</>
);

export default Stats;

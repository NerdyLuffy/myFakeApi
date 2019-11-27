import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Heading,
	Box
} from '@chakra-ui/core';

const Stats = () => (
	<>
		<Box pt={0}>
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
			</StatGroup>
		</Box>
	</>
);

export default Stats;

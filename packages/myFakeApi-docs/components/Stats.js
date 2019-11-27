import {
	Box,
	Heading,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Text
} from '@chakra-ui/core';

const Stats = () => (
	<>
		<Box pt={0}>
			<Heading size="lg" fontSize="55px" as="h1">
				Statistics
			</Heading>
			<Text fontSize="lg" py={5}>
				Real time statistics to view our API availability.
			</Text>
			<StatGroup>
				<Stat>
					<StatLabel fontSize="lg">API Requests</StatLabel>
					<StatNumber>Coming Soon</StatNumber>
					<StatHelpText>
						<StatArrow type="increase" />-
					</StatHelpText>
				</Stat>

				<Stat>
					<StatLabel fontSize="lg">API Responses</StatLabel>
					<StatNumber>Coming Soon</StatNumber>
					<StatHelpText>
						<StatArrow type="decrease" />-
					</StatHelpText>
				</Stat>
			</StatGroup>
		</Box>
	</>
);

export default Stats;

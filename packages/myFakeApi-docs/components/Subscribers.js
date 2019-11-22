import { Flex, PseudoBox } from '@chakra-ui/core';

const Subscribers = () => (
	<Flex as="form">
		<PseudoBox
			as="input"
			placeholder="Your email"
			type="email"
			flex="1"
			py={2}
			px={4}
			rounded="lg"
			borderWidth="1px"
			_focus={{
				outline: 'none',
				bg: 'white',
				boxShadow: 'none',
				borderColor: 'gray.300'
			}}
		/>
		<PseudoBox
			as="button"
			bg="teal.500"
			py={2}
			px={4}
			ml={3}
			rounded="md"
			fontWeight="semibold"
			color="white"
			_hover={{ bg: 'teal.600' }}
			_focus={{ boxShadow: 'outline' }}
		>
			Sign Up
		</PseudoBox>
	</Flex>
);

export default Subscribers;

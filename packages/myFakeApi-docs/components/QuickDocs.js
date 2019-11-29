import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import QuickDocTabs from './QuickDocTabs';

const QuickDocs = () => (
	<>
		<Box px={[10, 10, 32, 40]} pt={10} width="full">
			<Heading size="lg" fontSize="55px" as="h1">
				Get Started
			</Heading>
			<Text pt={5} pb={5} fontSize="2xl">
				MyFakeAPI is a free online REST API that you can use whenever you need
				some fake data. No registration, tokens or keys required.
			</Text>
			<QuickDocTabs />
		</Box>
	</>
);

export default QuickDocs;

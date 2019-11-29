import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import QuickDocTabs from './QuickDocTabs';

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
			<QuickDocTabs />
		</Box>
	</>
);

export default QuickDocs;

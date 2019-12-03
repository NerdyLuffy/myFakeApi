import React from 'react';
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';

const Sponsors = () => (
	<>
		<Box>
			<Heading size="lg" fontSize="55px" as="h1">
				Sponsors
			</Heading>
			<Text fontSize="lg" pt={5}></Text>
			<Stack isInline>
				<Link>
					<a href="https://erebos.tech" target="_blank" rel="noopener">
						<Image
							rounded="full"
							size="110px"
							src="https://erebos.tech/_nuxt/img/ab3d26a.png"
							alt="EREBOS"
						/>
					</a>
				</Link>
			</Stack>
		</Box>
	</>
);

export default Sponsors;

import React from 'react';
import { Box, Heading, SimpleGrid, Text, Link } from '@chakra-ui/core';
import Sponsors from './Sponsors';

const Contributions = () => (
	<>
		<SimpleGrid minChildWidth="200px" spacing={10} pt={10} pr={10} pl={10}>
			<Box>
				<Heading size="lg" fontSize="55px" as="h1">
					Contribute
				</Heading>
				<Text fontSize="lg" pt={5} pr={5} mr={1}>
					Our service is open sourced and community driven to ensure complete
					transparency.{' '}
					<Link
						color="teal.500"
						href="https://github.com/NerdyLuffy/myFakeApi"
						target="_blank"
					>
						Fork
					</Link>{' '}
					or{' '}
					<Link
						color="teal.500"
						href="x-github-client://openRepo/https://github.com/NerdyLuffy/myFakeApi"
					>
						Clone
					</Link>{' '}
					our official code repoistory on{' '}
					<Link
						color="teal.500"
						href="https://github.com/NerdyLuffy/myFakeApi"
						target="_blank"
					>
						Github
					</Link>{' '}
					and send us a pull request with additional features or enhancements.
				</Text>
			</Box>
			<Box>
				<Box>
					<Sponsors />
				</Box>
			</Box>
		</SimpleGrid>
	</>
);

export default Contributions;

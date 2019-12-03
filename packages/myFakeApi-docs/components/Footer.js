import React from 'react';
import { Box, Text, Link } from '@chakra-ui/core';

const Footer = () => (
	<>
		<Box textAlign="center" pt={5} pb={5} fontSize="md">
			<Box pb={5}>
				<hr />
			</Box>
			<Text>
				Proudly made in{' '}
				<span aria-label="Australia" role="img">
					🇦🇺
				</span>
			</Text>
			<Text>Released under the MIT License.</Text>
			<Text>
				Copyright &copy; {new Date().getFullYear()}{' '}
				<Link
					color="teal.500"
					href="https://github.com/angad777"
					target="_blank"
					rel="noopener"
				>
					angad777
				</Link>{' '}
				&{' '}
				<Link
					color="teal.500"
					href="https://github.com/nerdyluffy"
					target="_blank"
					rel="noopener"
				>
					nerdyluffy
				</Link>
			</Text>
		</Box>
	</>
);

export default Footer;

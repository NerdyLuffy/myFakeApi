import { Box, Text, Link } from '@chakra-ui/core';

const Footer = props => (
	<Box textAlign="center" pt="12" pb="8" fontSize="md">
		<Text>
			Proudly made in{' '}
			<span aria-label="Australia" role="img">
				🇦🇺
			</span>{' '}
		</Text>
		<Text>Released under the MIT License.</Text>
		<Text>
			Copyright &copy; {new Date().getFullYear()}{' '}
			<Link
				color="teal.500"
				href="https://github.com/angad777"
				target="__blank"
			>
				@angad777
			</Link>{' '}
			&{' '}
			<Link
				color="teal.500"
				href="https://github.com/nerdyluffy"
				target="__blank"
			>
				@nerdyluffy
			</Link>
		</Text>
	</Box>
);

export default Footer;

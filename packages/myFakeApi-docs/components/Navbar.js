import { Box, SimpleGrid, IconButton, useColorMode } from '@chakra-ui/core';

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<SimpleGrid columns={12} spacing={2}>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px"></Box>
			<Box height="65px" p={3}>
				<IconButton
					aria-label={`Switch to ${
						colorMode === 'light' ? 'dark' : 'light'
					} mode`}
					variant="ghost"
					color="current"
					ml="2"
					fontSize="20px"
					onClick={toggleColorMode}
					icon={colorMode === 'light' ? 'moon' : 'sun'}
					variantColor="teal"
					isRound="true"
					size="lg"
				/>
			</Box>
		</SimpleGrid>
	);
}

export default Navbar;

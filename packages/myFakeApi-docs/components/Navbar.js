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
					onClick={toggleColorMode}
					aria-label="darkmode"
					icon="sun"
					variant="ghost"
					isRound="true"
					size="lg"
					variantColor="gray"
				>
					Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
				</IconButton>
			</Box>
		</SimpleGrid>
	);
}

export default Navbar;

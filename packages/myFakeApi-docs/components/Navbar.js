import React from 'react';
import {
	Box,
	SimpleGrid,
	IconButton,
	useColorMode,
	Tooltip
} from '@chakra-ui/core';

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<SimpleGrid columns={12} spacing={2} px={[10, 10, 32, 40]} width="full">
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
			<Box height="65px" pl={3} pt={3}>
				<Tooltip
					label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
					placement="left"
				>
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
				</Tooltip>
			</Box>
		</SimpleGrid>
	);
}

export default Navbar;

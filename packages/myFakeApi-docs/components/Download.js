import React from 'react';
import { Button, Box, SimpleGrid } from '@chakra-ui/core';
import Link from 'next/link';

function Download() {
	return (
		<>
			<SimpleGrid
				columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
				spacingY={5}
				spacingX={0}
			>
				<Box>
					<Link>
						<a href="postman://app/collections/import/5596891-5e875714-fbe5-452d-a5a5-1a8756f0cb6c-SW7eyRFV?referrer=https%3A%2F%2Fdocumenter.getpostman.com%2Fview%2F5596891%2FSW7eyRFV%3Fversion%3Dlatest&versionTag=latest#?">
							<Button
								width="250px"
								variantColor="teal"
								variant="solid"
								size="lg"
								rightIcon="external-link"
							>
								Open with Postman
							</Button>
						</a>
					</Link>
				</Box>
				<Box>
					<Link>
						<a
							href="https://documenter.getpostman.com/view/5596891/SW7eyRFV?version=latest#intro"
							target="_blank"
						>
							<Button
								width="250px"
								variantColor="teal"
								variant="outline"
								size="lg"
								rightIcon="external-link"
							>
								View Collection
							</Button>
						</a>
					</Link>
				</Box>
			</SimpleGrid>
		</>
	);
}

export default Download;

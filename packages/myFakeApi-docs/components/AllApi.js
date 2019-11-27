import {
	Accordion,
	AccordionItem,
	AccordionHeader,
	AccordionPanel,
	AccordionIcon,
	Box
} from '@chakra-ui/core';

const AllApi = () => (
	<>
		<Box pt={5}>
			<Accordion allowToggle>
				<AccordionItem>
					<AccordionHeader>
						<Box flex="1" textAlign="left">
							List Single Car
						</Box>
						<AccordionIcon />
					</AccordionHeader>
					<AccordionPanel pb={4} mx={5}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader>
						<Box flex="1" textAlign="left">
							List All Car
						</Box>
						<AccordionIcon />
					</AccordionHeader>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader>
						<Box flex="1" textAlign="left">
							List Single User
						</Box>
						<AccordionIcon />
					</AccordionHeader>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader>
						<Box flex="1" textAlign="left">
							List All Users
						</Box>
						<AccordionIcon />
					</AccordionHeader>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	</>
);

export default AllApi;

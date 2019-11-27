import { useToast, Button } from '@chakra-ui/core';

function Download() {
	const toast = useToast();
	return (
		<Button
			variantColor="teal"
			size="lg"
			onClick={() =>
				toast({
					title: 'Starting...',
					description: 'Downloading the collection 🎉',
					status: 'success',
					duration: 5000,
					isClosable: false,
					position: 'bottom-right'
				})
			}
		>
			Download
		</Button>
	);
}

export default Download;

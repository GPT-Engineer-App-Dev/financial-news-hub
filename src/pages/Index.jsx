import { Container, Heading, Text, VStack, Box, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Financial Times
        </Heading>
        <Text fontSize="lg">
          Welcome to the Financial Times, your source for the latest business news and analysis.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Article 1</Heading>
            <Text mt={4}>Summary of the first article...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Article 2</Heading>
            <Text mt={4}>Summary of the second article...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Article 3</Heading>
            <Text mt={4}>Summary of the third article...</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
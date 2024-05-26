import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Financial Times
          </Heading>
          <Text fontSize="lg">
            Stay updated with the latest news and articles from around the world.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Latest News
          </Heading>
          <Text>
            <strong>Article 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text>
            <strong>Article 2:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text>
            <strong>Article 3:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
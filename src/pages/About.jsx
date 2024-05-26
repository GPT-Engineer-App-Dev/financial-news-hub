import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">
          About Us
        </Heading>
        <Text fontSize="lg">
          Financial Times is a leading global business publication, recognized internationally for its authority, integrity, and accuracy.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
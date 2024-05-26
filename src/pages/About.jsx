import { Container, Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">
          Financial Times is a leading global news organization, providing timely and insightful news and analysis on a wide range of topics.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
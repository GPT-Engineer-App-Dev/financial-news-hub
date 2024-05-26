import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">
          Contact Us
        </Heading>
        <Text fontSize="lg">
          For inquiries, please email us at contact@financialtimes.com or call us at (123) 456-7890.
        </Text>
      </VStack>
    </Container>
  );
};

export default Contact;
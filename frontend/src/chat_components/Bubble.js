import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function Bubble({ thread }) {
  return (
    <Box
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius="md"
      w="80%"
      p={4}
    >
      <VStack color="black" marginTop="2.5vh" padding={6}>
        <Heading>{thread.Content}</Heading>
        <Text color="green">{thread.User}</Text>
      </VStack>
    </Box>
  );
}

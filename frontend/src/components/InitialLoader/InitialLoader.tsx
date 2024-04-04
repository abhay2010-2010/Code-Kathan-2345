import { Box, Center, Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import { Logo } from "../logo/Logo";

export const InitialLoader = () => {
  return (
    <Center w={"full"} h="100vh" gap={10}>
      <Flex direction={"column"} align="center" gap={2}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text>Loading...</Text>
      </Flex>
      <Box height={"15vh"}>
        <Divider orientation="vertical" />
      </Box>
      <Logo size="10rem" />
    </Center>
  );
};

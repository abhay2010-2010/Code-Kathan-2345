import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Img,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export const Card3b = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  let obj = {
    title: "Client Report",
    description: "View a summary of all your clients over the last month.",
    time: "5hrs ago",
    image:
      "data:image/png;base64,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",
    video: "",
  };
  return isLoaded ? (
    <>
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height="30px" width="100px" />
        <SkeletonText
          mt="4"
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          height="30px"
        />
      </Box>
      <Box textAlign="center">
        <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
      </Box>
    </>
  ) : (
    <Card gap={1} p={3}>
      <Flex gap={2} alignItems={"center"}>
        <FaPlay />
        <Heading fontWeight="700" fontSize="18px">
          WATCH
        </Heading>
      </Flex>
      <Heading size="md" fontWeight="500" fontSize="18px">
        {obj.title}
      </Heading>
      <Stack>
        <Box>
          <Text fontWeight="400" fontSize="14px">
            {obj.description}
          </Text>
        </Box>
        <Flex>
          <Text fontWeight="400" fontSize="12px" display="flex" gap={2}>
            5 hrs ago | <Img w="70px" src={obj.image} />{" "}
          </Text>
        </Flex>
      </Stack>
      <Box textAlign="center">
        <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
      </Box>
    </Card>
  );
};

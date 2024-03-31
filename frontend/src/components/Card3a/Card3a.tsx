import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Post } from "../../utils/types";

interface Props {
  data: Post;
}
export const Card3a = ({ data }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return isLoaded ? (
    <>
      <Box>
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
    <Flex
      gap={2}
      height={"full"}
      direction={"column"}
      justify={"space-between"}
      as="a"
      href={data.artilcleLink}
      target="_black"
      _hover={{ filter: "brightness(130%)", textDecoration: "underline" }}
    >
      <Heading size="md" fontWeight="700" noOfLines={2}>
        {data.title}
      </Heading>
      <Text fontSize="15px" noOfLines={3}>
        {data.Description}
      </Text>
      <Flex>
        <Text display="flex" gap={2}>
          5 hrs ago | {data.source}
        </Text>
      </Flex>
    </Flex>
  );
};

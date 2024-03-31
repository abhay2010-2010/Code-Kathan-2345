// Card1.tsx
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Post } from "../../utils/types";

interface Props {
  data?: Post;
}

const Card1 = ({ data }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  !data &&
    (data = {
      id: 1,
      title: "daniel Kahneman, Nobel Prize-winning psychologist, 1934-2024",
      Description:
        'Three people have been released, but the situation "is not over yet", police in the city of Ede say.',
      source: "BBC.com",
      time: 4,
      articleLink: "https://www.bbc.com/news/world-europe-68698022",
      image1:
        "https://news.google.com/api/attachments/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs=-w280-h168-p-df-rw",
      image2:
        "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
      category: "world",
      clicks: 283,
    });
  return isLoaded ? (
    <>
      <Box padding="6" boxShadow="lg">
        <Skeleton height="150px" width="300px" />
        <SkeletonText
          mt="4"
          noOfLines={3}
          spacing="1"
          skeletonHeight="4"
          width="300px"
        />
        <Box textAlign="center">
          <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
        </Box>
      </Box>
    </>
  ) : (
    <Stack
      height={"full"}
      as="a"
      href={data.articleLink}
      target="_blank"
      _hover={{ filter: "brightness(130%)", textDecoration: "underline" }}
    >
      <VStack className="pt-serif-regular" align={"start"}>
        <Skeleton width="full" isLoaded={!isLoaded}>
          <Image
            width="full"
            src={data.image2}
            alt="Image"
            objectFit={"contain"}
            objectPosition={"left"}
          />
        </Skeleton>
        <Heading mt={1} noOfLines={1} size="md" fontWeight="700">
          {data.title}
        </Heading>
        <Text mt={1} noOfLines={3} fontWeight="400" fontSize="15px">
          {data.Description}
        </Text>
        <Flex>
          <Text fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>
            {data.time} hrs ago <Text fontWeight="600">| {data.source} |</Text>{" "}
            {data.category.toLocaleUpperCase()}
          </Text>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default Card1;

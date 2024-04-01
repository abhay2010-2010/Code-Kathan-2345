import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Post } from "../../utils/types";

interface Props {
  data?: Post;
}

export const Card3b = ({ data }: Props) => {
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
      gap={1}
      direction={"column"}
      justify={"space-evenly"}
      as="a"
      href={data.articleLink}
      target="_black"
      _hover={{ filter: "brightness(130%)", textDecoration: "underline" }}
    >
      <Flex gap={2} alignItems={"center"}>
        <FaPlay />
        <Heading fontWeight="700" size={"md"}>
          WATCH
        </Heading>
      </Flex>
      <Heading size="md" fontWeight="700" noOfLines={2}>
        {data.title}
      </Heading>
      <Stack>
        <Text fontWeight="400" fontSize="15px" noOfLines={3}>
          {data.Description}
        </Text>
        <Flex>
          <Text fontWeight="400" fontSize="12px" display="flex" gap={2}>
            {data.time} hrs ago | {data.source}
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

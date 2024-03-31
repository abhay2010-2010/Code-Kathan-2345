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
    data?: Post;
  }
  export const Card1b = ({ data }: Props) => {
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
        href={data.articleLink}
        target="_blank"
        _hover={{ filter: "brightness(130%)", textDecoration: "underline" }}
      >
        <Heading size="md" fontWeight="700" noOfLines={2}>
          {data.title}
        </Heading>
        
        <Flex mt={1}>
          <Text fontSize="13px" display="flex" gap={2}>
            5 hrs ago | {data.source}
          </Text>
        </Flex>
      </Flex>
    );
  };
  
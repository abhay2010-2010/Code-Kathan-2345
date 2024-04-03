import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Post } from "../../utils/types";

interface Props {
  data?: Post;
}
function Card5({ data }: Props) {
  const loading = false;
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
  return (
    <Box>
      <Card
        direction={{ base: "column", md: "row", sm: "column" }}
        overflow="hidden"
        variant="outline"
        mb={10}
        as="a"
        href={data.articleLink}
        target="_blank"
        _hover={{
          filter: "brightness(130%)",
          textDecoration: "underline",
        }}
      >
        <Skeleton width={"fit-content"} isLoaded={!loading}>
          <Image
            objectFit="contain"
            w={"100%"}
            height={"400px"}
            src={data.image2}
            alt="Caffe Latte"
          />
        </Skeleton>
        <Stack>
          <CardBody>
            <Skeleton width={"fit-content"} isLoaded={!loading}>
              <Heading size="md" mt={20}>
                {data.title}
              </Heading>
            </Skeleton>

            <SkeletonText
              mt={2}
              noOfLines={4}
              spacing="4"
              skeletonHeight="2"
              isLoaded={!loading}
            >
              <Text py="2" mt={3}>
                {data.Description}
              </Text>
              <Flex mt={"auto"} alignItems={"center"} gap={2}>
                <Text fontWeight="400" fontSize="12px">
                  {data.time} hrs ago
                </Text>
                <Text fontWeight="500" whiteSpace={"nowrap"}>
                  | {data.source} |
                </Text>
                <Text fontWeight="400" fontSize="12px">
                  {data.category.toLocaleUpperCase()}
                </Text>
              </Flex>
            </SkeletonText>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}

export default Card5;

import {
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Post } from "../../utils/types";

const IMAGE =
  "https://ichef.bbci.co.uk/news/800/cpsprodpb/FDED/production/_133050056_2023-11-01t134749z_176733597_rc2n34al49of_rtrmadp_3_israel-palestinians-lebanon-village-1.jpg.webp";

interface Props {
  data?: Post;
  isDefault?: boolean;
}

export default function Card2a({ data, isDefault }: Props) {
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
    <Center
      as="a"
      href={data.articleLink}
      target="_black"
      _hover={{ filter: "brightness(120%)", textDecoration: "underline" }}
    >
      <Box role={"group"} w={"full"}>
        <Box>
          <Image
            height={"100%"}
            width={"100%"}
            objectFit={"cover"}
            src={isDefault ? IMAGE : data.image2}
            alt="#"
          />
        </Box>
        <Stack
          align={"start"}
          textAlign={"start"}
          gap={4}
          mt={{ base: 0, lg: 4 }}
        >
          <Heading fontSize={"3xl"} fontWeight={700}>
            {data.title}
          </Heading>
          <Stack direction={"row"} align={"start"}>
            <Text fontSize={"15px"}>{data.Description}</Text>
          </Stack>
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
        </Stack>
      </Box>
    </Center>
  );
}

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../../utils/authContext/authContext";
import { useData } from "../../utils/dataContext/dataContext";
import { IArticle } from "../../utils/dataContext/types";
import { IUserPatch } from "../../utils/authContext/types";
import { globalVariables } from "../../utils/globalVariables";

const IMAGE =
  "https://ichef.bbci.co.uk/news/800/cpsprodpb/FDED/production/_133050056_2023-11-01t134749z_176733597_rc2n34al49of_rtrmadp_3_israel-palestinians-lebanon-village-1.jpg.webp";

interface Props {
  data: IArticle;
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

  const {
    patchUser,
    authState: { user },
  } = useAuth();
  const { dataLoading } = useData();
  const handleClick = async () => {
    if (user) {
      let history = user.history?.filter((item) => item.id !== data.id) || [];
      const id = user.id;
      history = [...history, data];
      const patchObj: IUserPatch = { id, history };
      await patchUser(patchObj);
    }
    window.open(data.articleLink, "_blank");
  };

  return (
    <Center
      _hover={{
        filter: "brightness(120%)",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Box role={"group"} w={"full"}>
        <Box>
          <Skeleton
            width="full"
            isLoaded={!dataLoading}
            fadeDuration={globalVariables.skeletionFade}
            minH="220px"
          >
            <Image
              height={"100%"}
              width={"100%"}
              objectFit={"cover"}
              src={isDefault ? IMAGE : data.image2}
              alt="#"
            />
          </Skeleton>
        </Box>
        <Stack
          align={"start"}
          textAlign={"start"}
          gap={4}
          mt={{ base: 0, lg: 4 }}
        >
          <SkeletonText
            isLoaded={!dataLoading}
            skeletonHeight="10"
            noOfLines={2}
            fadeDuration={globalVariables.skeletionFade}
          >
            <Heading fontSize={"3xl"} fontWeight={700}>
              {data.title}
            </Heading>
          </SkeletonText>
          <Stack direction={"row"} align={"start"}>
            <SkeletonText
              isLoaded={!dataLoading}
              skeletonHeight="5"
              noOfLines={2}
              fadeDuration={globalVariables.skeletionFade}
            >
              <Text fontSize={"15px"}>{data.Description}</Text>
            </SkeletonText>
          </Stack>
          <SkeletonText
            isLoaded={!dataLoading}
            skeletonHeight="4"
            noOfLines={1}
            fadeDuration={globalVariables.skeletionFade}
          >
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
        </Stack>
      </Box>
    </Center>
  );
}

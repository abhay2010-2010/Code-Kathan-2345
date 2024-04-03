// Card1.tsx
import {
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/authContext/authContext";
import { IUserPatch } from "../../utils/authContext/types";
import { useData } from "../../utils/dataContext/dataContext";
import { IArticle } from "../../utils/dataContext/types";
import { globalVariables } from "../../utils/globalVariables";

interface Props {
  data: IArticle;
}

const Card1 = ({ data }: Props) => {
  const {
    patchUser,
    authState: { user },
  } = useAuth();

  const [imgLoaded, setImgLoaded] = useState(false);
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

  useEffect(() => {}, []);

  return (
    <Stack
      height={"full"}
      _hover={{
        filter: "brightness(130%)",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <VStack className="pt-serif-regular" align={"start"} height={"full"}>
        <Skeleton
          width="full"
          isLoaded={!dataLoading && imgLoaded}
          fadeDuration={globalVariables.skeletionFade}
          minH="220px"
        >
          <Image
            width="full"
            src={data.image2}
            alt="Image"
            objectFit={"contain"}
            objectPosition={"center"}
            onLoad={() => setImgLoaded(true)}
          />
        </Skeleton>
        <SkeletonText
          isLoaded={!dataLoading}
          skeletonHeight="9"
          noOfLines={1}
          fadeDuration={globalVariables.skeletionFade}
        >
          <Heading mt={1} noOfLines={1} size="md" fontWeight="700">
            {data.title}
          </Heading>
        </SkeletonText>
        <SkeletonText
          isLoaded={!dataLoading}
          skeletonHeight="4"
          noOfLines={3}
          fadeDuration={globalVariables.skeletionFade}
        >
          <Text mt={1} noOfLines={3} fontWeight="400" fontSize="15px">
            {data.Description}
          </Text>
        </SkeletonText>
        <SkeletonText
          isLoaded={!dataLoading}
          skeletonHeight="3"
          noOfLines={1}
          fadeDuration={globalVariables.skeletionFade}
        >
          <Flex mt={"auto"} alignItems={"center"} gap={2} whiteSpace={"nowrap"}>
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
      </VStack>
    </Stack>
  );
};

export default Card1;

import { Flex, Heading, SkeletonText, Text } from "@chakra-ui/react";

import { useAuth } from "../../utils/authContext/authContext";
import { IUserPatch } from "../../utils/authContext/types";
import { Post } from "../../utils/types";
import { useData } from "../../utils/dataContext/dataContext";

interface Props {
  data: Post;
}
export const Card3a = ({ data }: Props) => {
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
      console.log(patchObj);
      await patchUser(patchObj);
      window.open(data.articleLink, "_blank");
    }
  };

  return (
    <Flex
      gap={2}
      height={"full"}
      direction={"column"}
      justify={"space-between"}
      _hover={{
        filter: "brightness(130%)",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <SkeletonText isLoaded={!dataLoading} skeletonHeight="7" noOfLines={2}>
        <Heading size="md" fontWeight="700" noOfLines={2}>
          {data.title}
        </Heading>
      </SkeletonText>
      <SkeletonText isLoaded={!dataLoading} skeletonHeight="3" noOfLines={4}>
        <Text fontSize="15px" noOfLines={3}>
          {data.Description}
        </Text>
      </SkeletonText>
      <Flex>
        <SkeletonText isLoaded={!dataLoading} skeletonHeight="2" noOfLines={1}>
          <Text display="flex" gap={2} fontSize="12px">
            {data.time} hrs ago | {data.source}
          </Text>
        </SkeletonText>
      </Flex>
    </Flex>
  );
};

import {
  Card,
  Divider,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useAuth } from "../../utils/authContext/authContext";
import { IUserPatch } from "../../utils/authContext/types";
import { useData } from "../../utils/dataContext/dataContext";
import { globalVariables } from "../../utils/globalVariables";
import { Post } from "../../utils/types";

interface Props {
  data: Post;
}

const CardCrousal = ({ data }: Props) => {
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
  return (
    <Card
      maxW="sm"
      m={1}
      backgroundColor={"#141618"}
      _hover={{
        filter: "brightness(130%)",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={handleClick}
      color={"white"}
    >
      <Skeleton
        width="full"
        isLoaded={!dataLoading && imgLoaded}
        fadeDuration={globalVariables.skeletionFade}
        minH="160px"
      >
        <Image
          objectFit="contain"
          src={data?.image2}
          alt={data?.title}
          height={"160px"}
          onLoad={() => setImgLoaded(true)}
        />
        <FaPlay
          style={{
            transform: "translate(0px,-30px)",
            fontSize: "1.9rem",
            backgroundColor: "black",
            padding: "2px",
          }}
        />
      </Skeleton>
      <Stack mt="6" spacing="3" m={1}>
        <SkeletonText
          isLoaded={!dataLoading}
          skeletonHeight="9"
          noOfLines={1}
          fadeDuration={globalVariables.skeletionFade}
        >
          <Text size="md" fontWeight={"500"} fontSize={"24px"} noOfLines={1}>
            {data?.title}
          </Text>
        </SkeletonText>
        <SkeletonText
          isLoaded={!dataLoading}
          skeletonHeight="4"
          noOfLines={3}
          fadeDuration={globalVariables.skeletionFade}
        >
          <Text noOfLines={3}>{data?.Description}</Text>
        </SkeletonText>
        <SkeletonText
          mt={2}
          noOfLines={1}
          spacing="3"
          isLoaded={!dataLoading}
          skeletonHeight="4"
          fadeDuration={globalVariables.skeletionFade}
        >
          <Text>
            {data?.time} hrs ago | {data?.category}
          </Text>
        </SkeletonText>
      </Stack>
      <Divider />
    </Card>
  );
};

export default CardCrousal;

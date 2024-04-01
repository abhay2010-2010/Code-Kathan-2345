import {
  Card,
  Divider,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { Post } from "../../utils/types";

interface Props {
  data: Post;
  isLoaded: boolean;
}

const CardCrousal = ({ data, isLoaded }: Props) => {
  return (
    <Card
      maxW="sm"
      m={1}
      backgroundColor={"#141618"}
      _hover={{ textDecoration: "underline" }}
      color={"white"}
      as={"a"}
      href={data?.articleLink}
      target="_blank"
    >
      <Skeleton isLoaded={isLoaded}>
        <Image
          objectFit="contain"
          src={data?.image2}
          alt={data?.title}
          height={"160px"}
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
        <Skeleton
          width={"fit-content"}
          height={"30px"}
          mt={"2"}
          isLoaded={isLoaded}
        >
          <Text size="md" fontWeight={"500"} fontSize={"24px"} noOfLines={1}>
            {data?.title}
          </Text>
        </Skeleton>
        <SkeletonText
          mt={2}
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          isLoaded={isLoaded}
        >
          <Text noOfLines={3}>{data?.Description}</Text>
        </SkeletonText>
        <SkeletonText
          mt={2}
          noOfLines={1}
          spacing="3"
          skeletonHeight="3"
          isLoaded={isLoaded}
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

import {
  Card,
  Divider,
  Flex,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { Post } from "../../utils/types";

const CardCrousal = ({ isLoaded, data }: { isLoaded: boolean; data: Post }) => {
  return (
    <Card
      maxW="sm"
      m={1}
      backgroundColor={"#141618"}
      as="a"
      href={data.articleLink}
      color={"white"}
      _hover={{ filter: "brightness(120%)", textDecoration: "underline" }}
    >
      <Skeleton isLoaded={isLoaded}>
        <Image
          objectFit="cover"
          src={data.image2}
          alt="Green double couch with wooden legs"
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
          <Text size="md" fontWeight={"500"} fontSize={"18px"}>
            {data.title.split(/\s+/).splice(0, 5).join(" ")}
          </Text>
        </Skeleton>
        <SkeletonText
          mt={2}
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          isLoaded={isLoaded}
        >
          <Text>{data.Description}</Text>
        </SkeletonText>
        <SkeletonText
          mt={2}
          noOfLines={1}
          spacing="3"
          skeletonHeight="3"
          isLoaded={isLoaded}
        >
          <Flex>
            <Text
              fontWeight="400"
              fontSize="14px"
              display="flex"
              gap={2}
              mt={4}
            >
              {data.time} hrs ago{" "}
              <Text fontWeight="600">| {data.source} |</Text>{" "}
              {data.category.toLocaleUpperCase()}
            </Text>
          </Flex>
        </SkeletonText>
      </Stack>
      <Divider />
    </Card>
  );
};

export default CardCrousal;

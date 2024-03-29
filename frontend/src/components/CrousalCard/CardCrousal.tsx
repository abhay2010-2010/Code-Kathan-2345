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

const CardCrousal = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <Card
      maxW="sm"
      m={1}
      backgroundColor={"#141618"}
      _hover={{ textDecoration: "underline" }}
      color={"white"}
    >
      <Skeleton isLoaded={isLoaded}>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
          <Text size="md" fontWeight={"500"} fontSize={"24px"}>
            Living room Sofa
          </Text>
        </Skeleton>
        <SkeletonText
          mt={2}
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          isLoaded={isLoaded}
        >
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces.
          </Text>
        </SkeletonText>
        <SkeletonText
          mt={2}
          noOfLines={1}
          spacing="3"
          skeletonHeight="3"
          isLoaded={isLoaded}
        >
          <Text>12 hrs ago | Culture & Experiences</Text>
        </SkeletonText>
      </Stack>
      <Divider />
    </Card>
  );
};

export default CardCrousal;

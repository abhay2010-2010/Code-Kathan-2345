// Card1.tsx
import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";


const Card1 = () => {

  let myObj = {
    title: "Driver recover bodies from Baltimore bridge",
    description:
      "Searches continue for four other people missing after two bodies are found in submerged truck",
    image:
      "https://ichef.bbci.co.uk/news/1536/cpsprodpb/7231/production/_133033292_gettyimages-2107856156.jpg",

    video: "",
    time: "5hrs ago",
  };

  return (



    <Stack mb={10}>
      <Box width="90%" height="auto" >
       <Skeleton width={"fit-content"}> <Image width="300px" src={myObj.image} alt="Image" /></Skeleton>
       <Skeleton width={"fit-content"}><Heading mt={1} size="md" fontWeight="500" fontSize="19px">{myObj.title}</Heading></Skeleton>
       <SkeletonText
          mt={2}
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
          
        >
          <Text mt={2} fontWeight="400" fontSize="15px">
          {myObj.description}
        </Text>

        <Flex>
          <Text fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>
            5 hrs ago | <Text fontWeight="600" color={"black"}>NEWS</Text> Business
          </Text>

        </Flex>
        </SkeletonText>
        <hr />
        
      </Box>
    </Stack>

  )
};

export default Card1;

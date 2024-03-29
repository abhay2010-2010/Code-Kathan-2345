// Card1.tsx
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Skeleton,
    SkeletonText,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const Card1 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    let myObj = {
      title: "Driver recover bodies from Baltimore bridge",
      description:
        "Searches continue for four other people missing after two bodies are found in submerged truck",
      image:
        "https://ichef.bbci.co.uk/news/1536/cpsprodpb/7231/production/_133033292_gettyimages-2107856156.jpg",
      
         video: "",
        time: "5hrs ago",
    };
  
    return isLoaded ? (
      <>
        <Box padding="6" boxShadow="lg" bg="white" height="360px" width="330px" >
          <Skeleton height="150px" width="300px" />
          <SkeletonText  mt='4' noOfLines={3} spacing='1' skeletonHeight='4' width="300px" />
          <Box textAlign="center">
            <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
          </Box>
        </Box>
      </>
    ) : (
  
     
       <Stack>
        <Box width="300px" height="auto" className="pt-serif-regular">
          <Image width="300px" src={myObj.image} alt="Image" />
          <Heading mt={1} size="md" fontWeight="500" fontSize="19px">{myObj.title}</Heading>
          <Text mt={2} fontWeight="400" fontSize="15px">
              {myObj.description}
            </Text>
  
            <Flex>
            <Text fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>
              5 hrs ago | <Text fontWeight="600" color={"black"}>NEWS</Text> Business
            </Text>
            
          </Flex>
          <hr />
          <Box textAlign="center">
          <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
        </Box>
        </Box>
      </Stack>
    
    );
  };
  
  export default Card1;
  
import { Heading, Image, Text, Flex, Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import { useState } from 'react';
function SearchCard({data}:any) {
const [isLoaded]=useState(false);

    return (
        <div>
   {data.map((el:any)=>{
    return  <Box mt={10} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>

    <Box>
        <SkeletonText
            mt={2}
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
isLoaded={!isLoaded} 
        >
            <Text w={"100px"} fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>{el.time} Hrs ago
            </Text>
        </SkeletonText>
    </Box>
    <Box w={"40%"}>
        <Skeleton width={"fit-content"} isLoaded={!isLoaded}>
            <Heading size='md' textDecoration={"underline"} mt={10}>{el.title}
            </Heading>
        </Skeleton>

        <SkeletonText
            mt={2}
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            isLoaded={!isLoaded}
        >
            <Text mt={4}>
                {el.Description}
            </Text>
            <Flex>
                <Text fontWeight="400" fontSize="14px" display="flex" mt={4} >
                    <Text fontWeight="600" color={"black"} px={3}>NEWS </Text> Business
                </Text>

            </Flex>
        </SkeletonText>
    </Box>

    <Box w={"25%"} >
        <Skeleton width={"fit-content"} isLoaded={!isLoaded}>
            <Image
                objectFit='cover'

                src={el.image2}
                alt='Caffe Latte'
            />
        </Skeleton>
    </Box>
</Box>
   })}
           

        </div>
    )
}

export default SearchCard;

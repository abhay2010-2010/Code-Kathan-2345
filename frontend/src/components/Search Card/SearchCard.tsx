import { Box, Flex, Heading, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Post } from '../../utils/types';

interface Props {
    data?: Post;
}
function SearchCard({ data }: Props) {
    const [isLoaded] = useState(false);
    !data &&
        (data = {
            id: 27,
            title: "IMF Approves $8 Billion Egypt Loan as Global Bailout Takes Shape",
            Description: "The International Monetary Fund approved a $5 billion augmentation to its loan program for Egypt, part of a wave of global aid pledged to bolster a ...",
            source: "Bloomberg",
            time: 2,
            articleLink: "https://www.bloomberg.com/news/articles/2024-03-29/imf-approves-8-billion-egypt-loan-as-global-bailout-takes-shape",
            image1: "https://ichef.bbci.co.uk/news/480/cpsprodpb/11C12/production/_133022727_p0hm1njp.jpg.webp",
            image2: "https://i.zedtranslate.com/newsimage/CC8iK0NnNW1WamRVY25VMGMxWlJkMVV3VFJERUF4aW1CU2dLTWdhZFZwSXFKZ2c",
            category: "world",
            clicks: 212
        });
    return (
        <div>

            <Box mt={10} display={{ base: "block", md: "flex", }} alignItems={"center"} justifyContent={"space-around"}>

                <Box w={{ base: "90%", md: "40%" }}>
                    <Skeleton width={"fit-content"} isLoaded={!isLoaded}>
                        <Heading size='md' 
                       
                        mt={10}
                        as="a"
                        href={data.articleLink}
                        target="_blank"
                        _hover={{
                            filter: "brightness(130%)",
                            textDecoration: "underline",
                        }}
                        >
                            {data.title}
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
                            {data.Description}
                        </Text>
                        <Flex>
                            <Text fontWeight="400" fontSize="14px" display="flex" mt={4} >
                                <Text fontWeight="600" color={"black"} px={3}>NEWS </Text> Business
                            </Text>

                        </Flex>
                    </SkeletonText>
                    <SkeletonText
                        mt={2}
                        noOfLines={1}
                        spacing="4"
                        skeletonHeight="2"
                        isLoaded={!isLoaded}
                    >
                        <Text w={"100px"} fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>2 Hrs ago
                        </Text>
                    </SkeletonText>
                </Box>

                <Box w={{ base: "65%", md: "25%" }} >
                    <Skeleton width={"fit-content"} isLoaded={!isLoaded}>
                        <Image
                            objectFit='cover'

                            src={data.image1}
                            alt='Caffe Latte'
                        />
                    </Skeleton>
                </Box>
            </Box>

        </div>
    )
}

export default SearchCard;

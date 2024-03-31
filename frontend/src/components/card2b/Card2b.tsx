
'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'


const IMAGE =
  'data:image/jpeg;base64,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'

export default function Card2b() {
  return (
    <Center >
      <Box
        role={'group'}

        maxW={'430px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}


        pos={'relative'}
        zIndex={1}

      >
        <Box



        >
          <Skeleton width={"fit-content"}> <Image

            height={"60%"}
            width={"100%"}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"

          />
          </Skeleton>

        </Box>
        <Stack align={'start'} textAlign={"start"} >
          <Skeleton
            width={"fit-content"}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textDecoration={"underline"} >
              Crypto King' Sam Bankman-Fried faces lengthy jail term
            </Heading>
          </Skeleton>

          <SkeletonText
            mt={2}
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"

          >
            <Stack direction={'row'} align={'starta'} >
              <Text color={'gray.500'} fontSize={'sm'}>
                The former billionaire is about to find out his punishment for massive fraud and money laundering.
              </Text>

            </Stack>
         
          <Text>
            5 hours ago | <span style={{ color: 'darkblack', fontWeight: "bold" }} >LIVE </span>| World
          </Text>
          </SkeletonText>
        </Stack>

      </Box>
      {/* 5 hours ago | <span style={{ color: 'darkblack' } fontWeight={"bold"} } >LIVE</span> World */}


    </Center >
  )
}
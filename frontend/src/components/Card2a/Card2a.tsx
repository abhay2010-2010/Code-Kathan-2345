
'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'


const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export default function Card2a() {
  return (
    <Center py={12} >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        width={300}
      >
        <Box>
          <Image
            rounded={'lg'}
            height={180}
            width={"100%"}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"

          />
        </Box>
        <Stack align={'start'} textAlign={"start"} mt={-25}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textDecoration={"underline"} >
            <span style={{ color: 'red' }}>LIVE</span> 'Crypto King' Sam Bankman-Fried faces lengthy jail term
          </Heading>
          <Stack direction={'row'} align={'starta'} mt={-35}>
            <Text color={'gray.500'} fontSize={'sm'}>
              The former billionaire is about to find out his punishment for massive fraud and money laundering.
            </Text>
          </Stack>
        </Stack>
      </Box>


    </Center>
  )
}
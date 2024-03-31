import { Card, CardBody,  Image, Stack, Heading, Text } from '@chakra-ui/react'

function Card6() {
  return (
    <Card >
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
       
      />
      <Stack textAlign={"center"} mt='6' spacing='3'>
        <Heading size='xl' _hover={{textDecoration:"underline"}}>The insects behind cook going forward</Heading>
        <Text w={"90%"} textAlign={"center"}>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.is the best over in the world for people who want to be able to create something   
          that looks and feels great.
        </Text>
       
      </Stack>
    </CardBody>
    

  </Card>
  )
}

export default Card6
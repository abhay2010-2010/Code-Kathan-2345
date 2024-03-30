import React from 'react'
import { Card, Button, CardBody, CardFooter, Stack, Heading ,Image,Text} from '@chakra-ui/react'
function Card5() {
  return (
    <div>
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  ml={10}
>
  <Image
    objectFit='cover'
    w={"800px"} h={"400px"}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack ml={20}>
    <CardBody >
      <Heading size='md' textDecoration={"underline"} mt={20}>Ey Exc : Nuradiberse Talemnt benifit everyon</Heading>

      <Text py='2' mt={3}>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.hjakxkgdc.klihsoifcuohihnsdfcfvv.fijkjljijid.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid'mt={"-40"}>
        See More
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>
  )
}

export default Card5

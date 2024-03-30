import { Card, CardBody, Stack, Heading, Image, Text, Flex, Skeleton, SkeletonText } from '@chakra-ui/react'
function Card5b() {
  return (
    <div>
      <Card
        direction={{ base: 'column', md: "row", sm: 'column' }}
        overflow='hidden'
        variant='outline'
        mb={10}
      >
        <Stack >
          <CardBody >
            <Skeleton width={"fit-content"}><Heading size='md' textDecoration={"underline"} mt={20}>Ey Exc : Nuradiberse Talemnt benifit everyon</Heading></Skeleton>

            <SkeletonText
              mt={2}
              noOfLines={4}
              spacing="4"
              skeletonHeight="2"

            >
              <Text py='2' mt={3}>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.hjakxkgdc.klihsoifcuohihnsdfcfvv.fijkjljijid.
              </Text>
              <Flex>
                <Text fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>
                  5 hrs ago | <Text fontWeight="600" color={"black"}>NEWS</Text> Business
                </Text>

              </Flex>
            </SkeletonText>
          </CardBody>


        </Stack>
        <Skeleton width={"fit-content"}>
          <Image
            objectFit='cover'
            w={"100%"} h={"400px"}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />
        </Skeleton>
      </Card>
    </div>
  )
}

export default Card5b;

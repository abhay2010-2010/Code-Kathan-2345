import { Card, Heading, Image, Stack } from '@chakra-ui/react'
import { Post } from '../../utils/types';

interface Props {
    data?: Post;
  }
function Card6a({data}:Props) {
    return (
        <Card p={1}>

            <Image
                src={data?.image1}
                alt='Green double couch with wooden legs'

            />
            <Stack textAlign={"start"} mt='3' marginBottom={10}>
                <Heading size='md' _hover={{ textDecoration: "underline" }}>The insects behind cook going forward</Heading>
            </Stack >



        </Card>
    )
}

export default Card6a

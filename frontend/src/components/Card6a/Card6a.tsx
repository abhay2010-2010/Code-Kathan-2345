import { Card, CardBody, Image, Stack, Heading, Text, textDecoration } from '@chakra-ui/react'


function Card6a() {
    return (
        <Card p={1}>

            <Image
                src='https://ichef.bbci.co.uk/news/480/cpsprodpb/182DF/production/_132993099_tj_gullinflight.jpg.webp'
                alt='Green double couch with wooden legs'

            />
            <Stack textAlign={"start"} mt='3' marginBottom={10}>
                <Heading size='md' _hover={{ textDecoration: "underline" }}>The insects behind cook going forward</Heading>
            </Stack >



        </Card>
    )
}

export default Card6a

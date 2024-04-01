import { Card, Heading, Image, Stack } from '@chakra-ui/react'
import { Post } from '../../utils/types';

interface Props {
    data?: Post;
  }
function Card6a({data}:Props) {
    !data &&
    (data = {
      id: 1,
      title: "daniel Kahneman, Nobel Prize-winning psychologist, 1934-2024",
      Description:
        'Three people have been released, but the situation "is not over yet", police in the city of Ede say.',
      source: "BBC.com",
      time: 4,
      articleLink: "https://www.bbc.com/news/world-europe-68698022",
      image1:
        "https://ichef.bbci.co.uk/images/ic/1376x774/p0hm0sky.jpg.webp",
      image2:
        "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
      category: "world",
      clicks: 283,
    });
    return (
        <Card p={1}>

            <Image
                src={data.image1}
                alt='Green double couch with wooden legs'

            />
            <Stack textAlign={"start"} mt='3' marginBottom={10}>
                <Heading size='md' _hover={{ textDecoration: "underline" }}  as="a"
      href={data.articleLink}
      target="_blank">
                  {data.title}
                </Heading>
            </Stack >



        </Card>
    )
}

export default Card6a

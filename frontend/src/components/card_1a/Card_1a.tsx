import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../utils/authContext/authContext";
import { IUserPatch } from "../../utils/authContext/types";
import { Post } from "../../utils/types";

interface Props {
  data: Post;
}

export const Card1a = ({ data }: Props) => {
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
        "https://news.google.com/api/attachments/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs=-w280-h168-p-df-rw",
      image2:
        "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
      category: "world",
      clicks: 283,
    });
  const {
    patchUser,
    authState: { user },
  } = useAuth();

  const handleClick = async () => {
    if (user) {
      let history = user.history?.filter((item) => item.id !== data.id) || [];
      const id = user.id;
      history = [...history, data];
      const patchObj: IUserPatch = { id, history };
      console.log(patchObj);
      await patchUser(patchObj);
      window.open(data.articleLink, "_blank");
    }
  };
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box>
      {isLoaded ? (
        <Box>
          <Skeleton height="430px" width="80%" />

          <Box textAlign="center">
            <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
          </Box>
        </Box>
      ) : (
        <Stack
          onClick={handleClick}
          _hover={{ filter: "brightness(110%)", textDecoration: "underline" }}
        >
          <Flex
            backgroundImage={data.image2}
            backgroundPosition="center"
            backgroundSize="cover"
            width="100%"
            height={{ base: "auto", md: "60vh" }}
            pt={{ base: 300, md: 238 }}
          >
            <Card
              width={{ base: "100%", md: "550px" }}
              height="200px"
              borderRadius={0}
              p={7}
              boxShadow={1}

              // bg="rgba(255,255,255,0.5)"
            >
              <Heading as="h4" size="lg" className="pt-serif-regular">
                {data.title}
              </Heading>
              <Text mt={3} fontSize="14px" className="pt-serif-regular">
                {" "}
                {data.Description}{" "}
              </Text>
            </Card>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

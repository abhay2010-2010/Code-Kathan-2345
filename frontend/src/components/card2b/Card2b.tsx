"use client";

import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Post } from "../../utils/types";

interface Props {
  data: Post;
}

export default function Card2b({ data }: Props) {
  return (
    <Box
      as="a"
      href={data.artilcleLink}
      target="_blank"
      _hover={{ filter: "brightness(110%)", textDecoration: "underline" }}
    >
      <Flex w={"full"} h={"full"} direction="column">
        <Image
          width={"100%"}
          objectFit={"contain"}
          objectPosition={"center"}
          src={data.image2}
          alt="#"
          flex={1}
        />
        <Stack textAlign={"start"} flex={1}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500} mt={4}>
            {data.title}
          </Heading>
          <Stack direction={"row"} align={"start"}>
            <Text fontSize={"sm"}>{data.Description}</Text>
          </Stack>
          <Text mt={"auto"}>
            {data.time} hours ago{" "}
            <span style={{ color: "darkblack", fontWeight: "bold" }}>
              | {data.source} |{" "}
            </span>
            {data.category.toLocaleUpperCase()}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

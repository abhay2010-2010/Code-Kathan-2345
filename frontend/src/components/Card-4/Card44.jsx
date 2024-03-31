import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";

const Card44 = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Skeleton isLoaded={!toggle}>
        <Center>
          <Box p={4} display={{ md: "flex" }} w={"90%"}>
            <Box
              mt={{ base: 0, md: 0 }}
              ml={{ md: 0 }}
              bg={"black"}
              alignContent={"center"}
            >
              <Link
                mt={1}
                display="block"
                lineHeight="normal"
                href="#"
                color={"rgb(230, 232, 234)"}
                fontSize={"25"}
                fontWeight={"500"}
                textAlign={{ base: "initial", md: "center" }}
              >
                Why is Finland the happiest country in the world?
              </Link>
              <Text
                mt={2}
                color="whitesmoke"
                textAlign={{ base: "initial", md: "center" }}
              >
                The Finns have been named the happiest people seven years
                running,How do they do it?
              </Text>
              <Button
                bg={"black"}
                color={"white"}
                //   colorScheme={"black"}
              >
                See more
              </Button>
            </Box>

            <Box flexShrink={0}>
              <Image
                width={{ md: 850 }}
                src="https://ichef.bbci.co.uk/images/ic/1376x774/p0hmcz0k.jpg.webp"
                alt="Woman paying for a purchase"
              />
            </Box>
          </Box>{" "}
        </Center>
      </Skeleton>
      <Button onClick={handleClick}>Toggle</Button>
    </>
  );
};

export default Card44;

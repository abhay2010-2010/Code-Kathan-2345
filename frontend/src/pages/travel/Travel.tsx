import { Box, Button, Divider, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import postData from "../../../../backend/db.json";
import Card2a from "../../components/Card2a/Card2a";
import { Card1a } from "../../components/card_1a/Card_1a";
import { Post } from "../../utils/types";

import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Card1b } from "../../components/Card1b/Card1b";
import Card5b from "../../components/Card5b/Card5b";
import Card1 from "../../components/Card_1/Card1";
import Carousel from "../../components/CrousalCard/Crousal";
import Footer from "../../components/Footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";

export const Travel = () => {
  const [isVisible, setIsVisible] = useState(false);
  let data: Post[] = postData.posts
    .filter((post) => post.category === "Travell")
    .slice(1, 30);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <Navbar />
      <Box
        px={[2, 4, 6, 8]}
      >
        {/* 1st */}
        <Heading bg={"yellow"}>
          Travel
        </Heading>
        <br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />
        <Card1a data={data[1]} />
        {/* 2nd */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="30px" mt="40px">
          <Card2a data={data[2]} />
          <Card2a data={data[3]} />
        </SimpleGrid>
        <br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />
        {/* 3rd */}
        <Box>
          <Heading fontSize="24px" fontWeight="600">
            In the news
          </Heading>
          <br />
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gap={10}
          >
            <Card1b data={data[4]} />
            <Card1b data={data[5]} />
            <Card1b data={data[6]} />
            <Card1b data={data[7]} />
            <Card1b data={data[8]} />
          </Grid>
        </Box>
        <br /> <br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />

        {/* 4th */}
        <Box>
          <Heading fontSize="24px" fontWeight="600">
            Adventure
          </Heading>
          <br />
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)"

            ]}
            gap={10}
          >
            <Card1 data={data[9]} />
            <Card1 data={data[10]} />
            <Card1 data={data[11]} />
            <Card1 data={data[13]} />
            <Card1 data={data[12]} />
            <Card1 data={data[14]} />
          </Grid>
        </Box>
        <br /> <br />
        <Divider backgroundColor={"black"} h="1px" />
        <br />
        <Box>
          <Heading fontSize="24px" fontWeight="600">
            In Picture
          </Heading> <br />
          <Card1a data={data[15]} />
        </Box>
        <br /><br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />

        {/* 5th */}
        <Box>
          <Heading fontSize="24px" fontWeight="600">
            The Specialist
          </Heading>
          <br />
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",

            ]}
            gap={10}
          >
            <Card1 data={data[16]} />
            <Card1 data={data[17]} />
            <Card1 data={data[18]} />
            <Card1 data={data[19]} />
            <Card1 data={data[20]} />
            <Card1 data={data[21]} />
            <Card1 data={data[22]} />
            <Card1 data={data[23]} />
          </Grid>
        </Box>
        <br /><br />
        {/* 6th */}
        <Box>
          <Carousel />
        </Box>

        {/* 7 */}
        <br /><br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />
        <Box>
          <Heading fontSize="24px" fontWeight="600">
            Green Gateways
          </Heading>
          <br />
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",


            ]}
            gap={10}
          >
            <Card1 data={data[24]} />
            <Card1 data={data[25]} />
            <Card1 data={data[26]} />
            <Card1 data={data[27]} />

          </Grid>
        </Box>
        {/* 8 */}
        <br /><br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />
        <Box>
          <Heading fontSize="24px" fontWeight="600">
            World's Table
          </Heading>
          <br />
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",

            ]}
            gap={10}
          >
            <Card1 data={data[27]} />
            <Card1 data={data[28]} />
            <Card1 data={data[29]} />
            <Card1 data={data[30]} />

          </Grid>
        </Box>
        <br /><br />
        <Divider backgroundColor={"black"} h="2px" />
        <br />

        {/* 9 */}
        <Box>
          <Heading fontSize="24px" fontWeight="600">More on Travel</Heading> <br />
          <Card5b data={data[31]} />
          <Card5b data={data[32]} />
          <Card5b data={data[33]} />
          <Card5b data={data[34]} />
        </Box>
        {isVisible && (
          <Box
            onClick={scrollToTop}
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={3}
          >
            <Button
              w="50px"
              h="50px"
              variant="outline"
              bg={"black"}
              borderRadius={"50%"}
              _hover={{ bg: "black", w: "55px", h: "55px" }}
            >
              <ArrowUpIcon fontSize={"lg"} color={"white"} />
            </Button>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

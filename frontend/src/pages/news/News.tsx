import { Box, Button, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import postData from "../../../../backend/db.json";
import Card5 from "../../components/Card5/Card5";
import Card5b from "../../components/Card5b/Card5b";
import Card1 from "../../components/Card_1/Card1";
import Carousel from "../../components/CrousalCard/Crousal";
import SearchCard from "../../components/Search Card/SearchCard";
import TwoCards from "../../components/TwoCards/TwoCards";
import Card2b from "../../components/card2b/Card2b";
import { Post } from "../../utils/types";
import { Card3a } from "../../components/Card3a/Card3a";
import Footer from "../../components/Footer/Footer";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Navbar } from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const News = () => {
  let data: Post[] = postData.posts
    .filter((post) => post.category === "world")
    .slice(1, 30);

  let crousalData: Post[] = data.slice(1, 30);

  data.sort((a, b) => b.clicks - a.clicks);

  const [isVisible, setIsVisible] = useState(false);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.0 } }}
        exit={{ opacity: 0, transition: { duration: 0.0 } }}
      >
        <Box px={[2, 4, 6, 8]}>
          <Heading bg={"yellow"}>
            News
          </Heading>
          <br />
          <Divider backgroundColor={"black"} height={"2px"} />
          <br />
          <Box flexDirection={["column", "row"]} display={"flex"} gap={"2rem"}>
            <Card5b data={data[29]} />
            <Card1 data={data[0]} />
          </Box>
          <Grid
            justifyItems={"center"}
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(3,1fr)",
              "repeat(5,1fr)",
            ]}
            alignContent={"center"}
            marginX="auto"
            gap={2}
          >
            <Box>
              <Card1 data={data[1]} />
            </Box>
            <Box>
              <Card1 data={data[3]} />
            </Box>
            <Box>
              <Card1 data={data[4]} />
            </Box>
            <Box>
              <Card1 data={data[5]} />
            </Box>
            <Box>
              <Card1 data={data[6]} />
            </Box>
          </Grid>
          <Grid
            templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
            mb={20}
            mt={5}
            gap={2}
          >
            <Card3a data={data[7]} />
            <Card3a data={data[8]} />
            <Card3a data={data[9]} />
          </Grid>
        </Box>
        <Carousel data={crousalData.slice(11, 20)} />
        <Box p={5} mt={8}>
          <br />
          <Divider backgroundColor={"black"} height={"2px"} />
          <Text fontSize={"20px"}>Finance and Economy</Text>
          <br />
          <TwoCards />
          <Divider backgroundColor={"black"} height={"2px"} mb={5} />
          <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={2}>
            <Card2b data={data[10]} />
            <Card2b data={data[11]} />
            <Card2b data={data[12]} />
          </Grid>
        </Box>
        <Box mt={10} p={5}>
          <Divider backgroundColor={"black"} height={"2px"} />
          <Heading fontSize={"20px"} mt={5} mb={5}>
            Technology and Science
          </Heading>
          <TwoCards />
        </Box>
        <Box p={5}>
          <Divider backgroundColor={"black"} height={"2px"} />
          <Heading fontSize={"20px"} mt={5} mb={5}>
            Executive
          </Heading>
          <Card5 />
          <Divider backgroundColor={"black"} height={"2px"} mt={5} />
          <Heading fontSize={"20px"} mt={5} mb={5}>
            More news and features
          </Heading>
          <Grid
            justifyItems={"center"}
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
            ]}
            alignContent={"center"}
            marginX="auto"
            mt={10}
            gap={2}
          >
            <Box>
              <Card1 data={data[13]} />
            </Box>
            <Box>
              <Card1 data={data[14]} />
            </Box>
            <Box>
              <Card1 data={data[15]} />
            </Box>
            <Box>
              <Card1 data={data[16]} />
            </Box>
            <Box>
              <Card1 data={data[17]} />
            </Box>
            <Box>
              <Card1 data={data[18]} />
            </Box>
            <Box>
              <Card1 data={data[19]} />
            </Box>
            <Box>
              <Card1 data={data[20]} />
            </Box>
          </Grid>
        </Box>
        <Carousel data={crousalData.slice(0, 10)} />
        <Box p={10}>
          <Divider backgroundColor={"black"} height={"2px"} />
          <Heading fontSize={"20px"} mt={5} mb={5}>
            More in Buisness
          </Heading>
          <SearchCard data={data[21]}/>
          <SearchCard data={data[22]}/>
          <SearchCard data={data[23]}/>
          <SearchCard data={data[24]}/>
          <SearchCard data={data[25]}/>
          <SearchCard data={data[26]}/>
          <SearchCard data={data[27]}/>
          <SearchCard data={data[28]}/>
          <SearchCard data={data[29]}/>
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
      </motion.div>
      <Footer />
    </>
  );
};

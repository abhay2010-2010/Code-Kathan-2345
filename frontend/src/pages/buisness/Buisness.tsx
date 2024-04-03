import { Box, Button, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import postData from "../../../../backend/db.json";
import { Card3a } from "../../components/Card3a/Card3a";
import Card5 from "../../components/Card5/Card5";
import Card5b from "../../components/Card5b/Card5b";
import Card1 from "../../components/Card_1/Card1";
import Carousel from "../../components/CrousalCard/Crousal";
import SearchCard from "../../components/Search Card/SearchCard";
import TwoCards from "../../components/TwoCards/TwoCards";
import Card2b from "../../components/card2b/Card2b";
import { Post } from "../../utils/types";
import Footer from "../../components/Footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export const Buisness = () => {
  let data: Post[] = postData.posts.slice(0, 100);
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
      <Box p={5}>
        <Heading>Buisness</Heading>
        <br />
        <Divider backgroundColor={"black"} height={"2px"} />
        <br />

        <Box flexDirection={["column", "row"]} display={"flex"} gap={"2rem"}>

        <Box
          flexDirection={["column", "row", "row"]}
          display={"flex"}
          gap={"2rem"}
        >

          <Card5b />
          <Card1 data={data[0]} />
        </Box>

        <Grid
          justifyItems={"center"}
          templateColumns={["repeat(1,1fr)", "repeat(3,1fr)", "repeat(5,1fr)"]}
          alignContent={"center"}
          marginX="auto"
        >
          <Box>
            <Card1 data={data[1]}/>
          </Box>
          <Box>
            <Card1 data={data[2]}/>
          </Box>
          <Box>
            <Card1 data={data[3]}/>
          </Box>
          <Box>
            <Card1 data={data[4]}/>
          </Box>
          <Box>
            <Card1 data={data[5]}/>
          </Box>
        </Grid>

      <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} mb={20} mt={20} >
        <Card3a data={data[0]}/>
        <Card3a data={data[1]}/>
        <Card3a data={data[2]}/>
      </Grid>
    </Box>
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} mb={20}>
          <Card3a data={data[3]}/>
          <Card3a data={data[4]}/>
          <Card3a data={data[5]}/>
        </Grid>
      </Box>


      <Carousel />

      <Box p={5} mt={8}>
        <br />
        <Divider backgroundColor={"black"} height={"2px"} />
        <Text fontSize={"20px"}>Finance and Economy</Text>
        <br />
        <TwoCards />
        <Divider backgroundColor={"black"} height={"2px"} mb={5} />
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}>
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
          templateColumns={["repeat(1,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}
          alignContent={"center"}
          marginX="auto"
          mt={10}
        >
          <Box>
            <Card1 data={data[13]}/>
          </Box>
          <Box>
            <Card1 data={data[14]}/>
          </Box>
          <Box>
            <Card1 data={data[15]}/>
          </Box>
          <Box>
            <Card1 data={data[16]}/>
          </Box>
          <Box>
            <Card1 data={data[17]}/>
          </Box>
          <Box>
            <Card1 data={data[18]}/>
          </Box>
          <Box>
            <Card1 data={data[19]}/>
          </Box>
          <Box>
            <Card1 data={data[20]} />
          </Box>
        </Grid>
      </Box>

      <Carousel />

      <Box p={10}>
        <Divider backgroundColor={"black"} height={"2px"} />
        <Heading fontSize={"20px"} mt={5} mb={5}>
          More in Buisness
        </Heading>
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
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
      <Footer />
    </>
  );
};

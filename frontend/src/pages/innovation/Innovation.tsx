import { Box, Button, Divider, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card5 from "../../components/Card5/Card5";
import Carousel from "../../components/CrousalCard/Crousal";
import InnovationCard from "../../components/InnovationCard/InnovationCard";
import InnovationCard2 from "../../components/InnovationCard/InnovationCard2";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ArrowUpIcon } from "@chakra-ui/icons";
import postData from "../../../../backend/db.json";
import { Post } from "../../utils/types";
import Card1 from "../../components/Card_1/Card1";

export const Innovation = () => {
  const [isVisible, setIsVisible] = useState(false);
  let data: Post[] = postData.posts;
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
  const [isLoaded, setIsloading] = useState(false);
  const handleToggle = () => {
    setIsloading(!isLoaded);
  };

  return (
    <>
      <Navbar />
      <Box w={"84%"} marginX="auto">
        <Heading>Innovation</Heading>
        <br />
        <Divider height={"2px"} backgroundColor={"black"} />
        <br />

        <Grid
          gap={"6"}
          justifyItems={"center"}
          templateColumns={{ sm: "1fr", md: "repeat(4, 1fr)" }}
          alignContent={"center"}
          marginX="auto"
        >
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[30]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[31]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[32]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[33]} />
          </Box>
        </Grid>

        <br />
        <Divider height={"2px"} backgroundColor={"black"} />
        <Heading fontSize={"20"}>Science and health</Heading>
        <br />
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={"5"}>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} data={data[36]} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} data={data[37]} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} data={data[38]} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} data={data[39]} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} data={data[40]} />
          </Box>
        </Grid>
      </Box>
      <Carousel />
      <Button onClick={handleToggle}>Toggle</Button>
      <Box w={"84%"} marginX="auto">
        <Divider height={"2px"} backgroundColor={"black"} />
        <Heading fontSize={"25"}>Features</Heading>
        <br />
        <Card5 />
        <br />

        <Grid
          gap={"6"}
          justifyItems={"center"}
          templateColumns={{ sm: "1fr", md: "repeat(4, 1fr)" }}
          alignContent={"center"}
          marginX="auto"
        >
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[41]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[42]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[43]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[44]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[45]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[46]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[47]} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} data={data[48]} />
          </Box>
        </Grid>
        <Box>
          <Card1 />
        </Box>
      </Box>
      <Carousel />
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

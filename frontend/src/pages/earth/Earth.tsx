import { Box, Button, Divider, Flex, Grid, Heading } from "@chakra-ui/react";
import { Card3a } from "../../components/Card3a/Card3a";
import Card6 from "../../components/Card6/Card6";
import Card6a from "../../components/Card6a/Card6a";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Footer from "../../components/Footer/Footer";
import Card2b from "../../components/card2b/Card2b";
import Card5b from "../../components/Card5b/Card5b";
import Carousel from "../../components/CrousalCard/Crousal";
import Card5 from "../../components/Card5/Card5";
import SearchCard from "../../components/Search Card/SearchCard";


export const Earth = () => {
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
  return <>
    <Navbar />
    <Box p={{base:5,md:10}} display={{ base: "block", md: "flex" }}>
      <Card6 />
      <Box
        display="flex"
        flexDirection={{ base: "row", md: "column" }}
        w={{ base: "100%", md: "70%" }}
      >

        <Card6a />
        <Card6a />
        <Card6a />

      </Box>
    </Box>

    <Box p={{base:5,md:10}} display={{ base: "grid" }}>
      <Grid gap={4} templateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
        <Card3a />
        <Card3a />
        <Card3a />
        <Card3a />
        <Card3a />
      </Grid>
    </Box>
<Box p={{base:5,md:10}}>
<Divider  backgroundColor={"black"} height={"2px"} mt={5} />
    <Heading fontSize={"20px"} mt={5} mb={5} >Future Planet</Heading>

    <Flex p={{base:5,md:10}} display={{ base: "block", md: "flex", sm: "block" }} gap={3}>
      <Card2b />
      <Card2b />
    </Flex>
</Box>
  

    <Box p={{base:5,md:10}}>
      <Divider backgroundColor={"black"} height={"2px"} mt={5} />
      <Heading fontSize={"20px"} mt={5} mb={5} >World of wonder</Heading>
      <Card5b />
    </Box>

    <Carousel />

    <Box p={{base:5,md:10}}>
      <Divider backgroundColor={"black"} height={"2px"} mt={5} />
      <Heading fontSize={"20px"} mt={5} mb={5} >Editor's Pic</Heading>
      <Card5 />
    </Box>

    <Box p={{base:5,md:10}}>
    <Divider backgroundColor={"black"} height={"2px"} />
      <Heading  fontSize={"20px"} mt={5} mb={5} >More in Buisness</Heading>
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
  </>;
};
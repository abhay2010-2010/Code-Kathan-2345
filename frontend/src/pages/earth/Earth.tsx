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
import { Post } from "../../utils/types";
import postData from "../../../../backend/db.json";
import { useLocation } from "react-router-dom";

export const Earth = () => {
  const [isVisible, setIsVisible] = useState(false);
  let data: Post[] = postData.posts.slice(41, 80);

  console.log(data[41]);

  const { pathname } = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [pathname]);
  return (
    <>
      <Navbar />
      {/* 1st l1 */}
      <Box p={{ base: 5, md: 10 }} display={{ base: "block", md: "flex" }}>
        <Card6 data={data[41]} />
        <Box
          display="flex"
          flexDirection={{ base: "row", md: "column" }}
          w={{ base: "100%", md: "40%" }}
        >
          <Card6a data={data[42]} />
          <Card6a data={data[43]} />
          <Card6a data={data[44]} />
        </Box>
      </Box>
      {/* 2nd l */}

      <Box p={{ base: 5, md: 10 }} display={{ base: "grid" }}>
        <Grid
          gap={4}
          templateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        >
          <Card3a data={data[45]} />
          <Card3a data={data[46]} />
          <Card3a data={data[47]} />
          <Card3a data={data[48]} />
          <Card3a data={data[49]} />
        </Grid>
      </Box>

      {/* 3rd l */}

      <Box p={{ base: 5, md: 10 }}>
        <Divider backgroundColor={"black"} height={"2px"} mt={5} />
        <Heading fontSize={"20px"} mt={5} mb={5}>
          Future Planet
        </Heading>

        <Flex
          p={{ base: 5, md: 10 }}
          display={{ base: "block", md: "flex", sm: "block" }}
          gap={3}
        >
          <Card2b data={data[50]} />
          <Card2b data={data[51]} />
        </Flex>
      </Box>

      {/* 4th l */}

      <Box p={{ base: 5, md: 10 }}>
        <Divider backgroundColor={"black"} height={"2px"} mt={5} />
        <Heading fontSize={"20px"} mt={5} mb={5}>
          World of wonder
        </Heading>
        <Card5b data={data[52]} />
      </Box>

      {/* 5th l */}

      <Carousel />

      {/* 6th l */}

      <Box p={{ base: 5, md: 10 }}>
        <Divider backgroundColor={"black"} height={"2px"} mt={5} />
        <Heading fontSize={"20px"} mt={5} mb={5}>
          Editor's Pic
        </Heading>
        <Card5 data={data[53]} />
      </Box>

      {/* 7th l */}

      <Box p={{ base: 5, md: 10 }}>
        <Divider backgroundColor={"black"} height={"2px"} />
        <Heading fontSize={"20px"} mt={5} mb={5}>
          More in Buisness
        </Heading>
        <SearchCard data={data[54]} />
        <SearchCard data={data[55]} />
        <SearchCard data={data[56]} />
        <SearchCard data={data[57]} />
        <SearchCard data={data[58]} />
        <SearchCard data={data[59]} />
        <SearchCard data={data[60]} />
        <SearchCard data={data[61]} />
        <SearchCard data={data[62]} />
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

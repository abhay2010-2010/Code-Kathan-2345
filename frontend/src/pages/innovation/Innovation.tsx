import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import postData from "../../../../backend/db.json";
import Card5 from "../../components/Card5/Card5";
import Card1 from "../../components/Card_1/Card1";
import Carousel from "../../components/CrousalCard/Crousal";
import Footer from "../../components/Footer/Footer";
import InnovationCard from "../../components/InnovationCard/InnovationCard";
import InnovationCard2 from "../../components/InnovationCard/InnovationCard2";
import { Navbar } from "../../components/navbar/Navbar";
import { Post } from "../../utils/types";

export const Innovation = () => {
  const [isVisible, setIsVisible] = useState(false);
  let data: Post[] = postData.posts
    .filter((post) => post.category === "innovation")
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
  const [isLoaded] = useState(false);

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
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
              <InnovationCard isLoaded={isLoaded} data={data[1]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[2]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[3]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[4]} />
            </Box>
          </Grid>

          <br />
          <Divider height={"2px"} backgroundColor={"black"} />
          <Heading fontSize={"20"}>Science and health</Heading>
          <br />
          <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={"5"}>
            <Box>
              <InnovationCard2 isLoaded={isLoaded} data={data[5]} />
            </Box>
            <Box>
              <InnovationCard2 isLoaded={isLoaded} data={data[6]} />
            </Box>
            <Box>
              <InnovationCard2 isLoaded={isLoaded} data={data[7]} />
            </Box>
            <Box>
              <InnovationCard2 isLoaded={isLoaded} data={data[8]} />
            </Box>
            <Box>
              <InnovationCard2 isLoaded={isLoaded} data={data[9]} />
            </Box>
          </Grid>
        </Box>
        <Carousel />
        <Box w={"84%"} marginX="auto">
          <Divider height={"2px"} backgroundColor={"black"} />
          <Heading fontSize={"25"}>Features</Heading>
          <br />
          <Card5 data={data[10]} />
          <br />

          <Grid
            gap={"6"}
            justifyItems={"center"}
            templateColumns={{ sm: "1fr", md: "repeat(4, 1fr)" }}
            alignContent={"center"}
            marginX="auto"
          >
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[11]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[12]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[13]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[14]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[15]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[16]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[17]} />
            </Box>
            <Box>
              <InnovationCard isLoaded={isLoaded} data={data[18]} />
            </Box>
          </Grid>
          <Box>
            <Card1 data={data[19]} />
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
      </motion.div>
      <Footer />
    </>
  );
};

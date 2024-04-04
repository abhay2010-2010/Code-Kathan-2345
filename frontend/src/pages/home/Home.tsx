import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Card2a from "../../components/Card2a/Card2a";
import { Card3a } from "../../components/Card3a/Card3a";
import { Card3b } from "../../components/Card3b/Card3b";
import Card5 from "../../components/Card5/Card5";
import Card5b from "../../components/Card5b/Card5b";
import Card1 from "../../components/Card_1/Card1";
import Carousel from "../../components/CrousalCard/Crousal";
import Footer from "../../components/Footer/Footer";
import Card2b from "../../components/card2b/Card2b";
import { Navbar } from "../../components/navbar/Navbar";
import { useData } from "../../utils/dataContext/dataContext";
import { IArticle } from "../../utils/dataContext/types";
import { useRandomNumber } from "../../utils/hooks/useRandomNumber";
import { motion } from "framer-motion";

export const Home = () => {
  const { posts, getPosts } = useData();

  let min = useMemo(() => {
    return useRandomNumber(30, 40);
  }, []);

  let data: IArticle[] = posts;
  let worldData = data.filter((el) => el.category === "world").slice(-min);
  let sportsData = data.filter((el) => el.category === "sports").slice(-min);
  let buisnessData = data
    .filter((el) => el.category === "buissness")
    .slice(-min);
  let innovationData = data
    .filter((el) => el.category === "innovation")
    .slice(-min);
  let cultureData = data.filter((el) => el.category === "culture").slice(-min);
  let travelData = data.filter((el) => el.category === "travel").slice(-min);
  let earthData = data.filter((el) => el.category === "earth").slice(-min);

  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getPosts();
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Stack px={[2, 4, 6, 8]} gap={4}>
          <Grid
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(4,1fr)",
            ]}
            gap={[2, 2, 2, 4]}
          >
            <Grid templateRows={"repeat(2,2fr)"} gap={2}>
              <Box>
                <Divider />
                <Card1 data={worldData[0]} />
              </Box>
              <Box>
                <Divider />
                <Card1 data={worldData[1]} />
              </Box>
            </Grid>
            <GridItem
              colSpan={{ base: 1, sm: 1, lg: 2 }}
              rowStart={{ base: 1, sm: 1 }}
              colStart={{ lg: 2 }}
            >
              <Card2a data={worldData[2]} isDefault={true} />
            </GridItem>
            <Grid templateRows={"repeat(4,1fr)"} gap={2}>
              <Box>
                <Card3a data={worldData[3]} />
                <Divider />
              </Box>
              <Box>
                <Card3a data={worldData[4]} />
                <Divider />
              </Box>
              <Box>
                <Card3a data={worldData[5]} />
                <Divider />
              </Box>
              <Card3b data={worldData[6]} />
            </Grid>
          </Grid>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Great Reeds</Heading>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              py={4}
              gap={4}
            >
              <Card2b data={worldData[7]} />
              <Card2b data={worldData[8]} />
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Sports</Heading>
            <Card5b data={sportsData[0]} />
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={sportsData[1]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={sportsData[2]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={sportsData[3]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={sportsData[4]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Box borderTop={"1px solid"} py={2}>
            <Heading>News Video</Heading>
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }}
              py={4}
              gap={4}
            >
              <Stack>
                <Card3b data={worldData[9]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={worldData[10]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={worldData[11]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={worldData[12]} />
                <Divider />
              </Stack>
            </Grid>
          </Box>

          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Buisness</Heading>
            <Card5 data={buisnessData[0]} />
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={buisnessData[1]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={buisnessData[2]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={buisnessData[3]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={buisnessData[5]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>

          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Culture</Heading>
            <Card5b data={cultureData[0]} />
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={cultureData[1]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={cultureData[2]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={cultureData[3]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={cultureData[5]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Editor Pics</Heading>
            <Grid
              templateColumns={["1fr", "1fr", "repeat(3,1fr)", "repeat(3,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card1 data={worldData[11]} />
                <Divider />
              </Stack>
              <Stack>
                <Card1 data={cultureData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card1 data={travelData[0]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Earth</Heading>
            <Card5 data={earthData[0]} />
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={earthData[1]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={earthData[2]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={earthData[3]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={earthData[5]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Innovation</Heading>
            <Card5b data={innovationData[0]} />
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={innovationData[1]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={innovationData[2]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={innovationData[3]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={innovationData[4]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          {/* Travel and Health */}
          <Stack borderTop={"1px solid"} py={2} gap={4} position={"relative"}>
            <Heading>Travel and Health</Heading>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              py={4}
              gap={4}
            >
              <Card2b data={travelData[3]} />
              <Card2b data={travelData[4]} />
            </Grid>
            <Carousel />
          </Stack>

          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>World</Heading>

            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={worldData[13]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={worldData[14]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={worldData[15]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={worldData[16]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Sports</Heading>

            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={sportsData[4]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={sportsData[5]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={sportsData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={sportsData[7]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Buisness</Heading>

            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={buisnessData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={buisnessData[7]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={buisnessData[8]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={buisnessData[9]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Innovation</Heading>
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={innovationData[5]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={innovationData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={innovationData[7]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={innovationData[8]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Culture</Heading>
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={cultureData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={cultureData[7]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={cultureData[8]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={cultureData[9]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Travel</Heading>
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={travelData[5]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={travelData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={travelData[7]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={travelData[8]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
          <Stack borderTop={"1px solid"} py={2} gap={4}>
            <Heading>Earth</Heading>
            <Grid
              templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
              gap={6}
            >
              <Stack>
                <Card3a data={earthData[6]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={earthData[7]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3a data={earthData[8]} />
                <Divider />
              </Stack>
              <Stack>
                <Card3b data={earthData[9]} />
                <Divider />
              </Stack>
            </Grid>
          </Stack>
        </Stack>
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

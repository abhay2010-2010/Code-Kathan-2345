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
import { useEffect, useState } from "react";
import postData from "../../../../backend/db.json";
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
import { Post } from "../../utils/types";
import { useLocation } from "react-router-dom";

export const Home = () => {
  let data: Post[] = postData.posts;
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
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
  }, [pathname]);
  return (
    <>
      <Navbar />
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
              <Card1 data={data[0]} />
            </Box>
            <Box>
              <Divider />
              <Card1 data={data[1]} />
            </Box>
          </Grid>
          <GridItem
            colSpan={{ base: 1, sm: 1, lg: 2 }}
            rowStart={{ base: 1, sm: 1 }}
            colStart={{ lg: 2 }}
          >
            <Card2a data={data[2]} isDefault={true} />
          </GridItem>
          <Grid templateRows={"repeat(4,1fr)"} gap={2}>
            <Box>
              <Card3a data={data[3]} />
              <Divider />
            </Box>
            <Box>
              <Card3a data={data[4]} />
              <Divider />
            </Box>
            <Box>
              <Card3a data={data[5]} />
              <Divider />
            </Box>
            <Card3b data={data[6]} />
          </Grid>
        </Grid>
        <Stack borderTop={"1px solid"} py={2} gap={4}>
          <Heading>Great Reeds</Heading>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} py={4} gap={4}>
            <Card2b data={data[6]} />
            <Card2b data={data[7]} />
          </Grid>
        </Stack>
        <Stack borderTop={"1px solid"} py={2} gap={4}>
          <Heading>Sports</Heading>
          <Card5b data={data.find((item) => item.category === "sports")} />
          <Grid
            templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
            gap={6}
          >
            <Stack>
              <Card3a data={data[8]} />
              <Divider />
            </Stack>
            <Stack>
              <Card3a data={data[9]} />
              <Divider />
            </Stack>
            <Stack>
              <Card3a data={data[10]} />
              <Divider />
            </Stack>
            <Stack>
              <Card3b />
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
              <Card3b data={data[6]} />
              <Divider />
            </Stack>
            <Stack>
              <Card3b data={data[8]} />
              <Divider />
            </Stack>
            <Stack>
              <Card3b data={data[9]} />
              <Divider />
            </Stack>
            <Stack>
              <Card3b data={data[10]} />
              <Divider />
            </Stack>
          </Grid>
        </Box>

        <Stack borderTop={"1px solid"} py={2} gap={4}>
          <Heading>Buisness</Heading>
          <Card5
            data={data.filter((item) => item.category === "buissness")[0]}
          />
          <Grid
            templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
            gap={6}
          >
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "buissness")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "buissness")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "buissness")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "buissness")[5]}
              />
              <Divider />
            </Stack>
          </Grid>
        </Stack>

        <Stack borderTop={"1px solid"} py={2} gap={4}>
          <Heading>Culture</Heading>
          <Card5b
            data={data.filter((item) => item.category === "culture")[0]}
          />
          <Grid
            templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
            gap={6}
          >
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "culture")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "culture")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "culture")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "culture")[5]}
              />
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
              <Card1
                data={data.filter((item) => item.category === "innovation")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card1
                data={data.filter((item) => item.category === "culture")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card1
                data={data.filter((item) => item.category === "travel")[4]}
              />
              <Divider />
            </Stack>
          </Grid>
        </Stack>
        <Stack borderTop={"1px solid"} py={2} gap={4}>
          <Heading>Earth</Heading>
          <Card5 data={data.filter((item) => item.category === "earth")[0]} />
          <Grid
            templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
            gap={6}
          >
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "earth")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "earth")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "earth")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "earth")[5]}
              />
              <Divider />
            </Stack>
          </Grid>
        </Stack>
        <Stack borderTop={"1px solid"} py={2} gap={4}>
          <Heading>Innovation</Heading>
          <Card5b
            data={data.filter((item) => item.category === "innovation")[10]}
          />
          <Grid
            templateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(4,1fr)"]}
            gap={6}
          >
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "innovation")[15]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "innovation")[17]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "innovation")[30]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "innovation")[52]}
              />
              <Divider />
            </Stack>
          </Grid>
        </Stack>
        {/* Travel and Health */}
        <Stack borderTop={"1px solid"} py={2} gap={4} position={"relative"}>
          <Heading>Travel and Health</Heading>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} py={4} gap={4}>
            <Card2b
              data={data.filter((item) => item.category === "travel")[0]}
            />
            <Card2b
              data={data.filter((item) => item.category === "travel")[3]}
            />
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
              <Card3a
                data={data.filter((item) => item.category === "world")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "world")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "world")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "world")[5]}
              />
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
              <Card3a
                data={data.filter((item) => item.category === "sports")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "sports")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "sports")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "sports")[5]}
              />
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
              <Card3a
                data={data.filter((item) => item.category === "buissness")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "buissness")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "buissness")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "buissness")[5]}
              />
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
              <Card3a
                data={data.filter((item) => item.category === "innovation")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "innovation")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "innovation")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "innovation")[5]}
              />
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
              <Card3a
                data={data.filter((item) => item.category === "culture")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "culture")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "culture")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "culture")[5]}
              />
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
              <Card3a
                data={data.filter((item) => item.category === "travel")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "travel")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "travel")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "travel")[5]}
              />
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
              <Card3a
                data={data.filter((item) => item.category === "earth")[1]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "earth")[2]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3a
                data={data.filter((item) => item.category === "earth")[3]}
              />
              <Divider />
            </Stack>
            <Stack>
              <Card3b
                data={data.filter((item) => item.category === "earth")[5]}
              />
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
      <Footer />
    </>
  );
};

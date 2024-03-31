import { Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";
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

export const Buisness = () => {
  let data: Post[] = postData.posts.slice(0, 100);

  return (
    <>
      <Box p={5}>
        <Heading>Buisness</Heading>
        <br />
        <Divider backgroundColor={"black"} height={"2px"} />
        <br />
        <Box flexDirection={["column", "row"]} display={"flex"} gap={"2rem"}>
          <Card5b />
          <Card1 data={data[0]} />
        </Box>

      <Grid


        justifyItems={"center"}
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)", "repeat(5,1fr)"]}
        alignContent={"center"}
        marginX="auto"

      >
        <Box >
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
      </Grid>

      <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} mb={20} >
        <Card3a />
        <Card3a />
        <Card3a />
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
      <Heading fontSize={"20px"} mt={5} mb={5} >Executive</Heading>
      <Card5 />
      <Divider backgroundColor={"black"} height={"2px"} mt={5} />
      <Heading  fontSize={"20px"} mt={5} mb={5} >More news and features</Heading>
      <Grid


        justifyItems={"center"}
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}
        alignContent={"center"}
        marginX="auto"
        mt={10}
      >

        <Box >
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box >
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
        <Box>
          <Card1 />
        </Box>
      </Grid>
    </Box>

      <Carousel />

    <Box p={10}>
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

  </>
}


import { Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import Card5b from "../../components/Card5b/Card5b";
import Card1 from "../../components/Card_1/Card1";
import { Card3a } from "../../components/Card3a/Card3a";
import Carousel from "../../components/CrousalCard/Crousal";
import Card2b from "../../components/card2b/Card2b";
import TwoCards from "../../components/TwoCards/TwoCards";
import Card5 from "../../components/Card5/Card5";
import SearchCard from "../../components/Search Card/SearchCard";


export const Buisness = () => {

  return <>
    <Box p={5} >
      <Heading>Buisness</Heading>
      <br />
      <Divider backgroundColor={"black"} height={"2px"} />
      <br />
      <Box flexDirection={["column", "row"]} display={"flex"} gap={"2rem"} >

        <Card5b />
        <Card1 />
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

    <Box p={5} mt={8} >

      <br />
      <Divider backgroundColor={"black"} height={"2px"} />
      <Text fontSize={"20px"} >Finance and Economy</Text>
      <br />
      <TwoCards />
      <Divider backgroundColor={"black"} height={"2px"} mb={5} />
      <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} >
        <Card2b />
        <Card2b />
        <Card2b />
      </Grid >
    </Box>

    <Box mt={10} p={5}>
      <Divider backgroundColor={"black"} height={"2px"} />
      <Heading fontSize={"20px"} mt={5} mb={5} >Technology and Science</Heading>
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

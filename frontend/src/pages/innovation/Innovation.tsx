import { Box, Card, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Card3a } from "../../components/Card3a/Card3a";
import { Card3b } from "../../components/Card3b/Card3b";
import CardCrousal from "../../components/CrousalCard/CardCrousal";
import InnovationCard from "../../components/InnovationCard/InnovationCard";
import Carousel from "../../components/CrousalCard/Crousal";

export const Innovation = () => {
  return (
    <>
    <Box w={'88%'} marginX='auto'>
    <Heading>Innovation</Heading>
    <br />
    <Divider borderColor="black.300" border={'solid'} />
    <br />
    <Grid
     
      gap={"6"}
      justifyItems={"center"}
      templateColumns={{ sm: "1fr", md: "repeat(4, 3fr)" }}
      alignContent={"center"}
      
      marginX="auto"
      
    >
      <Box >
        <InnovationCard />
      </Box>
      <Box>
        <InnovationCard />
      </Box>
      <Box>
        <InnovationCard />
      </Box>
      <Box>
        <InnovationCard />
      </Box>
    </Grid>
    <br />
    <Divider borderColor="black.300" border={'solid'}  />
    <Heading fontSize={'20'}>Science and health</Heading>
    <br />
  <Carousel />
  
    </Box>
    </>
  );
};

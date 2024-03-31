import {
  Box,
  Button,
  Divider,
  Grid,
  Heading
} from "@chakra-ui/react";
import { useState } from "react";
import Card5 from "../../components/Card5/Card5";
import Carousel from "../../components/CrousalCard/Crousal";
import InnovationCard from "../../components/InnovationCard/InnovationCard";
import InnovationCard2 from "../../components/InnovationCard/InnovationCard2";

export const Innovation = () => {
  const [isLoaded, setIsloading] = useState(false);
  const handleToggle = () => {
    setIsloading(!isLoaded);
  };

  return (
    <>
      <Box w={"84%"} marginX="auto">
        <Heading>Innovation</Heading>
        <br />
        <Divider height={"2px"} backgroundColor={"black"}  />
        <br />

        <Grid
          gap={"6"}
          justifyItems={"center"}
          templateColumns={{ sm: "1fr", md: "repeat(4, 1fr)" }}
          alignContent={"center"}
          marginX="auto"
        >
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
        </Grid>

        
        <br />
        <Divider height={"2px"} backgroundColor={"black"} />
        <Heading fontSize={"20"}>Science and health</Heading>
        <br />
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
           gap={'5'}
        
        >
          <Box>
            <InnovationCard2 isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard2 isLoaded={isLoaded} />
          </Box>
        </Grid>
        
      </Box>
      <Carousel />
      <Button onClick={handleToggle}>Toggle</Button>
     <Box w={'84%'} marginX="auto" >
      <Divider height={"2px"} backgroundColor={"black"} />
      <Heading fontSize={'25'}>Features</Heading>
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
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
          <Box>
            <InnovationCard isLoaded={isLoaded} />
          </Box>
        </Grid>
     </Box>
     <Carousel />
    </>
  );
};

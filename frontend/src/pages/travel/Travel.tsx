import { Box, Divider, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import postData from "../../../../backend/db.json";
import Card2a from "../../components/Card2a/Card2a";
import { Card1a } from "../../components/card_1a/Card_1a";
import { Post } from "../../utils/types";

import { Card1b } from "../../components/Card1b/Card1b";
import Card5b from "../../components/Card5b/Card5b";
import Card1 from "../../components/Card_1/Card1";
import Carousel from "../../components/CrousalCard/Crousal";

export const Travel = () => {
  let data: Post[] = postData.posts.slice(0, 40);
  return (
    <Box
      p="20px"
      pr={{ base: "20px", md: "60px" }}
      pl={{ base: "20px", md: "60px" }}
    >
      {/* 1st */}
      <Heading as="h1" fontWeight="800">
        Travel
      </Heading>
      <br />
      <Divider backgroundColor={"black"} h="1px" />
      <br />
      <Card1a data={data[21]} />
      {/* 2nd */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="30px" mt="40px">
        <Card2a data={data[25]} />
        <Card2a data={data[12]} />
      </SimpleGrid>
      <br />
      <Divider backgroundColor={"black"} h="1px" />
      <br />
      {/* 3rd */}
      <Box>
        <Heading fontSize="24px" fontWeight="600">
          In the news
        </Heading>
        <br />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={10}
        >
          <Card1b data={data[14]} />
          <Card1b data={data[15]} />
          <Card1b data={data[16]} />
          <Card1b data={data[17]} />
          <Card1b data={data[18]} />
        </Grid>
      </Box>
      <br /> <br />
      <Divider backgroundColor={"black"} h="1px" />
      <br />

      {/* 4th */}
      <Box>
        <Heading fontSize="24px" fontWeight="600">
          Adventure
        </Heading>
        <br />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)"
           
          ]}
          gap={10}
        >
          <Card1 data={data[19]}/>
          <Card1 data={data[20]}/>
          <Card1 data={data[21]}/>
          <Card1 data={data[23]}/>
          <Card1 data={data[22]}/>
          <Card1 data={data[24]}/>
        </Grid>
      </Box>
      <br /> <br />
      <Divider backgroundColor={"black"} h="1px" />
      <br />
      <Box>
      <Heading fontSize="24px" fontWeight="600">
         In Picture
        </Heading> <br />
        <Card1a data={data[2]} />
      </Box>
      <br /><br />
      <Divider backgroundColor={"black"} h="2px" />
      <br />

      {/* 5th */}
      <Box>
        <Heading fontSize="24px" fontWeight="600">
         The Specialist
        </Heading>
        <br />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
           
          ]}
          gap={10}
        >
          <Card1 data={data[0]}/>
          <Card1 data={data[25]}/>
          <Card1 data={data[3]}/>
          <Card1 data={data[4]}/>
          <Card1 data={data[5]}/>
          <Card1 data={data[6]}/>
          <Card1 data={data[7]}/>
          <Card1 data= {data[8]}/>
        </Grid>
      </Box>
       <br /><br />
      {/* 6th */}
      <Box>
        <Carousel/>
      </Box>

      {/* 7 */}
      <br /><br />
      <Divider backgroundColor={"black"} h="2px" />
      <br />
      <Box>
        <Heading fontSize="24px" fontWeight="600">
        Green Gateways
        </Heading>
        <br />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
           
           
          ]}
          gap={10}
        >
          <Card1 data={data[26]}/>
          <Card1 data={data[27]}/>
          <Card1 data={data[28]}/>
          <Card1 data={data[29]}/>
          
        </Grid>
      </Box>
      {/* 8 */}
      <br /><br />
      <Divider backgroundColor={"black"} h="2px" />
      <br />
      <Box>
        <Heading fontSize="24px" fontWeight="600">
      World's Table
        </Heading>
        <br />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
               
          ]}
          gap={10}
        >
          <Card1 data={data[30]}/>
          <Card1 data={data[31]}/>
          <Card1 data={data[32]}/>
          <Card1 data={data[33]}/>
          
        </Grid>
      </Box>
      <br /><br />
      <Divider backgroundColor={"black"} h="2px" />
      <br />

      {/* 9 */}
      <Box>
        <Heading fontSize="24px" fontWeight="600">More on Travel</Heading> <br />
        <Card5b data={data[34]}/>
        <Card5b data={data[35]}/>
        <Card5b data={data[36]}/>
        <Card5b data={data[37]}/>
      </Box>
    </Box>
  );
};

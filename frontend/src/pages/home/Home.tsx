import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import Card1 from "../../components/Card_1/Card1";
import Card2a from "../../components/Card2a/Card2a";
import { Card3a } from "../../components/Card3a/Card3a";
import { Card3b } from "../../components/Card3b/Card3b";
import postData from "../../../../backend/db.json";
import { Post } from "../../utils/types";
import Card2b from "../../components/card2b/Card2b";

export const Home = () => {
  let data: Post[] = postData.posts.slice(0,20);

  return (
    <Grid px={[2, 4, 6, 8]} gap={4}>
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
          <Card1 data={data[0]} />
          <Card1 data={data[1]} />
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
      <Box borderTop={"1px solid"} py={2}>
        <Heading>Great Reeds</Heading>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} py={4} gap={4}>
          <Card2b data={data[6]} />
          <Card2b data={data[7]} />
        </Grid>
      </Box>
    </Grid>
  );
};

import { Grid } from "@chakra-ui/react";
import Card5b from "../Card5b/Card5b";
import { Card3a } from "../Card3a/Card3a";
import postData from "../../../../backend/db.json";

function TwoCards() {
  const data = postData.posts.slice(1, 10);
  return (
    <>
      <Card5b />
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)", "repeat(5,1fr)"]}
        mt={10}
        mb={10}
      >
        <Card3a data={data[0]} />
        <Card3a data={data[1]} />
        <Card3a data={data[2]} />
        <Card3a data={data[3]} />
        <Card3a data={data[4]} />
      </Grid>
    </>
  );
}

export default TwoCards;

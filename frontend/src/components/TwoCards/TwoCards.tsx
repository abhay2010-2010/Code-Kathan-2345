import { Grid } from "@chakra-ui/react"
import Card5b from "../Card5b/Card5b"
import { Card3a } from "../Card3a/Card3a"


function TwoCards() {
  return (
   <>
    <Card5b />
    <Grid templateColumns={["repeat(1,1fr)","repeat(3,1fr)","repeat(5,1fr)"]} mt={10} mb={10}>
      <Card3a />
      <Card3a />
      <Card3a />
      <Card3a />
      <Card3a />
    </Grid>
   </>
  )
}

export default TwoCards

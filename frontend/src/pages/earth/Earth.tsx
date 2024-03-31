import { Box } from "@chakra-ui/react";
import Card6 from "../../components/Card6/Card6";
import Card6a from "../../components/Card6a/Card6a";
import { Card3a } from "../../components/Card3a/Card3a";

export const Earth = () => {
  return <>
    <Box display={{ base: "block", md: "flex" }}>
      <Card6 />
      <Box
        display="flex"
        flexDirection={{ base: "row", md: "column" }}
        w={{ base: "100%", md: "70%" }}
      >
        <Card6a />
        <Card6a />
        <Card6a />
      </Box>
    </Box>

<Box display={{base:"grid",md:"flex"}}>
 <Card3a/>
 <Card3a/>
 <Card3a/>
 <Card3a/>
 <Card3a/>
</Box>

  </>;
};
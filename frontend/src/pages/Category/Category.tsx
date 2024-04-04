import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Category() {
  return (
    <>
      <SidebarWithHeader />
      <Box
        mt={"6vh"}
        minH={"88vh"}
        ml={{ base: 0, md: 60 }}
        p="4"
        textAlign={"center"}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Category
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={"We serve"} stat={"50,000 people"} />
          <StatsCard title={"In"} stat={"30 different countries"} />
          <StatsCard title={"Who speak"} stat={"100 different languages"} />
        </SimpleGrid>
      </Box>
    </>
  );
}

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

export default function Dashboard() {
  return (
    <>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4" textAlign={"center"}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          DASHBOARD
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={"Total Category"} stat={"50,000 people"} />
          <StatsCard
            title={"Total Article Published"}
            stat={"30 different countries"}
          />
          <StatsCard title={"Total Clicks"} stat={"100 different languages"} />
          <StatsCard title={"Reach to the Customers"} stat={"50,000 people"} />
        </SimpleGrid>
      </Box>
    </>
  );
}

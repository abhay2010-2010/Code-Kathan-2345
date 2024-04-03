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
import { Post } from "../../utils/types";
import { useData } from "../../utils/dataContext/dataContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/authContext/authContext";

interface StatsCardProps {
  title: string;
  stat: string | number; // Change stat type to accept string or number
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
  const [uniqueCategories, setUniqueCategories] = useState<number>(0); // Initialize state with a number
  const [totalClick, setTotalClick] = useState<number>(0); // Initialize state with a number
  // const [uniqueCategories, setUniqueCategories] = useState<number>(0); // Initialize state with a number
  const { posts, getPosts } = useData();
  const { getUsers, totalUsers, users } = useAuth();

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  const countCategories = (posts: Post[]) => {
    const uniqueCategories: Set<string> = new Set();
    // const uniqueCountry : Set<String> = new Set()
    let click = 0;

    posts.forEach((post) => {
      uniqueCategories.add(post.category);
      click += post.clicks;
    });
    // users.forEach((user) => {
    //   uniqueCountry.add(user.address.country);
    // });

    setUniqueCategories(uniqueCategories.size);
    setTotalClick(click);
  };
  useEffect(() => {
    countCategories(posts);
    console.log(totalUsers);
  }, [posts, totalUsers]);

  // console.log(posts);

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
          DASHBOARD
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={`Total ${posts.length} Article Published`}
            stat={"30 different countries"}
          />
          <StatsCard title={"Total Clicks"} stat={`${totalClick}`} />
          <StatsCard
            title={"Reach to the Customers"}
            stat={`${users.length} people`}
          />
          <StatsCard
            title={"We Broadcast the news in total"}
            stat={uniqueCategories} // Pass the count of unique categories
          />
        </SimpleGrid>
      </Box>
    </>
  );
}

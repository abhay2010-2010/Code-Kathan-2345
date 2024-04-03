import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import { useAuth } from "../../utils/authContext/authContext";
import { useData } from "../../utils/dataContext/dataContext";
import "./Trending.css";

// export const data1 = [
//   ["City", "2010 Population", "2000 Population"],
//   ["New York City, NY", 8175000, 8008000],
//   ["Los Angeles, CA", 3792000, 3694000],
//   ["Chicago, IL", 2695000, 2896000],
//   ["Houston, TX", 2099000, 1953000],
//   ["Philadelphia, PA", 1526000, 1517000],
// ];

const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  seriesType: "bars",
  series: { 0: { type: "line" } },
};

const Trending = () => {
  const countryMap: Map<string, number> = new Map();

  const { users, getUsers } = useAuth();
  const { posts, getPosts } = useData();

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  users.forEach((user) => {
    // console.log(user.address.country);
    const country = user?.address?.country;
    const count = countryMap.get(country) || 0;
    countryMap.set(country, count + 1);
  });

  // console.log(countryMap);

  const data: [string, number | string][] = [["Country", "Popularity"]];
  countryMap.forEach((count, country) => {
    data.push([country, count]);
  });

  const sortedPosts = posts.sort((a, b) => b.clicks - a.clicks);

  // Take the top 10 items
  const top10 = sortedPosts.slice(0, 10);

  // Create an array in the desired format
  const data1: (string | number)[][] = [
    ["Title", "Most Viewed", "Trending Article"],
  ];
  top10.forEach((post) => {
    data1.push([post.title, post.clicks, post.clicks]);
  });

  return (
    <Box>
      <SidebarWithHeader />
      <Box mt={"12vh"} minH={"88vh"} ml={{ base: 0, md: 60 }} p="4">
        <Box>
          <Heading textAlign={"center"}>Top 10 Trending Article</Heading>
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={data1}
            options={options}
          />
        </Box>
        <Box id="charts">
          <Box>
            <Heading>Total Users</Heading>
            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="100%"
              height="400px"
              data={data}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Trending;

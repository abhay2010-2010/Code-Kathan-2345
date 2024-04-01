import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import "./Trending.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export const data1 = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

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
  return (
    <div>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4">
        <div id="charts">
          <div>
            <h2>Total Users</h2>
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
          </div>

          <div>
            <h2>Top 10 Trending Article</h2>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={data1}
              options={options}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Trending;

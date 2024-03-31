import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import "./Trending.css";

const Trending = () => {
  return (
    <div>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4">
        <div id="charts">
          <div>
            <h2>Total Sales</h2>
            <canvas id="totalSalesChart" width="900" height="400"></canvas>
          </div>

          <div>
            <h2>Top 5 Products</h2>
            <canvas id="topProductChart" width="900" height="400"></canvas>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Trending;

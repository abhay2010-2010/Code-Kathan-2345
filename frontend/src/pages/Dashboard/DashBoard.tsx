import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import "./DashBoard.css";

const Dashboard = () => {
  return (
    <div>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4">
        <div className="mainTitle">DashBoard</div>
        <div id="data">
          <div>
            <h1>Total Category</h1>
            <h1 id="totalOrders"></h1>
          </div>
          <div>
            <h1>Total Clicks</h1>
            <h1 id="totalProducts"></h1>
          </div>
          <div>
            <h1>Total Articles</h1>
            <h1 id="totalCustomers"></h1>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Dashboard;

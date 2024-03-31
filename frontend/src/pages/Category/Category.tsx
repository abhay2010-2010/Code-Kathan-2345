import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";

const Category = () => {
  return (
    <div>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4">
        <h1>Category Component</h1>
        <p>This is the Dashboard component.</p>
      </Box>
    </div>
  );
};

export default Category;

import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";

const Article = () => {
  return (
    <div>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4">
        <h1>Article Component</h1>
        <p>This is the Dashboard component.</p>
      </Box>
    </div>
  );
};

export default Article;

import {
  Box,
  Button,
  Grid,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import ProfileCard1 from "../../components/profileCard1/ProfileCard1";
import { useAuth } from "../../utils/authContext/authContext";
import { IUserPatch } from "../../utils/authContext/types";
import { IArticle } from "../../utils/dataContext/types";
import { motion } from "framer-motion";

export const Profile = () => {
  const {
    patchUser,
    authState: { loginLoading, user },
  } = useAuth();
  const toast = useToast();
  let history: IArticle[] = user?.history || [];

  const handleClick = async (itemId: number) => {
    if (user) {
      let cur = history.filter((item) => item.id !== itemId) || [];
      const id = user.id;
      const patchObj: IUserPatch = { id, history: cur };
      let examplePromise = patchUser(patchObj);
      toast.promise(examplePromise, {
        success: {
          title: "Deleted Successfully",
          description: "Deleted",
          duration: 3000,
        },
        error: {
          title: "Failed to Delete",
          description: "Something's wrong",
          duration: 3000,
        },
        loading: {
          title: "Deleting",
          description: "Please wait",
          duration: 3000,
        },
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  // useEffect(() => {
  //   console.log("history", user?.history);
  // }, [loginLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Box px={[2, 4, 6, 8]}>
        <Grid
          minH={"calc(100vh - 395px)"}
          gap={10}
          templateColumns={{ base: "1fr", sm: "1fr", md: "1fr 2fr" }}
        >
          {user && <ProfileCard1 data={user} />}
          <Box height={"60vh"} overflowY={"scroll"}>
            <TableContainer whiteSpace={"wrap"}>
              <Table size={"sm"}>
                <TableCaption placement={"top"}>
                  <Heading>History</Heading>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Article</Th>
                    <Th>Source</Th>
                    <Th>Link</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {history.reverse().map((item) => {
                    return (
                      <Tr key={item.id}>
                        <Td>
                          <Text noOfLines={3}> {item.title}</Text>
                        </Td>
                        <Td>{item.source}</Td>
                        <Td>
                          <FaExternalLinkAlt
                            onClick={() =>
                              window.open(item.articleLink, "_black")
                            }
                          />
                        </Td>
                        <Td>
                          <Button
                            variant="solid"
                            isLoading={loginLoading}
                            onClick={() => {
                              handleClick(item.id);
                            }}
                          >
                            Delete
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </motion.div>
  );
};

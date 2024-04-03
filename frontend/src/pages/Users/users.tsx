import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import { AdminSearch } from "../../components/AdminSearchBar/AdminSearchbar";
import { useAuth } from "../../utils/authContext/authContext";
import { IUserPatch } from "../../utils/authContext/types";

let data: IUserPatch = {
  id: 491,
  name: "Ave",
  email: "akelbermandm@opera.com",
  Phone: +"146-634-6602",
  password: "$2a$10$yFpc0rbVufdJM1BG1mJX.eT7j/D7.EE3J3GVDa.7mulZ93bHdmiL2",
  role: "user",
  address: {
    address_line: "06653 Karstens Drive",
    city: "Cibinong",
    country: "Indonesia",
  },
};

const Users: React.FC = () => {
  // const { posts, getUsers, totalPosts, patchPost, deletePost, addPost } =
  // useData();

  const { users, getUsers, totalUsers, patchUser, deleteUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [params, setParams] = useSearchParams();
  const [selectedUser, setSelectedUser] = useState<IUserPatch>(data);
  const [page, setPage] = useState<number>(Number(params.get("_page") || "1"));
  const [limit] = useState<number>(Number(params.get("_limit") || "5"));
  const [pages, setpages] = useState(1);
  const [udatedUsers, setUpdateUser] = useState<IUserPatch>(selectedUser);

  const toast = useToast();
  // : React.ChangeEvent<HTMLInputElement>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUpdateUser({ ...udatedUsers, [name]: value });
  };

  const setUrl = () => {
    setParams(() => {
      // let obj: URLSearchParams | queryParams = { _limit: limit, _page: page };
      let obj = new URLSearchParams();
      obj.append("_limit", `${limit}`);
      obj.append("_page", `${page}`);
      return obj;
    });
  };

  useEffect(() => {
    setUrl();
    getUsers().then(() => {
      setpages(() => Math.ceil(Number(totalUsers)) / Number(limit));
    });
  }, [page, limit]);

  const handleDelete = (id: number) => {
    console.log(id);

    let examplePromise = deleteUser(id);
    toast.promise(examplePromise, {
      success: { title: "User removed", description: "Removed Successfull" },
      error: { title: "Somthing Went Wrong", description: "Something wrong" },
      loading: { title: "Deleting User", description: "Please wait" },
    });
    console.log("Deleting item at index:", id);
  };

  const handleOpenUpdate = (item: IUserPatch) => {
    // console.log(item);

    // console.log(item);
    setSelectedUser(item);
    setUpdateUser(item);
    onOpen();
  };

  const handleUpdate = () => {
    console.log(udatedUsers);
    let examplePromise = patchUser(udatedUsers);
    toast.promise(examplePromise, {
      success: { title: "Update Successfull", description: "User Updated" },
      error: { title: "Somthing Went Wrong", description: "Something wrong" },
      loading: { title: "Updating User", description: "Please wait" },
    });
    onClose();
  };

  const handleCloseModal = () => {
    setSelectedUser(data);
    setUpdateUser(data);
    onClose();
  };

  return (
    <>
      <SidebarWithHeader />
      <Box
        mt={"12vh"}
        minH={"88vh"}
        ml={{ base: 0, md: 60 }}
        p="4"
        textAlign={"center"}
      >
        <AdminSearch />
        <TableContainer whiteSpace={"wrap"}>
          <Table variant="simple" size={"sm"}>
            <TableCaption placement={"top"}>
              <Heading>USERS</Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>City</Th>
                <Th colSpan={2}>Actions Button</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.length != 0 &&
                users.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.Phone}</Td>
                    <Td>
                      <Button
                        colorScheme="blue"
                        onClick={() => handleOpenUpdate(item)}
                      >
                        Update
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        ml={2}
                        onClick={() => handleDelete(item?.id || 1)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <ButtonGroup>
          <Flex alignItems={"center"} gap={2}>
            <Button
              isDisabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button isDisabled={true}>{page}</Button>
            <Button
              isDisabled={page === pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </Flex>
        </ButtonGroup>

        {/* Modal for Update */}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  defaultValue={selectedUser?.name}
                  name="name"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  defaultValue={selectedUser?.email}
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="text"
                  defaultValue={selectedUser?.Phone}
                  name="Phone"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <RadioGroup
                  name="role"
                  onChange={(e) => {
                    setUpdateUser({ ...udatedUsers, role: e });
                  }}
                  defaultValue={selectedUser.role}
                >
                  <HStack spacing="24px">
                    <Radio value="admin">Admin</Radio>
                    <Radio value="user">User</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Update
              </Button>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Users;

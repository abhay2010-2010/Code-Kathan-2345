import React, { useEffect, useState } from "react";
import {
  Flex,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  ButtonGroup,
  Text,
  Box,
  useDisclosure,
  TableContainer,
  TableCaption,
  Heading,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import { useSearchParams } from "react-router-dom";
import { useData } from "../../utils/dataContext/dataContext";
import { IAddArticle, IPatchArticle } from "../../utils/dataContext/types";
import { AdminSearch } from "../../components/AdminSearchBar/AdminSearchbar";

let data: IPatchArticle = {
  id: 1,
  title: "",
  Description: "",
  source: "",
  time: 4,
  articleLink: "",
  image1: "",
  image2: "",
  category: "",
  clicks: 0,
};
let data2: IAddArticle = {
  title:
    "Ukraine and India, a historical ally of Russia, hold talks to strengthen ties",
  Description:
    "NEW DELHI (AP) � India's foreign minister held talks Friday with his Ukrainian counterpart, who was visiting to strengthen bilateral ties and cooperation ...",
  source: "The Associated Press",
  time: 0,
  articleLink:
    "https://apnews.com/article/india-ukraine-jaishankar-kuleba-3826b19229331d5bf17d4f09252af709",
  image1:
    "https://i.zedtranslate.com/newsimage/CC8iK0NnNXljQzA0UmxwM1JtRjVWR3R4VFJEVkFSakFBaWdLTWdhbFJZanNuUWs",
  image2: "",
  category: "world",
  clicks: 0,
};

const Article: React.FC = () => {
  const { posts, getPosts, totalPosts, patchPost, deletePost, addPost } =
    useData();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [params, setParams] = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<IPatchArticle>(data);
  const [page, setPage] = useState<number>(Number(params.get("_page") || "1"));
  const [limit] = useState<number>(Number(params.get("_limit") || "5"));
  const [pages, setpages] = useState(1);
  const [updateItem, setupdateItem] = useState<IPatchArticle>(selectedItem);
  const [addNewsModalOpen, setAddNewsModalOpen] = useState(false);
  const [addedNews, setAddedNews] = useState<IAddArticle>(data2);

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setupdateItem({ ...updateItem, [name]: value });
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
    setpages(Math.ceil(totalPosts || 0) / Number(limit));
    setUrl();
    setTimeout(() => {
      getPosts(), 500;
    });
  }, [page, limit]);

  const handleDelete = (id: number) => {
    let examplePromise = deletePost(id);
    toast.promise(examplePromise, {
      success: { title: "News removed", description: "Removed Successfull" },
      error: { title: "Somthing Went Wrong", description: "Something wrong" },
      loading: { title: "Deleting News", description: "Please wait" },
    });
    console.log("Deleting item at index:", id);
  };

  const handleOpenUpdate = (item: IPatchArticle) => {
    // console.log(item);
    setSelectedItem(item);
    setupdateItem(item);
    onOpen();
  };

  const handleUpdate = () => {
    console.log(updateItem);
    let examplePromise = patchPost(updateItem);
    toast.promise(examplePromise, {
      success: { title: "Update Successfull", description: "News Updated" },
      error: { title: "Somthing Went Wrong", description: "Something wrong" },
      loading: { title: "Updating News", description: "Please wait" },
    });
    onClose();
  };

  const handleCloseModal = () => {
    setSelectedItem(data);
    setupdateItem(data);
    onClose();
  };

  const handleAddNewsOpen = () => {
    setAddNewsModalOpen(true);
  };

  const handleAddNewsClose = () => {
    setAddNewsModalOpen(false);
  };

  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddedNews({ ...addedNews, [name]: value });
  };
  const handleAddNews = () => {
    console.log(addedNews);
    setAddedNews(data2);
    let examplePromise = addPost(addedNews);
    toast.promise(examplePromise, {
      success: { title: "Added Successfull", description: "News Added" },
      error: { title: "Somthing Went Wrong", description: "Something wrong" },
      loading: { title: "Adding News", description: "Please wait" },
    });
    setPage(1);
    handleAddNewsClose();
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
        <Flex gap={5}>
          <AdminSearch />
          <Button colorScheme="green" onClick={handleAddNewsOpen}>
            Add News
          </Button>
        </Flex>
        <TableContainer whiteSpace={"wrap"}>
          <Table size={"sm"}>
            <TableCaption placement={"top"}>
              <Heading>ARTICLE</Heading>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Source</Th>
                <Th>Category</Th>
                <Th colSpan={2}>Actions Button</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.length != 0 &&
                posts.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <Text noOfLines={2}>{item.title}</Text>
                    </Td>
                    <Td>
                      <Text noOfLines={2}>{item.Description}</Text>
                    </Td>
                    <Td>{item.source}</Td>
                    <Td>{item.category}</Td>
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
                        onClick={() => handleDelete(item.id)}
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
              <Input
                type="text"
                defaultValue={selectedItem?.title}
                name="title"
                onChange={handleChange}
              />
              <Input
                type="text"
                defaultValue={selectedItem?.Description}
                name="Description"
                onChange={handleChange}
              />
              <Input
                type="text"
                defaultValue={selectedItem?.source}
                name="source"
                onChange={handleChange}
              />
              <Input
                type="text"
                defaultValue={selectedItem?.category}
                name="category"
                onChange={handleChange}
              />
              <Input
                type="text"
                defaultValue={selectedItem?.articleLink}
                name="articleLink"
                onChange={handleChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Update
              </Button>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Add News Modal */}
        <Modal isOpen={addNewsModalOpen} onClose={handleAddNewsClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add News</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                type="text"
                placeholder="Title"
                name="title"
                value={addedNews?.title}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Description"
                name="Description"
                value={addedNews?.Description}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Source"
                name="source"
                value={addedNews?.source}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Time"
                name="time"
                value={addedNews?.time}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Article Link"
                name="articleLink"
                value={addedNews?.articleLink}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Image Link 1"
                name="image1"
                value={addedNews?.image1}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Image Link 2"
                name="image2"
                value={addedNews?.image2}
                onChange={handleAddChange}
              />
              <Input
                type="text"
                placeholder="Category"
                name="category"
                value={addedNews?.category}
                onChange={handleAddChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleAddNews}>
                Add News
              </Button>
              <Button onClick={handleAddNewsClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Article;

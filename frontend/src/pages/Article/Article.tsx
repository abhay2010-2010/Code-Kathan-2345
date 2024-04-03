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
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import { Search } from "../../components/search/Search";
import { useSearchParams } from "react-router-dom";
import { useData } from "../../utils/dataContext/dataContext";
import { IPatchArticle } from "../../utils/dataContext/types";

interface queryParams {
  q?: string;
  _page?: number;
  _limit?: number;
}

let data: IPatchArticle = {
  id: 1,
  title: "daniel Kahneman, Nobel Prize-winning psychologist, 1934-2024",
  Description:
    'Three people have been released, but the situation "is not over yet", police in the city of Ede say.',
  source: "BBC.com",
  time: 4,
  articleLink: "https://www.bbc.com/news/world-europe-68698022",
  image1:
    "https://news.google.com/api/attachments/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs=-w280-h168-p-df-rw",
  image2:
    "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
  category: "world",
  clicks: 283,
};

const Article: React.FC = () => {
  const { posts, getPosts, totalPosts, patchPost, deletePost } = useData();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [params, setParams] = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<IPatchArticle>(data);
  const [page, setPage] = useState<number>(Number(params.get("_page") || "1"));
  const [limit, Setlimit] = useState<number>(
    Number(params.get("_limit") || "10"),
  );
  const [pages, setpages] = useState(1);
  const [updateItem, setupdateItem] = useState<IPatchArticle>(selectedItem);
  const [addNewsModalOpen, setAddNewsModalOpen] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setupdateItem({ ...updateItem, [name]: value });
  };

  const setUrl = () => {
    setParams((prev) => {
      let obj: queryParams = { _limit: limit, _page: page };
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
    getPosts();
    console.log("Deleting item at index:", id);
  };

  const handleOpenUpdate = (item: IPatchArticle) => {
    console.log(item);
    setSelectedItem(item);
    onOpen();
  };

  const handleUpdate = () => {
    let examplePromise = patchPost(updateItem);
    toast.promise(examplePromise, {
      success: { title: "Update Successfull", description: "News Updated" },
      error: { title: "Somthing Went Wrong", description: "Something wrong" },
      loading: { title: "Updating News", description: "Please wait" },
    });
    getPosts();
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

  const handleAddNews = () => {
    // Logic to add news
  };

  return (
    <>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4" textAlign={"center"}>
        <Flex gap={5}>
          <Search />
          <Button colorScheme="green" onClick={handleAddNewsOpen}>
            Add News
          </Button>
        </Flex>
        <Table variant="simple">
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
                  <Td>{item.title}</Td>
                  <Td>{item.Description}</Td>
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
        <ButtonGroup>
          <Button
            isDisabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Text>{page}</Text>
          <Button
            isDisabled={page === pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </ButtonGroup>

        {/* Modal for Update */}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add form fields for updating item */}
              {/* For example: */}
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
                defaultValue={selectedItem?.artilcleLink}
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
              {/* Add form fields for adding news */}
              {/* For example: */}
              <Input type="text" placeholder="Title" name="title" />
              <Input type="text" placeholder="Description" name="description" />
              {/* Add other form fields as needed */}
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

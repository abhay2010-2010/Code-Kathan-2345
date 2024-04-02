import React, { useState } from "react";
import {
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
  useDisclosure,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";

interface Article {
  title: string;
  Description: string;
  source: string;
  category: string;
  articleLink: string;
}

interface TableProps {
  data: Article[];
}

const data = [
  {
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
  },
  // Add more data items as needed
];

const Article: React.FC<TableProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Article | null>(null);

  const handleDelete = (index: number) => {
    // Implement delete logic here
    console.log("Deleting item at index:", index);
  };

  const handleUpdate = (item: Article) => {
    setSelectedItem(item);
    onOpen();
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    onClose();
  };

  return (
    <>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4" textAlign={"center"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Source</Th>
              <Th>Category</Th>
              <Th colSpan={2}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td>{item.title}</Td>
                <Td>{item.Description}</Td>
                <Td>{item.source}</Td>
                <Td>{item.category}</Td>
                <Td>
                  <Button colorScheme="blue" onClick={() => handleUpdate(item)}>
                    Update
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    ml={2}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Modal for Update */}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add form fields for updating item */}
              {/* For example: */}
              <Input type="text" defaultValue={selectedItem?.title} />
              <Textarea defaultValue={selectedItem?.Description} />
              <Input type="text" defaultValue={selectedItem?.source} />
              <Input type="text" defaultValue={selectedItem?.category} />
              <Input type="text" defaultValue={selectedItem?.articleLink} />
              {/* Add other form fields as needed */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
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

export default Article;

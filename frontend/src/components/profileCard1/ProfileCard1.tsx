import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IUser, IUserPatch } from "../../utils/authContext/types";
import { useAuth } from "../../utils/authContext/authContext";

interface Props {
  data: IUser;
}

export default function ProfileCard1({ data }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center py={6} flex={1} flexDirection="column" gap={4}>
        <Heading>Profile</Heading>
        <Box
          w={"270px"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit="cover"
            alt="#"
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={data?.image}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {data?.name}
              </Heading>
              <Text color={"gray.500"}>{data?.email}</Text>
            </Stack>

            <Button
              w={"full"}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              rightIcon={<ExternalLinkIcon />}
              onClick={onOpen}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Center>
      <UserModal isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
}

interface IUserModal {
  isOpen: boolean;
  onClose: () => void;
  data: IUser;
}

function UserModal({ isOpen, onClose, data }: IUserModal) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const {
    patchUser,
    authState: { loginLoading },
  } = useAuth();

  const [formData, setFormData] = useState<IUserPatch>({
    name: data.name,
    id: data.id,
    image: data?.image,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    let examplePromise = patchUser(formData);
    toast.promise(examplePromise.finally(onClose), {
      success: {
        title: "Updated Successfully",
        description: "Updated",
        duration: 3000,
      },
      error: {
        title: "Failed to Update",
        description: "Something wrong",
        duration: 3000,
      },
      loading: {
        title: "Updating",
        description: "Please wait",
        duration: 3000,
      },
    });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image Url</FormLabel>
              <Input
                placeholder="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              isLoading={loginLoading}
            >
              Save
            </Button>
            <Button onClick={onClose} isLoading={loginLoading}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

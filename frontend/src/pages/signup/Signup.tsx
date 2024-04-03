"use client";
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/authContext/authContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
interface InputState {
  name: string;
  email: string;
  password: string;
}
export function Signup() {
  const init: InputState = { name: "", email: "", password: "" };
  const [input, setInput] = useState<InputState>(init);
  const [error, setError] = useState<{ [key: string]: string }>({});
  const {
    signupUser,
    authState: { isAuth, loginLoading },
  } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    console.log(input);
    const validationError: { [key: string]: string } = {};
    if (!input.name.trim()) {
      validationError.name = "Name is required";
    }
    if (!input.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      validationError.email = "Email is not valid";
    }
    if (!input.password.trim()) {
      validationError.password = "Password is required";
    } else if (input.password.length < 6) {
      validationError.password = "Password should be 6 characters";
    }
    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      let examplePromise = signupUser(input);
      toast.promise(examplePromise, {
        success: {
          title: "Signup Successfully",
          description: `Welcome`,
          duration: 3000,
        },
        error: {
          title: "Failed to Signup",
          description: "Something's wrong",
          duration: 3000,
        },
        loading: {
          title: "Signing Up",
          description: "Please wait",
          duration: 3000,
        },
      });
      setInput(init);
    }
  };

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  return (
    <>
      <Navbar />
      <motion.div>
        <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"3xl"} mb={15} textAlign="center">
                Sign Up
              </Heading>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={input.name}
                />
                {error.name && <Box color="red">{error.name}</Box>}
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={input.email}
                />
                {error.email && <Box color="red">{error.email}</Box>}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={input.password}
                />
                {error.password && <Box color="red">{error.password}</Box>}
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.500"}>Forgot password?</Text>
                </Stack>
                <Button
                  colorScheme={"gray"}
                  variant={"solid"}
                  onClick={handleSubmit}
                  isLoading={loginLoading}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              width="600px"
              h=" 450px"
              mt="100px"
              border={30}
              src={
                "https://www.atoallinks.com/wp-content/uploads/2023/06/5030900_2636676-1200x675.jpg"
              }
            />
          </Flex>
        </Stack>
      </motion.div>
      <Footer />
    </>
  );
}

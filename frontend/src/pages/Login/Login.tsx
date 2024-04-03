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
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../utils/authContext/authContext";

interface InputState {
  email: string;
  password: string;
}
export function Login() {
  const init: InputState = { email: "", password: "" };
  const [input, setInput] = useState<InputState>(init);
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const { loginUser, authState } = useAuth();

  const handleSubmit = () => {
    console.log(input);
    loginUser(input);
    setInput(init);
    const validationError: { [key: string]: string } = {};

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
      alert("Form Successfully Submitted");
    }
  };

  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"4xl"} mb={10} textAlign="center">
            Login
          </Heading>
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
              isLoading={authState.loginLoading}
            >
              Log in
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
  );
}

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { useAuth } from "../../utils/authContext/authContext";


interface InputState {
  email: string;
  password: string;
}
export function Login() {
  const init: InputState = { email: "", password: "" };
  const [input, setInput] = useState<InputState>(init);
  const [error, setError] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const {
    loginUser,
    authState: { isAuth, loginLoading, user },
  } = useAuth();
  const toast = useToast();
  const handleSubmit = () => {
    console.log(input);
    const validationError: { [key: string]: string } = {};

    if (!input.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      validationError.email = "Email is not valid";
    }
    if (!input.password.trim()) {
      validationError.password = "Password is required";
    } else if (input.password.length < 5) {
      validationError.password = "Password should be 5 characters";
    }
    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      let examplePromise: Promise<string> = loginUser(input);
      toast.promise(examplePromise, {
        success: {
          title: "Login Successfully",
          description: `Welcome`,
          duration: 3000,
        },
        error: {
          title: "Failed to Login",
          description: "Something's wrong",
          duration: 3000,
        },
        loading: {
          title: "Logging in",
          description: "Please wait",
          duration: 3000,
        },
      });
      setInput(init);
    }
    
   
  };

  useEffect(() => {
    if (isAuth) {
      if (user?.role === "admin") {
        return navigate("/admin");
      }
      return navigate("/");
    }
  }, [isAuth]);

  return (
    <>
      <Stack justify={"space-between"} minH={"100vh"}>
        <Navbar />
        <motion.div>
          <Stack
            direction={{ base: "column", lg: "row" }}
            px={[2, 4, 6, 8]}
            gap={10}
          >
            <Flex flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Heading fontSize={"4xl"} mb={2} textAlign="center">
                  Login
                </Heading>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                    autoComplete="given-name"
                  />
                  {error.email && <Box color="red">{error.email}</Box>}
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={input.password}
                    autoComplete="given-name"
                  />
                  {error.password && <Box color="red">{error.password}</Box>}
                </FormControl>
                <Stack spacing={6}>
                  <Button
                    colorScheme={"gray"}
                    variant={"solid"}
                    onClick={handleSubmit}
                    isLoading={loginLoading}
                  >
                    Log in
                  </Button>
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1} justify={"center"}>
              <Image
                alt={"Login Image"}
                objectFit={"contain"}
                width={"600px"}
                src={
                  "https://www.atoallinks.com/wp-content/uploads/2023/06/5030900_2636676-1200x675.jpg"
                }
              />
            </Flex>
          </Stack>
        </motion.div>
        <Footer />
      </Stack>
    </>
  );
}

import {
  Box,
  Button,
  Flex,
  FormControl,
   Heading,
  Img,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface InputState {
  name: string;
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const init: InputState = { name: "", email: "", password: "" };
  const [input, setInput] = useState<InputState>(init);
  const [error, setError] = useState<{ [key: string]: string }>({});

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
      alert("Form Successfully Submitted");
    }
  };

  return (
    <>
      <Box
        height="680px"
        w="85%"
        m="auto"
        mt={30}
        borderRadius={10}
      >
        <Flex>
          <Box m={30} mt="100px">
            <Img
              width="650px"
              borderRadius={10}
              src="https://www.atoallinks.com/wp-content/uploads/2023/06/5030900_2636676-1200x675.jpg"
            />
          </Box>
          <Box height="520px" width="35%" ml={20} mt={7} bg="lightblue" borderRadius={20}>
            <Heading
              textAlign="center"
              fontWeight="600"
              fontFamily="monospace"
              mt="85px"
            >
              Login
            </Heading>
            <FormControl>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Enter name"
                ml={10}
                mt={10}
                border="2px"
                w="80%"
              />
              <Box bg="black" color="white" w="300px" ml={10}>
                {error.name && <span>{error.name}</span>}
              </Box>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter email"
                ml={10}
                mt={5}
                border="2px"
                w="80%"
              />
              <Box bg="black" color="white" w="300px" ml={10}>
                {error.email && <span>{error.email}</span>}
              </Box>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                placeholder="Enter password"
                ml={10}
                mt={5}
                border="2px"
                w="80%"
              />
              <Box bg="black" color="white" w="300px" ml={10}>
                {error.password && <span>{error.password}</span>}
              </Box>
              <Button
                size="lg"
                height="40px"
                width="200px"
                onClick={handleSubmit}
                mt={5}
                ml="130px"
                bg="black"
                color="white"
              >
                Login
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

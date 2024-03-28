import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { layout } from "../../routes/Allroutes";
import { Logo } from "../logo/Logo";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box>
      <Flex align="center">
        {isOpen ? (
          <>
            <Box ml={"7rem"}></Box>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px" px={4}>
                  <IoMdClose size={"2.5rem"} onClick={onClose} />
                </DrawerHeader>
                <DrawerBody p={0}>
                  <Center px={4} py={4}>
                    <InputGroup>
                      <InputRightElement pointerEvents="none">
                        <CiSearch size={"2rem"} />
                      </InputRightElement>
                      <Input type="tel" placeholder="Search" />
                    </InputGroup>
                  </Center>
                  <Center px={4} pb={4}>
                    <ButtonGroup display={{ base: "flex", md: "none" }}>
                      <Button onClick={() => navigate("./signup")}>
                        Register
                      </Button>
                      <Button onClick={() => navigate("./login")}>
                        Sign In
                      </Button>
                      <Button onClick={toggleColorMode}>
                        {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
                      </Button>
                    </ButtonGroup>
                  </Center>
                  {layout.map((item) => {
                    return (
                      <Stack key={item.id}>
                        {item.isVisible && (
                          <NavLink
                            to={item.path}
                            style={({ isActive }) => ({
                              fontWeight: isActive ? "bold" : "",
                              borderLeft: isActive
                                ? "9px solid gray"
                                : colorMode == "dark"
                                  ? "9px solid rgb(45,55,72)"
                                  : "9px solid white",
                            })}
                          >
                            <Divider />
                            <Box py={1} px={2} my={1} pl={4}>
                              <Text as="p">{item.name}</Text>
                            </Box>
                          </NavLink>
                        )}
                      </Stack>
                    );
                  })}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <Box>
              <GiHamburgerMenu size={"2.5rem"} onClick={onOpen} />
            </Box>
            <Box ml={"2rem"}>
              <CiSearch size={"2.5rem"} onClick={onOpen} />
            </Box>
          </>
        )}
        <Box ml={"auto"} mr="auto">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Box>
        <ButtonGroup display={{ base: "none", md: "unset" }}>
          <Button onClick={() => navigate("./signup")}>Register</Button>
          <Button onClick={() => navigate("./login")}>Sign In</Button>
          <Button onClick={toggleColorMode}>
            {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </ButtonGroup>
      </Flex>
      <Divider />
      <Flex justify="center" display={{ base: "none", md: "flex" }}>
        {layout.map(
          (item) =>
            item.isVisible && (
              <NavLink
                key={item.id}
                to={item.path}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                  borderBottom: isActive
                    ? "4px solid gray"
                    : colorMode == "dark"
                      ? "4px solid rgb(26,32,44)"
                      : "4px solid white",
                })}
              >
                <Box py={1} px={2} mt={2}>
                  <Text as="p">{item.name}</Text>
                </Box>
              </NavLink>
            ),
        )}
      </Flex>
      <Divider />
    </Box>
  );
};

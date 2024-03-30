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
import { Search } from "../search/Search";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box position={"sticky"} top={'0'} zIndex={5} bg={colorMode === "dark" ? "#1a202c" : "white"}>
      <Flex align="center" height={"4.5rem"}>
        {isOpen ? (
          <>
            <input type="text" />
            <Box ml={"7rem"}></Box>
            <Drawer
              placement={"left"}
              onClose={onClose}
              isOpen={isOpen}
              autoFocus={false}
            >
              <DrawerOverlay />
              <DrawerContent >
                <DrawerHeader borderBottomWidth="1px" px={4}>
                  <IoMdClose size={"2.5rem"} onClick={onClose} />
                </DrawerHeader>
                <DrawerBody p={0}>
                  <Box py={4}>
                    <Center px={4}>
                      <Search />
                    </Center>
                    <Center
                      px={4}
                      pt={4}
                      display={{ base: "flex", md: "none" }}
                    >
                      <ButtonGroup>
                        <Button
                          onClick={() => {
                            navigate("./signup");
                            onClose();
                          }}
                        >
                          <Text>Register</Text>
                        </Button>
                        <Button
                          onClick={() => {
                            navigate("./login");
                            onClose();
                          }}
                        >
                          <Text>Sign In</Text>
                        </Button>
                        <Button onClick={toggleColorMode}>
                          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                        </Button>
                      </ButtonGroup>
                    </Center>
                  </Box>
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
                                : colorMode === "dark"
                                  ? "9px solid rgb(45,55,72)"
                                  : "9px solid white",
                            })}
                          >
                            <Divider />
                            <Box py={1} px={2} my={1} pl={4} onClick={onClose}>
                              <Text as="p" fontSize={18}>
                                {item.name}
                              </Text>
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
            <Box ml={"2rem"} display={{ base: "none", md: "unset" }}>
              <CiSearch size={"2.5rem"} onClick={onOpen} />
            </Box>
          </>
        )}
        <Box
          position={"absolute"}
          left={"50%"}
          sx={{ transform: "translateX(-30%)" }}
        >
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Box>
        <ButtonGroup ml={"auto"} display={{ base: "none", md: "unset" }}>
          <Button onClick={() => navigate("./signup")}>Register</Button>
          <Button onClick={() => navigate("./login")}>Sign In</Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
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
                    : colorMode === "dark"
                      ? "4px solid rgb(26,32,44)"
                      : "4px solid white",
                })}
              >
                <Box py={1} px={2} mt={2}>
                  <Text as="p" fontSize={16}>
                    {item.name}
                  </Text>
                </Box>
              </NavLink>
            ),
        )}
      </Flex>
      <Divider />
    </Box>
  );
};

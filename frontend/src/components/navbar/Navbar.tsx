import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { layout } from "../../routes/Allroutes";
import { Logo } from "../logo/Logo";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex align="center">
        <GiHamburgerMenu size={30} />
        <CiSearch size={30} />
        <Box w="7rem" ml={"auto"} mr="auto">
          <Logo />
        </Box>
        <ButtonGroup>
          <Button>Register</Button>
          <Button>Sign In</Button>
          <Button onClick={toggleColorMode}>
            {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </ButtonGroup>
      </Flex>
      <Divider />
      <Flex justify="center">
        {layout.map(
          (item) =>
            item.isVisible && (
              <NavLink
                key={item.id}
                to={item.path}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                  borderBottom: isActive ? "4px solid gray" : "",
                })}
              >
                <Box py={1} px={2} mt={2}>
                  {item.name}
                </Box>
              </NavLink>
            ),
        )}
      </Flex>
    </Box>
  );
};

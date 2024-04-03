"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { CiBoxList } from "react-icons/ci";
import {
  FiChevronDown,
  FiMenu,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";
import { GrArticle } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: MdOutlineDashboard, route: "/admin/dashboard/" },
  { name: "Trending", icon: FiTrendingUp, route: "/admin/trending/" },
  { name: "Category", icon: CiBoxList, route: "/admin/category/" },
  {
    name: "Article",
    icon: GrArticle,
    route: "/admin/article?_limit=6&_page=1",
  },
  { name: "Users", icon: FiSettings, route: "/admin/users?_limit=6&_page=1" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      top={"0px"}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <NavLink to="/admin/dashboard">
            <Logo />
          </NavLink>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  to,
  ...rest
}: NavItemProps & { to: string }) => {
  return (
    <NavLink
      to={`${to}`}
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "",
        color: isActive ? "cyan" : "",
      })}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const navigate = useNavigate();
  // if (!isAuth) {
  //   navigate("/");
  // }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
      sx={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: "2",
      }}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <NavLink to="/admin/dashboard">
          <Logo />
        </NavLink>
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Button
          onClick={toggleColorMode}
          display={{ base: "none", md: "flex" }}
        >
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Amir</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
              <Button
                onClick={toggleColorMode}
                display={{ base: "flex", md: "none" }}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={"relative"} bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
    </Box>
  );
};

export default SidebarWithHeader;

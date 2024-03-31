// export default function Footer() {
//   return (
//     <footer className="footer">
//     <div className="container">
//         <div className="footer-content">
//             <div className="footer-section about">
//                 <img src="" alt="logo" className='logo' />
//                 <p>A brief description of your company or website.</p>
//                 <div className="social-links">
//                     <a href="#"><i className="fab fa-facebook"></i></a>
//                     <a href="#"><i className="fab fa-twitter"></i></a>
//                     <a href="#"><i className="fab fa-instagram"></i></a>
//                 </div>
//             </div>
//             <div className="footer-section links">

//                     <a href="#">Home</a>
//                     <a href="#">About</a>
//                     <a href="#">Services</a>
//                     <a href="#">Contact</a>

//             </div>
//             <div className="footer-section contact-form">
//                 <h2>Contact Us</h2>
//                 <form action="#">
//                     <input type="email" name="email" className="text-input contact-input" placeholder="Your email address"/>
//                     <textarea  name="message" className="text-input contact-input" placeholder="Your message"></textarea>
//                     <button type="submit" className="btn btn-big contact-btn">
//                         <i className="fas fa-envelope"></i>
//                         Send
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>

//     <div className='footer-bottom1'>
//       <p>Terms of Use</p>
//       <p>About the BBC</p>
//       <p>Privacy Policy</p>
//       <p>Cookies</p>
//       <p>Accessibility Help</p>
//       <p>Contact the BBC</p>
//       <p>Advertise with us</p>
//       <p>Do not share or sell my info</p>
//     </div>
//     <div className="footer-bottom">
//         &copy; 2024 BBC. All rights reserved.  The BBC is not responsible for the content of external sites. Read about our approach to external linking.<span className='span'> Read about our approach to external linking.</span>
//     </div>
// </footer>

//   );
// }

"use client";

import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { layout } from "../../routes/Allroutes";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import ManualClose from "./Modal";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <Stack direction={"row"} spacing={6} flexWrap={"wrap"}>
          {layout.map((item) => {
            return (
              <Stack key={item.id}>
                {item.isVisible && (
                  <NavLink to={item.path}>
                    <Divider />
                    <Box py={1} px={2} my={1} pl={4} onClick={onClose}>
                      <Text as="p" fontSize={14}>
                        {item.name}
                      </Text>
                    </Box>
                  </NavLink>
                )}
              </Stack>
            );
          })}
        </Stack>
      </Container>
      <Box ml={"150px"}>
        <ManualClose />
      </Box>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize={14}>
            © 2024 BBC. All rights reserved. The BBC is not responsible for the
            content of external sites. Read about our approach to external
            linking.
            <span className="span">
              {" "}
              Read about our approach to external linking.
            </span>
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Button,
  Icon,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import ThemeToggleButton from "./theme-toggle-button";
// import { IoLogoGithub } from "react-icons/io5";


const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = props => {
  // Pull the current path from props (useful for highlighting active links)
  const { path } = props;

  return (
    <Box
      as="nav" // semantic <nav> element
      position="fixed" // stick to the top
      top={0} // align at the very top
      w="100%" // full viewport width
      bg={useColorModeValue('#ffffff40', '#20202380')} // semi-transparent white in light mode, transparent in dark
      zIndex={1} // sit above page content
      {...props}
    >
    <Container display ="flex" p>

    </Container>
    </Box>
  );
};

export default Navbar;


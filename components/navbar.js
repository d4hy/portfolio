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
// If you meant to use a config object but never set it…

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

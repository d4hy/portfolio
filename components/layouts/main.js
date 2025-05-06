// Import Next.js’s <Head> component for managing <head> tags (meta, title, etc.)
import Head from "next/head";

// Import your custom Navbar component
import Navbar from "../navbar.js";

// Import Chakra UI layout primitives using destructuring import:
// { Box, Container } pulls these named exports out of the module
import { Box, Container } from "@chakra-ui/react";

// Define the Main layout component, unpacking props via function-parameter destructuring:
// - children: the React nodes for the specific page’s content (e.g., what you return from each page component)
// - router: Next.js’s router object, giving access to route info like the current URL path
const Main = ({ children, router }) => {
  return (
    // <Box> is rendered as a <main> tag for semantics, with bottom padding of 8
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>David Hoang – Homepage</title>
      </Head>

      {/*
        <Navbar path={router.asPath} />:
        - {router.asPath} is a JSX expression container injecting the JS value
        - Lets Navbar know the current URL so it can highlight the active link
      */}
      <Navbar path={router.asPath} />

      {/*
        <Container> centers content and constrains max-width:
        - maxW="container.md" uses a theme token
        pt={14} gives you consistent, theme-based spacing (56px).
        style={{ paddingTop: "90px" }} is a one-off adjustment (90px) that isn’t on the theme scale—useful for specific tweaks like navbar height.
      */}
      <Container
        // 1) maxW="container.md"
        //    • “maxW” stands for max-width.
        //    • The value “container.md” is a theme token; by default Chakra defines:
        //       theme.breakpoints = { sm: "30em", md: "48em", lg: "62em", ... }
        //       theme.sizes.container.md = "48em"  // i.e. 768px
        //    • So this prop ensures the container’s CSS includes:
        //        max-width: 48em;  /* content will never stretch wider than ~768px */
        maxW="container.md"
        // 2) pt={14}
        //    • “pt” is shorthand for padding-top.
        //    • Chakra’s spacing scale (theme.space) is multiples of 4px:
        //        space: [0, 4, 8, 12, 16, …, 56, 60, …]
        //      where space[14] === 14 * 4px = 56px.
        //    • So this becomes:
        //        padding-top: 56px;
        pt={14}
        // 3) style={{ paddingTop: "90px" }}
        //    • This is a plain React inline-style object (not using the theme).
        //    • You’re passing a JS object inside JSX braces: { … }.
        //    • It adds an extra:
        //        padding-top: 90px;
        //    • Commonly used to offset for a fixed-height navbar so your content
        //      doesn’t sit “under” the header.
        style={{ paddingTop: "90px" }}
      >
        {/*
          {children} is a JSX expression container that renders the injected page content
        */}
        {children}
      </Container>
    </Box>
  );
};

// Export Main as the default export (ES module syntax)
export default Main;

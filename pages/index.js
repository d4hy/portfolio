import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("blue.50", "whiteAlpha.300")}
        p={3}
        mb={6}
        align="center"
      >
        {/* Just a special character for apostrophe*/}
        Hello, I&apos;m a new graduate looking for entry roles within tech!
      </Box>

      <Box
        //  // Responsive style prop for the CSS `display` property.
        // - Uses Chakra’s breakpoint system via an object:
        //   • Below the “md” breakpoint (<48em/768px), Box falls back to its default (usually `display: block`).
        //   • At “md” and above (>=48em), it applies `display: flex`
        display={{ md: "flex" }}
      >
        <Box
          // // Sets the CSS `flex-grow` property on this flex item:
          // - flexGrow={1} lets this Box expand to fill any extra space in its parent flex container.
          // - If there are multiple flex items with flexGrow set, they divide remaining space
          //   proportionally based on their flexGrow values.
          flexGrow={1}
        >
          <Heading
            as="h2"
            variant="page-title"
            // → The `variant` prop applies a named style pattern defined in your theme.
            //    “page-title” might set a specific font size, weight, line-height, and color
            //    that you’ve configured for your top-level titles.
          >
            David Hoang
          </Heading>
          <p> Budding Software Engineer</p>
        </Box>
      </Box>
      <div> Hello </div>
    </Container>
  );
};
export default Page;

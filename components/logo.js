// Import Next.js Link component for client-side page transitions
import Link from "next/link";

// Import Next.js Image component for automatically optimized, responsive images
import Image from "next/image";

// Import Chakra UI’s Text component for styled text and
// the useColorModeValue custom  hook for theming based on light/dark mode

import { Text, useColorModeValue } from "@chakra-ui/react";

// Import Emotion’s `styled` helper to create styled React components
import styled from "@emotion/styled";

// Create a styled <span> component called LogoBox
// This will wrap your logo image/text and apply custom styles
const LogoBox = styled.span`
  font-weight: bold; /* Make any text inside bold */
  font-size: 18px; /* Set the base font size */
  display: inline-flex; /* Lay out children in a row but flow with text */
  align-items: center; /* Vertically center items within the flex container */
  height: 30px; /* Fix the logo container’s height */
  line-height: 20px; /* Control text baseline for any <Text> children */
  padding: 10px; /* Space around the logo content */

  /* 
    &:hover img 
    └── &           = this component’s root selector (e.g. .css-123abc:hover img)
  */
  &:hover img {
    transform: rotate(20deg);
  }
`;

// Define the Logo component
const Logo = () => {
  // Dynamically pick the correct image file based on light/dark mode:
  // - light:  "/images/footprint-light.png"
  // - dark:   "/images/footprint-dark.png"
  // hook returns one of the two values that you set as the parameters.
  const footPrintImg = `/images/footprint${useColorModeValue("-light", "-dark")}.png`;

  return (
    // Next.js <Link> for client-side navigation back to the homepage (href="/")
    <Link href="/">
      {/* Anchor tag is required inside <Link> to create a clickable element */}
      <a>
        {/* LogoBox wraps and styles the image + text */}
        <LogoBox>
          {/* 
            Next.js <Image> for optimized loading:
            - src: dynamic path from footPrintImg
            - width/height: fixed dimensions in pixels
            - alt: accessible description
          */}
          <Image src={footPrintImg} width={20} height={20} alt="logo" />

          {/*
            Chakra <Text> for the name:
            - color: switches between dark/light text based on mode
            - fontFamily: custom font
            - ml (margin-left): spacing between the image and text
          */}
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            David Hoang
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;

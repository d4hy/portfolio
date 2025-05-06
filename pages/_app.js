// pages/_app.js

// 1) Import Chakra’s top-level provider so you can use its theming + components everywhere
import { ChakraProvider } from '@chakra-ui/react';

// 2) Import your custom Layout component (e.g. header, footer, global styles, etc.)
import Layout from '../components/layouts/main';

// 3) This is the “custom App” component Next.js uses to initialize pages.
//    By default Next.js will render <App> around every page.
function Website({ Component, pageProps, router }) {
  return (
    // 4) Wrap the entire app in ChakraProvider so all pages/components
    //    can use Chakra’s theme, color mode, and style props.
    <ChakraProvider>
      {/* 
        5) Wrap each page in your Layout:
           - router is passed so Layout (and Navbar) can know the current path
           - this is where you put site-wide chrome (navbars, sidebars, footers)
      */}
      <Layout router={router}>
        {/*
          6) Render the active page’s component:
             - Component is the actual page (e.g. pages/index.js or pages/about.js)
             - pageProps are props returned from getStaticProps/getServerSideProps
             - key={router.route} forces React to remount the component on route change
               (useful if you need a fresh state or want exit/enter animations)
        */}
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

// 7) Export as default so Next.js picks up your custom App
export default Website;

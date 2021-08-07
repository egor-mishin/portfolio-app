import * as React from "react";
import { FC } from "react";
import NavBar from "../components/common/NavBar";
import Logo from "../components/common/Logo";
import Footer from "../components/common/Footer";
import Head from "next/head";
import Contacts from "../components/Contacts";

type Props = {}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  const GTM_ID = 'GTM-T93MF2K'
  return (
    <>
      <Head>
          <title>Egor Mishin | Front-end developer</title>
          <link rel="icon" href="/favicon.ico" />
          <>
            {/* Google Tag Manager */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`,
              }}
            />
            {/* End Google Tag Manager */}
            {/* Google Tag Manager (noscript) */}
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
            {/* End Google Tag Manager (noscript) */}
          </>


          // Ubuntu font
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
            rel="stylesheet"
          />

          // Source Sans Pro
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

      </Head>
        <NavBar />
        <Logo cssClass="topLogo" />
        {children}
        <Contacts />
        <Footer />
    </>
  );
};

export default Layout;
import * as React from "react";
import { FC } from "react";
import NavBar from "../components/common/NavBar";
import Logo from "../components/common/Logo";
import Footer from "../components/common/Footer";
import Head from "next/head";
import Contacts from "../components/Contacts";

type Props = {}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  const GMT_ID = 'GTM-T93MF2K'
  return (
    // GTM-T93MF2K
    <>
        <NavBar />
        <Logo cssClass="topLogo" />
        {children}
        <Contacts />
        <Footer />
    </>
  );
};

export default Layout;
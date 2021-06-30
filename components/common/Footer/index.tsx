import * as React from "react";
import { FC } from "react";
import { useQuery } from "@apollo/client";
import { FOOTER_QUERY } from "../../../api/api";
import css from "./index.module.css";
import Logo from "../Logo";
import Preloader from "../Preloader";


type Props = {}

const Footer: FC<Props> = (): JSX.Element => {
  const { loading, error, data } = useQuery<any>(FOOTER_QUERY);
  const date = new Date()

  if (error) return <div>Failed to load</div>
  if (loading) return <div><Preloader/></div>

  const { footer } = data;

  return (
    <footer className={css.footer}>
        <p className={css.copyright}>
          <span>{date.getFullYear()}&copy;</span>{footer.copyright}
        </p>
        <Logo cssClass={'bottomLogo'}/>
    </footer>
  );
};

export default Footer;

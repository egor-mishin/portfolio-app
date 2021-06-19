import * as React from "react";
import { FC } from "react";
import { useQuery } from "@apollo/client";
import { FOOTER_QUERY } from "../../../api/api";
import css from "./index.module.css";
import Logo from "../Logo";


type Props = {}

const Footer: FC<Props> = (): JSX.Element => {
  const { loading, error, data } = useQuery<any>(FOOTER_QUERY);
  const date = new Date();

  if (error) return <div>Failed to load</div>;
  if (loading) return <div></div>;

  const { footer } = data;

  return (
    <footer>
      <div className="container--wider">
        <p className={css.copyright}>
          {date.getFullYear()}&copy;{footer.copyright}
        </p>
        <Logo />
      </div>

    </footer>
  );
};

export default Footer;

import * as React from 'react';
import {FC} from "react";
import { languages } from "./languages";
import Lang from "./Lang/index.module";
import css  from "./index.module.css";

type Props = {
  languages: []
};

const  LangConsole: FC<Props> = (): JSX.Element => {
  return (
    <div className={css.langContainer}>
      {
        languages.map(lang => <Lang lang={lang} />)
      }
    </div>
  )
}

export default  LangConsole

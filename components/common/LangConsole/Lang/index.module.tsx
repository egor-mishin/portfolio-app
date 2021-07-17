import * as React from 'react';
import {FC} from "react";
import Link from 'next/link';
import css  from './index.module.css';

type Props = {
    lang: string
};

const  Lang: FC<Props> = ({lang}): JSX.Element => {
    return (
      <div className={css.langLink}>
          <Link href={"#"}>{lang}</Link>
      </div>

    )
}

export default  Lang

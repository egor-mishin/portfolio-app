import * as React from 'react';
import {FC} from "react";
import Link from 'next/link';
import css  from './index.module.css';

type Props = {
    lang: string
};

const  Lang: FC<Props> = ({lang}): JSX.Element => {
    return (
        <Link href={"#"} className={css.langLink}>{lang}</Link>
    )
}

export default  Lang

import * as React from 'react';
import {FC} from "react";
import css from './index.module.css'

type Props = {
    title: string
    url: string
};

const  ProjectImage: FC<Props> = ({url, title}): JSX.Element => {
    return (
      <img src={url} alt={title} className={css.projectImage}/>
    )
}

export default  ProjectImage

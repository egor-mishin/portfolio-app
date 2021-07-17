import * as React from 'react';
import {FC} from "react";
import css from './index.module.css'

type Props = {
    title: string
    url: string
};

const  ProjectImage: FC<Props> = ({url, title}): JSX.Element => {
    return (
      <div  data-aos="fade-left"
            data-aos-delay="15"
            data-aos-easing="linear"
            data-aos-offset="0">
          <img src={url} alt={title} className={css.projectImage}/>
      </div>

    )
}

export default  ProjectImage

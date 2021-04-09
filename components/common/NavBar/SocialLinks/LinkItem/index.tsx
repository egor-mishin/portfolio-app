import * as React from 'react';
import {FC} from "react";
import  css from "../LinkItem/index.module.css"

type Props = {
    imageUrl: string
    link: string
    title: string
};

const  LinkItem: FC<Props> = ({imageUrl,title, link}): JSX.Element => {

    return (
        <a href={link}  className={css.socialLink}>
            <img
                src={imageUrl}
                alt={title}
                height={30}
                width={30}
            />
        </a>
    )
}

export default  LinkItem

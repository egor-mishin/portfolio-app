import Link from 'next/link';
import * as React from 'react';
import {FC} from "react";
import Image from "next/image";

type Props = {
    imageUrl: string
    link: string
    title: string
};

const  LinkItem: FC<Props> = ({imageUrl,title, link}): JSX.Element => {

    return (
        <a href={link} >
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

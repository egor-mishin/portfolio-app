import Link from 'next/link';
import * as React from 'react';
import {FC} from "react";

type Props = {
    title: string
    id: number
};

const  BlogListItem: FC<Props> = ({id, title}): JSX.Element => {
    return (
        <Link href={`/blog/${id}`}>{title}</Link>
    )
}

export default  BlogListItem

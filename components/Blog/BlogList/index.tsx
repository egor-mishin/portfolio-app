import * as React from 'react';
import {FC} from "react";
import BlogListItem from "./BlogListItem";

type Props = {
    blogItems: any
};

const  BlogList: FC<Props> = ({blogItems}): JSX.Element => {
    return (
        <>
            {
              blogItems.map(item => <BlogListItem title={item.title} id={item.id}/>)
            }
        </>
    )
}

export default  BlogList

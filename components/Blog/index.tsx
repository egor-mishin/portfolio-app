import * as React from 'react'
import {FC} from "react"
import css from './index.module.css'
import Title from "../common/Title";
import { useQuery } from "@apollo/client";
import { CurrentProjectSection } from "../../api/types";
import { BLOG_ITEMS_QUERY } from "../../api/api";
import { BlogItem } from "./BlogItem";

type Props = {

};

const  Blog: FC<Props> = (): JSX.Element => {
    const { loading, error, data } = useQuery<any>(BLOG_ITEMS_QUERY);

    if (error) return <div>Failed to load</div>;
    if (loading) return <div></div>;

    const { blogItems } = data;
    console.log(blogItems)


    return (
      <section className={css.blogSection}>
        <div className="container">
            <Title>Мой блог.</Title>
            <div className={css.blogItemsBox}>
                {
                    blogItems.map((item) => <BlogItem title={item.title} image={item.blogImage} slug={item.slug} textBox={item.textBox} />)
                }
            </div>
        </div>
      </section>
    )
}

export default  Blog

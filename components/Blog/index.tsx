import * as React from 'react'
import {FC} from "react"
import css from './index.module.css'
import Title from "../common/Title";
import { BlogItem } from "./BlogItem";

type Props = {
    blogItems: any
}

const  BlogItems: FC<Props> = ({blogItems}): JSX.Element => {
    return (
      <section className={css.blogSection}>
        <div className="container">
            <Title>Мой блог.</Title>
            <div className={css.blogItemsBox}>
                {
                    blogItems.map((item) => <BlogItem id={item.id} title={item.title} image={item.blogImage} slug={item.slug} textBox={item.textBox} />)
                }
            </div>
        </div>
      </section>
    )
}

export default  BlogItems

import * as React from 'react'
import {FC} from "react"
import css from './index.module.css'
import Title from "../common/Title";
import { BlogItem } from "./BlogItem";
import Button from "../common/Button";

type Props = {
    blogItems: any
    mainTitle?: string
    mainButton?: {title: string}
}

const  BlogItems: FC<Props> = ({blogItems, mainTitle, mainButton}): JSX.Element => {
    return (
      <section className={css.blogSection}>
        <div className="container">
            {
                mainTitle && <Title>{mainTitle}</Title>
            }
            <div className={css.blogItemsBox}>
                {
                    blogItems.map((item) => <BlogItem id={item.id} title={item.title} image={item.blogImage} slug={item.slug} textBox={item.textBox} />)
                }
            </div>
            {

                mainButton &&  <div className={'buttonContainer'}>
                    <Button url={'/blog'} >{mainButton.title}</Button>
                </div>
            }
        </div>
      </section>
    )
}

export default  BlogItems

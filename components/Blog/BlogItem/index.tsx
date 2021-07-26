import * as React from "react"
import css from './index.module.css'
import Button from "../../common/Button"

type Props = {
  id: number
  title: string
  image: { url: string }
  slug: string
  textBox: string

}
export const BlogItem = ({ title, image, textBox, id }:Props) => {
  return (
    <div className={css.blogItem}
         data-aos="fade-up"
         data-aos-delay="15"
         data-aos-easing="linear"
         data-aos-offset="0">
      <img
        className={css.blogImg}
        src={image.url}
        alt={title}
      />
      <article className={css.textBox}>
        <h3 className={css.blogItemTitle}>{title}</h3>
        <p className={css.blogItemText}>
          {textBox}
        </p>
        <Button url={`/blog/${id}`}>Read more</Button>
      </article>
    </div>
  )
}
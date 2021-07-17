import * as React from "react"
import css from './index.module.css'
import IconsSet from "../../common/IconsSet";
import LinkIcons from "../../common/LinkIcons";
import { IconItemType, LinkType } from "../../../api/type";

type Props = {
  title: string
  image: { url: string }
  textBox: string
  iconsSection: { title: string; iconItems: IconItemType[] }
  Links: {link: LinkType[]}

}
export const PortfolioItem = ({ title, image, textBox, iconsSection, Links }:Props) => {
  return (
    <div className={css.portfolioItem}
         data-aos="fade-up"
         data-aos-delay="15"
         data-aos-easing="linear"
         data-aos-offset="0">
      <article className={css.textBox}>
        <h3 className={css.portfolioItemTitle}>{title}</h3>
        <p className={css.portfolioItemText}>
          {textBox}
        </p>
      </article>
      <img
        className={css.portfolioImg}
        src={image.url}
        alt={title}
      />
      <IconsSet iconsSection={iconsSection} small={"small"}/>
      <LinkIcons links = {Links.link} />
    </div>
  )
}
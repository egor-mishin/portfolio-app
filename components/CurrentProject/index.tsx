import * as React from "react"
import { FC } from "react"
import css from "./index.module.css"
import Title from "../common/Title"
import ProjectImage from "./ProjectImage"
import IconsSetCurrentProject from "../common/IconsSetCurrentProject";
import LinkIcons from "../common/LinkIcons"
import { IconItemType, LinkType } from "../../api/types"


type Props = {
  title: string
  image: {url: string}
  textBox: string
  iconsSection: IconItemType[]
  Links: LinkType[]
}

const CurrentProject: FC<Props> = ({image, title,textBox,iconsSection, Links}): JSX.Element => {
    return (
      <section className={css.currentProjectSection}>
        <div className="container">
          <Title>Мой текущий проект</Title>
          <div className={css.currentProjectBox}>
            <ProjectImage url={image.url} title={title}/>
            <div className={css.projectDescriptionBox}>
              <article>
                <h3 className={css.currentProjectTitle}>{title}</h3>
                <p className={css.currentProjectText}>{textBox}</p>
              </article>
              <IconsSetCurrentProject iconsSection={iconsSection}/>
              <LinkIcons  links={Links}/>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CurrentProject;

import * as React from "react";
import { FC } from "react";
import { useQuery } from "@apollo/client";
import { CURRENT_PROJECT_SECTION_QUERY } from "../../api/api";
import css from "./index.module.css";
import Title from "../common/Title";
import { CurrentProjectSection } from "../../api/types";
import ProjectImage from "./ProjectImage";
import IconsSetCurrentProject from "../common/IconsSetCurrentProject";
import LinkIcons from "../common/LinkIcons";


type Props = {}

const CurrentProject: FC<Props> = (): JSX.Element => {
    const { loading, error, data } = useQuery<CurrentProjectSection>(CURRENT_PROJECT_SECTION_QUERY);

    if (error) return <div>Failed to load</div>;
    if (loading) return <div></div>;

    const { homePage } = data;
    console.log(homePage.currentProjectSection)

    return (
      <section className={css.currentProjectSection}>
        <div className="container">
          <Title>Мой текущий проект</Title>
          <div className={css.currentProjectBox}>
            <ProjectImage url={homePage.currentProjectSection.image.url} title={homePage.currentProjectSection.title}/>
            <div className={css.projectDescriptionBox}>
              <article>
                <h3 className={css.currentProjectTitle}>{homePage.currentProjectSection.title}</h3>
                <p className={css.currentProjectText}>{homePage.currentProjectSection.textBox}</p>
              </article>
              <IconsSetCurrentProject iconsSection={homePage.IconsSection}/>
              <LinkIcons  links={homePage.currentProjectSection.Links}/>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CurrentProject;

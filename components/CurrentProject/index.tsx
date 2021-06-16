import * as React from "react";
import { FC } from "react";
import { useQuery } from "@apollo/client";
import { CURRENT_PROJECT_SECTION_QUERY } from "../../api/api";
import css from "./index.module.css";
import Title from "../common/Title";


type Props = {}

const CurrentProject: FC<Props> = (): JSX.Element => {
    const { loading, error, data } = useQuery<CurrentProjectSectionType>(CURRENT_PROJECT_SECTION_QUERY);

    if (error) return <div>Failed to load</div>;
    if (loading) return <div></div>;

    const { portfolioItems } = data;

    return (
      <>
          <div className="container">
              <Title>Мой текущий проект</Title>
          </div>

          <section className={css.portfolioSection}>

          </section>
      </>
    );
};

export default CurrentProject;

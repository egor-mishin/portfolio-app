import * as React from "react";
import { FC } from "react";
import { useQuery } from "@apollo/client";
import { PORTFOLIO_SECTION_QUERY } from "../../api/api";
import css from "./index.module.css";
import { PortfolioSectionType } from "../../api/types";
import { PortfolioItem } from "./PortfolioItem";
import Title from "../common/Title";
import Button from "../common/Button";


type Props = {}

const IntroSection: FC<Props> = (): JSX.Element => {
  const { loading, error, data } = useQuery<PortfolioSectionType>(PORTFOLIO_SECTION_QUERY);

  if (error) return <div>Failed to load</div>;
  if (loading) return <div></div>;

  const { portfolioItems } = data;

  return (
  	<>
			<div className="container">
				<Title>Мои работы.</Title>
			</div>

			<section className={css.portfolioSection}>
				<div className="container">

					<div className="wrapper">
						<div className={css.portfolioItemsContainer}>
							{
								portfolioItems.map((item) => <PortfolioItem {...item} />)
							}
						</div>

					</div>
				</div>
			</section>
			<div className={"container"}>
				<Button url="/portfolio/">Посмотреть все работы</Button>
			</div>
		</>
  );
};

export default IntroSection;

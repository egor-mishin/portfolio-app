import * as React from "react";
import { FC } from "react";
import css from "./index.module.css";
import { PortfolioItem } from "./PortfolioItem";
import Title from "../common/Title";
import Button from "../common/Button";


type Props = {
	portfolioItems: any
}

const PortfolioItems: FC<Props> = ({portfolioItems}): JSX.Element => {

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

export default PortfolioItems;

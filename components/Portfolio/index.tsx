import * as React from "react";
import { FC } from "react";
import css from "./index.module.css";
import { PortfolioItem } from "./PortfolioItem";
import Title from "../common/Title";
import Button from "../common/Button";


type Props = {
	portfolioItems: any
	mainTitle?: string
	mainButton?: {title: string}
}

const PortfolioItems: FC<Props> = ({portfolioItems, mainTitle, mainButton}): JSX.Element => {
  return (
  	<section>
			<div className="container">
				{
					mainTitle && <Title>{mainTitle}</Title>
				}
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
			<div className={"buttonContainer"}>
				<Button url="/portfolio/">{mainButton && mainButton.title}</Button>
			</div>
		</section>
  );
};

export default PortfolioItems;

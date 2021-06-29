import * as React from "react"
import { FC } from "react"
import IntroSection from "../components/IntroSection";
import Layout from "../layouts";
import PortfolioItems from "../components/Portfolio";
import { useQuery } from "@apollo/client";
import { PORTFOLIO_PAGE_QUERY } from "../api/api";

type Props = {}

const Portfolio: FC<Props> = (): JSX.Element => {

	const {error, loading, data} = useQuery<any>(PORTFOLIO_PAGE_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div>Loading...</div>



	return (
		<Layout>
			<IntroSection {...data.portfolioPage.introSection}/>
			<main>
				<PortfolioItems portfolioItems={data.portfolioItems}/>
			</main>
		</Layout>
	)
}

export default Portfolio

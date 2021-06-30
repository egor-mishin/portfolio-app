import * as React from "react"
import { FC } from "react"
import { useQuery } from "@apollo/client"
import IntroSection from "../components/IntroSection"
import Layout from "../layouts"
import { BLOG_PAGE_QUERY } from "../api/api"
import BlogItems from "../components/Blog"
import Preloader from "../components/common/Preloader";

type Props = {}

const Blog: FC<Props> = (): JSX.Element => {

	const {error, loading, data} = useQuery<any>(BLOG_PAGE_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div><Preloader /></div>

	return (
		<Layout>
			<IntroSection {...data.blogPage.introSection}/>
			<main>
				<BlogItems blogItems={data.blogItems}/>
			</main>
		</Layout>
	)
}

export default Blog

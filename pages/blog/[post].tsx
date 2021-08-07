import { FC } from "react"
import { useQuery } from "@apollo/client"
import {SINGLE_BLOG_PAGE} from "../../api/api"
import Layout from "../../layouts"
import * as React from "react"
import { useRouter } from "next/router"
import css from "../../styles/blogPage.module.css"
import BackButton from "../../components/common/BackButton";
import Preloader from "../../components/common/Preloader";
import Title from "../../components/common/Title";
import ReactMarkdown from "react-markdown"
import BlogList from "../../components/Blog/BlogList";

type Props = {}

const Post: FC<Props> = (): JSX.Element => {
  const router = useRouter()

  const {error, loading, data} = useQuery<any>(SINGLE_BLOG_PAGE,{
    variables: { id: router.query.post }
  })

  if (error) return <div>Failed to load</div>
  if (loading) return <div><Preloader /></div>

  const { blogItem } = data
  const { blogItems } = data

  return (
    <Layout>
      <div className="container">
       <div className={css.postContainer}>
        <main className={css.mainContent}>
          <Title>{blogItem.title}</Title>
          <article>
            <ReactMarkdown>
              {blogItem.post}
            </ReactMarkdown>
          </article>
        </main>
         <aside>
          <BlogList  blogItems={blogItems}/>
         </aside>
       </div>
        <BackButton />
      </div>
    </Layout>
  )
}

export default Post


// <IntroSectionType {...data.blogPage.introSection}/>
// <main>
//   <BlogItems blogItems={data.blogItems}/>
// </main>
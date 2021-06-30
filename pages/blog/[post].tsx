import { FC } from "react"
import { useQuery } from "@apollo/client"
import {SINGLE_BLOG_PAGE} from "../../api/api"
import Layout from "../../layouts"
import * as React from "react"
import { useRouter } from "next/router"
import css from "../../styles/blogPage.module.css"
import BackButton from "../../components/common/BackButton";
import Preloader from "../../components/common/Preloader";

type Props = {}

const Post: FC<Props> = (): JSX.Element => {
  const router = useRouter()

  const {error, loading, data} = useQuery<any>(SINGLE_BLOG_PAGE,{
    variables: { id: router.query.post }
  })

  if (error) return <div>Failed to load</div>
  if (loading) return <div><Preloader /></div>

  const { blogItem } = data

  return (
    <Layout>
      <div className="container">
       <div className={css.postContainer}>
         <p>{blogItem.title}</p>
       </div>
        <BackButton />
      </div>
    </Layout>
  )
}

export default Post


// <IntroSection {...data.blogPage.introSection}/>
// <main>
//   <BlogItems blogItems={data.blogItems}/>
// </main>
import Layout from "../layouts";
import { useQuery } from "@apollo/client";
import { HomePageType } from "../api/type";
import { HOMEPAGE_QUERY } from "../api/api";
import * as React from "react";
import IntroSection from "../components/IntroSection";
import Skills from "../components/Skills";
import PortfolioItems from "../components/Portfolio";
import CurrentProject from "../components/CurrentProject";
import Blog from "../components/Blog";
import Preloader from "../components/common/Preloader";

export default function Home() {
  const { error, loading, data } = useQuery<HomePageType>(HOMEPAGE_QUERY);

  if (error) return <div>Failed to load</div>;
  if (loading) return <div><Preloader /></div>;

  const { homePage } = data;
  const { skillItems } = data;
  const { blogItems } = data;
  const { portfolioItems } = data;

  return (
    <Layout>
      <IntroSection {...homePage.introSection } />
      <main>
        <Skills skillItems={skillItems}  title={homePage.skillsSection.title }/>
        <PortfolioItems portfolioItems={portfolioItems} mainTitle={homePage.portfolioSection.title}
                        mainButton={homePage.portfolioSection.button} onHomePage/>
        <CurrentProject {...homePage.currentProjectSection} iconsSection={homePage.IconsSection} />
        <Blog blogItems={blogItems}  mainTitle={homePage.blogSection.title} mainButton={homePage.blogSection.button} />
      </main>
    </Layout>
  );
}

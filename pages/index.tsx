import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../layouts'
import IntroSection from "../components/IntroSection";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import CurrentProject from "../components/CurrentProject";
import Blog from "../components/Blog";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Portfolio App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<main>
					<IntroSection />
					<Skills />
					<Portfolio />
					<CurrentProject />
					<Blog />
				</main>
			</Layout>
		</div>
	)
}

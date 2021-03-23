import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useQuery } from '@apollo/client'
import { MENU_QUERY } from './api/api'

export default function Home() {
	const { loading, error, data } = useQuery(MENU_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div>Loading...</div>

	return (
		<div className={styles.container}>
			<Head>
				<title>Portfolio App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}></main>
		</div>
	)
}

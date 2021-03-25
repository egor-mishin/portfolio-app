import * as React from 'react'
import { FC } from 'react'
import NavBar from '../components/common/NavBar'
import Logo from '../components/common/Logo'
import Footer from '../components/common/Footer'
import Head from 'next/head'

type Props = {}

const Layout: FC<Props> = ({ children }): JSX.Element => {
	return (
		<>
			<Head>
				// Ubuntu font
				<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />

				// Source Sans Pro

				<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
			</Head>

			<NavBar />
			<Logo />
			{children}
			<Footer />
		</>
	)
}

export default Layout

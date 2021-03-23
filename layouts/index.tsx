import * as React from 'react'
import { FC } from 'react'
import NavBar from '../components/common/NavBar'
import Logo from '../components/common/Logo'
import Footer from '../components/common/Footer'

type Props = {}

const Layout: FC<Props> = ({ children }): JSX.Element => {
	return (
		<>
			<NavBar />
			<Logo />
			{children}
			<Footer />
		</>
	)
}

export default Layout

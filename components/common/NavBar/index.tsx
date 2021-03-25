import * as React from 'react'
import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { MENU_QUERY, NAVBAR_QUERY } from '../../../pages/api/api'
import Link from 'next/link'
import css from './index.module.css'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import MailIcon from './MailIcon'

type Props = {}

const NavBar: FC<Props> = (): JSX.Element => {
	const { loading, error, data } = useQuery(NAVBAR_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div>Loading...</div>

	return (
		<div className={css.navBar}>
			<Menu />
			<MailIcon />
			<SocialLinks socialLinks={data.navBar.socialLinks}/>
		</div>
	)
}

export default NavBar

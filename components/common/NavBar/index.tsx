import * as React from 'react'
import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { NAVBAR_QUERY } from '../../../api/api'
import css from './index.module.css'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import MailIcon from './MailIcon'
import { NavBarType } from "../../../api/types";

type Props = {}

const NavBar: FC<Props> = (): JSX.Element => {
	const { loading, error, data } = useQuery<NavBarType>(NAVBAR_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div></div>

	return (
		<div className={css.navBar}>
			<Menu />
			<MailIcon />
			<SocialLinks socialLinks={data.navBar.socialLinks}/>
		</div>
	)
}

export default NavBar

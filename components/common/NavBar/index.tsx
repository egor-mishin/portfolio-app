import * as React from 'react'
import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { NAVBAR_QUERY } from '../../../api/api'
import css from './index.module.css'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import MailIcon from './MailIcon'
import { NavBarType } from "../../../api/types";
import Preloader from "../Preloader";
import LangConsole from "../LangConsole/index.module";
import { languages } from "../LangConsole/languages";

type Props = {}

const NavBar: FC<Props> = (): JSX.Element => {
	const { loading, error, data } = useQuery<NavBarType>(NAVBAR_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div><Preloader/></div>

	return (
		<div className={css.navBar}>
			<Menu />
			<MailIcon />
			<LangConsole languages = {languages}/>
			<SocialLinks socialLinks={data.navBar.socialLinks}/>
		</div>
	)
}

export default NavBar

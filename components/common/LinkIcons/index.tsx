import * as React from 'react'
import { FC } from 'react'
import Icon from "./Icon"
import css from './index.module.css'

type Props = {
	links: any
}

const LinkIcons: FC<Props> = ({ links }): JSX.Element => {
	return (
		<div className={css.linksBox}>
			{
				links.map(link => <Icon {...link} />)
			}
		</div>
	)
}

export default LinkIcons

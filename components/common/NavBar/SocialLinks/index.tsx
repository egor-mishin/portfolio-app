import * as React from 'react'
import { FC } from 'react'
import css from '../index.module.css'
import LinkItem from './LinkItem'
import { SocialLink } from "../../../../api/types";

type Props = {
	socialLinks: SocialLink[]
}

const SocialLinks: FC<Props> = ({ socialLinks }): JSX.Element => {
	return (
		<div className={css.socialLinks}>
			{socialLinks.map((item) => (
				<LinkItem
					key={item.title}
					imageUrl={item.icon.url}
					link={item.url}
					title={item.title}
				/>
			))}
		</div>
	)
}

export default SocialLinks

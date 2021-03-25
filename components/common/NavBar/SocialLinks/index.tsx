import * as React from 'react'
import { FC } from 'react'
import css from '../index.module.css'
import Image from 'next/image'
import LinkItem from './LinkItem'

type Props = {
	socialLinks: Array<{ title: string; icon: { url: string }; url: string }>
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

import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'
import { IconItemType } from '../../../api/types'
import { Item } from "./Item"

type Props = {
	iconsSection: { title: string
		iconItems: IconItemType[]
	}
	small?: string
}

const IconsSet: FC<Props> = ({ iconsSection,  small}): JSX.Element => {
	return (
		<div className={`${css.iconsSet} ${small}`}>
			<h4 className={css.iconsSetTitle}>{iconsSection.title}</h4>
			<div className={css.iconItems}>
				{iconsSection.iconItems.map((item) => (
					<Item title={item.title} imgUrl={item.icon.url} />
				))}
			</div>
		</div>
	)
}

export default IconsSet

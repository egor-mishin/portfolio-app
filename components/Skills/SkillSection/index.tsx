import * as React from 'react'
import { FC } from 'react'
import ProgressBar from '../../common/ProgressBar'
import IconsSet from '../../common/IconsSet'
import css from './index.module.css'
import { IconItem, SkillBox } from "../../../api/types";

type Props = {
	title: string
	skillBoxes: SkillBox[]
	iconsSection: {title: string, iconItems: IconItem[]}
}

const SkillSection: FC<Props> = ({ title, skillBoxes }): JSX.Element => {
	return (
		<div className={css.skillSection}>
			<h2 className={css.title}>{title}</h2>
			<ProgressBar skillBoxes={skillBoxes} />
			<IconsSet />
		</div>
	)
}

export default SkillSection

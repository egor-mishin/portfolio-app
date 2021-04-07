import * as React from 'react'
import { FC } from 'react'
import ProgressBar from '../../common/ProgressBar'
import IconsSet from '../../common/IconsSet'

type Props = {
	title: string
	skillBoxes: Array<{ title: string; percent: number }>
}

const SkillSection: FC<Props> = ({ title, skillBoxes }): JSX.Element => {
	return (
		<>
			<h2>{title}</h2>
			<ProgressBar skillBoxes={skillBoxes} />
			<IconsSet />
		</>
	)
}

export default SkillSection

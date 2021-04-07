import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'
import Title from '../common/Title'
import { useQuery } from '@apollo/client'
import { SKILLS_SECTION_QUERY } from '../../api/api'
import Preloader from '../common/Preloader'
import ProgressBar from '../common/ProgressBar'
import SkillSection from './SkillSection'

type Props = {}

const Skills: FC<Props> = (): JSX.Element => {
	const { loading, error, data } = useQuery(SKILLS_SECTION_QUERY)
	console.log(data)

	if (error) return <div>Failed to load</div>
	if (loading)
		return (
			<div>
				<Preloader />
			</div>
		)

	const { skillItems } = data

	return (
		<section className={css.skills}>
			<div className="container">
				<Title>Мои навыки.</Title>

				{skillItems.map((item) => (
					<SkillSection title={item.title} skillBoxes={item.skillBoxes}/>
				))}
			</div>
		</section>
	)
}

export default Skills

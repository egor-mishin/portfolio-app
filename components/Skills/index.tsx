import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'
import Title from '../common/Title'
import SkillSection from './SkillSection'
import { SkillItem } from "../../api/types";

type Props = {
	skillItems: SkillItem[]
}

const Skills: FC<Props> = ({skillItems}): JSX.Element => {
	return (
		<section className={css.skills}>
			<div className="container">
				<Title>Мои навыки.</Title>

				{skillItems.map((item) => (
					<SkillSection title={item.title} skillBoxes={item.skillBoxes} iconsSection={item.iconsSection}/>
				))}
			</div>
		</section>
	)
}

export default Skills

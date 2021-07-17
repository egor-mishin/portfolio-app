import * as React from 'react'
import { FC } from 'react'
import ProgressItem from './ProgressItem'
import css from './ProgressItem/index.module.css'

type Props = {
	skillBoxes: Array<{ title: string, percent: number }>
}

const ProgressBar: FC<Props> = ({ skillBoxes }): JSX.Element => {
	return (
		<div className={css.skillBox} data-aos="fade-up-right"
				 data-aos-easing="linear"
				 data-aos-offset="0">
			{skillBoxes.map((box) => (
				<ProgressItem
					width={100}
					percent={box.percent}
					title={box.title}
				/>
			))}
		</div>
	)
}

export default ProgressBar

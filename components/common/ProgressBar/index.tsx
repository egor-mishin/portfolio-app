import * as React from 'react'
import { FC } from 'react'
import ProgressItem from './ProgressItem'

type Props = {
	skillBoxes: Array<{ title: string, percent: number }>
}

const ProgressBar: FC<Props> = ({ skillBoxes }): JSX.Element => {
	return (
		<div>
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

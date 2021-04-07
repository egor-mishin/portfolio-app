import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'

type Props = {}

const Title: FC<Props> = ({ children }): JSX.Element => {
	return <h2 className={css.title}>{children}</h2>
}

export default Title

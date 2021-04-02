import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'

type Props = {}

const Button: FC<Props> = ({ children }): JSX.Element => {
	return <button className={css.regular}>{children}</button>
}

export default Button

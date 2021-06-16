import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'

type Props = {
	url: string
}

const Button: FC<Props> = ({ children , url}): JSX.Element => {
	return <a href={url} className={css.regular}>{children}</a>
}

export default Button

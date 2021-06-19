import * as React from 'react'
import { FC } from 'react'
import css  from './index.module.css'

type Props = {
	title: string
	imgUrl: string
}

export const Item: FC<Props> = ({ title, imgUrl }): JSX.Element => {
	return (
    <div className={css.iconItem}>
      <img
        src={imgUrl}
        alt={title}
      />
      <h4 className={css.iconTitle}>{title}</h4>
    </div>
    )

}

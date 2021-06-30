import * as React from 'react'
import { FC } from 'react'
import Link from "next/link"
import css from './index.module.css'


type Props = {
  title: string
  url: string
  icon: { url: string }
}

const Icon: FC<Props> = ({ title, url, icon }): JSX.Element => {
  return (
    <a href={url}>
      <img src={icon.url} alt={title}  className={css.icon}/>
    </a>
  )
}

export default Icon

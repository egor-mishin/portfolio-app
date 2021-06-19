import * as React from 'react'
import {FC} from "react"
import css from './index.module.css'

type Props = {
    title: string
    url: string
    icon: { url: string }
};

const  ContactItem: FC<Props> = ( { url, title, icon }): JSX.Element => {
    return (
      <a href={url} className={css.contactLink}>
          <img
            src={icon.url}
            alt={title}
          />
        <span className={css.contactLinkText}>
          {title}
        </span>

      </a>
    )
}

export default  ContactItem

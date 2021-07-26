import * as React from 'react'
import {FC} from "react"
import css from './index.module.css'

type Props = {
    title: string
    url: string
    icon: { url: string }
    isOpen: boolean
    toggleModal: (boolean) => boolean
};

const  ContactItem: FC<Props> = ( { url, title, icon, toggleModal, isOpen }): JSX.Element => {
    return (
      <a href={url} className={css.contactLink} title={title}  onClick={() => title === 'Tell me about your project' && toggleModal(true)}
         data-aos="fade-right"
         data-aos-delay="15"
         data-aos-easing="linear"
         data-aos-offset="0">
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

import * as React from 'react'
import {FC} from "react"
import css from "./index.module.css"
import { useQuery } from "@apollo/client";
import { CONTACTS_QUERY } from "../../api/api"
import ContactItem from "./ContactItem";
import Title from "../common/Title";
import { ContactsType } from "../../api/types";

type Props = {

}

const  Contacts: FC<Props> = (): JSX.Element => {
    const { loading, error, data } = useQuery<ContactsType>(CONTACTS_QUERY);

    if (error) return <div>Failed to load</div>
    if (loading) return <div></div>

    const { contact } = data

    return (
      <section className={css.contactsBox}>

        <div className="container">
           <div className="wrapper">
               <Title>{contact.title}</Title>
               <div className={css.linksBox}>
                   {
                       contact.Links.map(link => <ContactItem {...link} />)
                   }
               </div>
           </div>
        </div>
      </section>
    )
}

export default  Contacts

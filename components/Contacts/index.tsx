import * as React from 'react'
import { FC, useState } from "react";
import css from "./index.module.css"
import { useQuery } from "@apollo/client";
import { CONTACTS_QUERY } from "../../api/api"
import ContactItem from "./ContactItem";
import Title from "../common/Title";
import { ContactsType } from "../../api/type";
import Preloader from "../common/Preloader";
import Modal from "../Modal/index.module";
import Form from "../common/Form";

type Props = {

}

const  Contacts: FC<Props> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { loading, error, data } = useQuery<ContactsType>(CONTACTS_QUERY);

    if (error) return <div>Failed to load</div>
    if (loading) return <div></div>

    const { contact } = data

    return (
      <>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form />
        </Modal>
        <section className={css.contactsBox} id={"contact"}>

          <div className="container">
            <div className="wrapper">
              <Title>{contact.title}</Title>
              <div className={css.linksBox}>
                {
                  contact.Links.map(link => <ContactItem {...link}  toggleModal={setIsOpen} isOpen={isOpen}/>)
                }
              </div>
            </div>
          </div>
        </section>
      </>

    )
}

export default  Contacts

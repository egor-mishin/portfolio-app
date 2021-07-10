import * as React from 'react';
import {FC} from "react";
import css from "./index.module.css";
import Input from "./Input";
import TextArea from "./TextArea";

type Props = {
    type: 'text'| 'submit'
    name: string
    value: string
};

const  Form: FC<Props> = ({type, name, value}): JSX.Element => {
    return (
        <div className={css.formContainer}>
            <form action="#">
                <Input type={type} name={name} value={value} />
                <TextArea name={name} value={value}/>
            </form>
        </div>
    )
}

export default  Form

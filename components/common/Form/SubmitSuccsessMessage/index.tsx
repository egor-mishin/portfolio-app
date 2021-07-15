import * as React from 'react';
import {FC} from "react";
import css from './index.module.css'

type Props = {

};

export const  SubmitSuccessesMessage: FC<Props> = (): JSX.Element => {
    return (
        <p className={css.successText}>Форма отправлена</p>
    )
}

export default  SubmitSuccessesMessage

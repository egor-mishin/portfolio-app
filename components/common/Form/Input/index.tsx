import * as React from 'react';
import {FC} from "react";

type Props = {
    type: 'text' | 'submit'
    name: string
    value: string
};

const  Input: FC<Props> = ({type, name, value}): JSX.Element => {
    return (
        <fieldset>
          <input type={type} name={name}  placeholder={value}/>
        </fieldset>
    )
}

export default  Input

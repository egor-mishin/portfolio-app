import * as React from 'react';
import {FC} from "react";

type Props = {
    name: string
    value: string
};

const  TextArea: FC<Props> = ({ name, value}): JSX.Element => {
    return (
        <fieldset>
          <textarea name={name}  placeholder={value}/>
        </fieldset>
    )
}

export default  TextArea

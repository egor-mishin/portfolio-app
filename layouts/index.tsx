import * as React from 'react';
import {FC} from "react";

type Props = {

};

const  Layout: FC<Props> = ({children}): JSX.Element => {
    return (
        <>
            {children}
        </>
    )
}

export default  Layout

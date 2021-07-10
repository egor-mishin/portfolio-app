import * as React from 'react';
import {FC} from "react";
import css  from "./index.module.css";
import CloseButton from "../common/CloseButton";

type Props = {
  isOpen: boolean
  setIsOpen: any
};

export const  Modal: FC<Props> = ({isOpen, children, setIsOpen}): JSX.Element => {
    return (
        <div className={`${css.modalWrapper} ${isOpen ? `visible` : '' }`}>
          <div className={css.modal}>
            <CloseButton setIsOpen={setIsOpen} isOpen={isOpen}/>
            <div className={css.modalContent}>
              {children}
            </div>
          </div>
        </div>
    )
}

export default  Modal

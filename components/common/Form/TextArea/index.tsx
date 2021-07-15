import { useController } from "react-hook-form";
import * as React from "react";
import css from './index.module.css'

const  TextArea = (props): JSX.Element => {
  const { field, fieldState } = useController(props)
  return (
      <div className={css.textAreaContainer}>
        <textarea {...field} placeholder={props.placeholder}  className={css.textArea} cols={20}/>
        <p className='error'>{fieldState.invalid && fieldState.isTouched && 'Field is required'}</p>
      </div>
  )
}

export default  TextArea
import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../type";
import * as React from "react";

const  TextArea = (props): JSX.Element => {
  const { field, fieldState } = useController(props)
  return (
      <div>
        <textarea {...field} placeholder={props.placeholder} />
        <p>{fieldState.invalid && fieldState.isTouched && 'Field is required'}</p>
      </div>
  )
}

export default  TextArea
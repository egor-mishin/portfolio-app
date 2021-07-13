import * as React from 'react'
import {  useController } from "react-hook-form"


const  Input = (props): JSX.Element => {
  const { field, fieldState} = useController(props)

    return (
      <div>
        <input {...field} placeholder={props.placeholder} />
        <p>{fieldState.invalid && fieldState.isTouched && 'Field is required'}</p>
      </div>


    )
}

export default  Input

import * as React from "react";
import { useController } from "react-hook-form";
import css from "./index.module.css";


const Input = (props): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <input {...field} placeholder={props.placeholder}
             className={props.type == "submit" ? css.submitField : css.inputField} type={props.type}
             value={props.type == "submit" ? 'Get in touch': ''} />
      <p className="error">{fieldState.invalid && fieldState.isTouched && "Field is required"}</p>
    </>


  );
};

export default Input;

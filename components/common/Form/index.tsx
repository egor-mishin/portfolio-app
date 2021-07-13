import * as React from "react";
import css from "./index.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "./type";
import { useMutation } from "@apollo/client";
import { CREATE_MESSAGE_MUTATION } from "../../../api/api";
import Input from "./Input";
import TextArea from "./TextArea";
import SubmitSuccessesMessage from "./SubmitSuccsessMessage";

type Props = {};

const Form = () => {
  const { handleSubmit, control, formState: { isSubmitSuccessful } } = useForm<FormValues>({mode: "onChange" })

  const [createFormRequest, { data }] = useMutation<FormValues>(CREATE_MESSAGE_MUTATION);
  const onSubmit: SubmitHandler<FormValues> = formData => {
    createFormRequest({ variables: { ...formData } })
  }

  return (
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.formContact} >

        <Input name='name' control={control} rules={{ required: true }} placeholder={'What is your name?'}/>
        <Input  control={control} name='email' rules={{ required: true }} placeholder={'What is your email?'}/>
        <TextArea control={control} name='projectDetails' rules={{ required: true }} placeholder={'Describe your project'}/>

        <input type="submit" className={'btn'}/>
        {isSubmitSuccessful && (<><SubmitSuccessesMessage/></> )}
      </form>
    </div>
  );
}

export default Form;
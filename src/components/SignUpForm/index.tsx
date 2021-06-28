import { Container, Form, SubmitButton } from "./styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { ISignUpParams } from "../../interfaces/auth.interface";
import Router from "next/router";
import { TextInput } from "../TextInput";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function SignUpForm() {
  const { handleSignUp } = useAuth();
  const [showPwd, setShowPwd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values: ISignUpParams) => {
    const success = await handleSignUp(values);

    if (success) Router.push("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="name" type="name" label="Nome" {...register("name")} />
        <TextInput
          name="avatar"
          type="avatar"
          label="Link do avatar"
          {...register("avatar")}
        />
        <TextInput
          name="username"
          type="username"
          label="Nome de usuário"
          {...register("username")}
        />
        <TextInput
          name="email"
          type="email"
          label="Email"
          {...register("email")}
        />
        <TextInput
          name="password"
          type={showPwd ? "text" : "password"}
          label="Senha"
          Icon={showPwd ? FiEyeOff : FiEye}
          onIconClik={() => setShowPwd(!showPwd)}
          {...register("password")}
        />
        <SubmitButton type="submit">
          {isSubmitting ? "Carregando..." : "Cadastrar"}
        </SubmitButton>
      </Form>
    </Container>
  );
}

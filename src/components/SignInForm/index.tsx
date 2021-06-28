import { Container, Form, SubmitButton, TextInput } from "./styles";

import { useForm } from "react-hook-form";

interface IOnSubmitParams {
  email: string;
  password: string;
}

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: IOnSubmitParams) => {};

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <TextInput name="email" {...register("email")} />
        <label htmlFor="password">Senha</label>
        <TextInput name="password" {...register("password")} />
        <SubmitButton type="submit">
          {isSubmitting ? "Carregando..." : "Entrar"}
        </SubmitButton>
      </Form>
    </Container>
  );
}

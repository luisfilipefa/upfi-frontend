import { Container, Flex, Form, SubmitButton } from "./styles";

import { AxiosRequestConfig } from "axios";
import { Button } from "../Button";
import { FileInput } from "../FileInput";
import { TextInput } from "../TextInput";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNewPostModal } from "../../hooks/useNewPostModal";

interface ICreatePostParams {
  file: FileList;
  title: string;
}

export function NewPostForm() {
  const { onClose } = useNewPostModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values: ICreatePostParams) => {
    try {
      const data = new FormData();
      data.append("file", values.file.item(0));
      data.append("title", values.title);

      const config = {
        "content-type": "multipart/form-data",
      } as AxiosRequestConfig;

      await api.post("/post", data, config);

      onClose();

      toast.success("Postado com sucesso");
    } catch (error) {
      toast.error("Erro ao postar");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Novo Post</h2>
        <FileInput
          name="file"
          label="Imagem"
          error={errors.file}
          {...register("file")}
        />
        <TextInput
          name="title"
          label="Título"
          error={errors.title}
          {...register("title")}
        />
        <Flex>
          <SubmitButton>{isSubmitting ? "Postando..." : "Postar"}</SubmitButton>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </Flex>
      </Form>
    </Container>
  );
}

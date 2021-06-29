import { FieldError } from "react-hook-form";
import { ForwardRefRenderFunction } from "react";
import { Input } from "./styles";
import { forwardRef } from "react";

interface FileInputProps {
  name: string;
  error?: FieldError;
  label?: string;
}

const FileInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FileInputProps
> = ({ name, error = null, label, ...rest }, ref) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <Input name={name} id={name} type="file" ref={ref} {...rest} />

      {error && <span>{error.message}</span>}
    </>
  );
};

export const FileInput = forwardRef(FileInputBase);

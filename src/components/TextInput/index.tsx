import { ForwardRefRenderFunction, forwardRef } from "react";
import { IconContainer, Input, InputGroup } from "./styles";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface TextInputProps {
  name: string;
  type?: string;
  error?: FieldError;
  label?: string;
  Icon?: IconType;
  onIconClik?: () => void;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (
  {
    name,
    type = "text",
    error = null,
    label,
    Icon = null,
    onIconClik = null,
    ...rest
  },
  ref
) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      {Icon ? (
        <InputGroup>
          <Input type={type} name={name} id={name} ref={ref} {...rest} />

          <IconContainer>
            <Icon onClick={onIconClik} />
          </IconContainer>
        </InputGroup>
      ) : (
        <Input type={type} name={name} id={name} ref={ref} {...rest} />
      )}

      {error && <span>{error.message}</span>}
    </>
  );
};

export const TextInput = forwardRef(TextInputBase);

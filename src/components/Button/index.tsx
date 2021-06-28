import { Btn } from "./styles";
import { HTMLAttributes } from "react";
import { ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "outline" | "fill";
  bg?: string;
  children: ReactNode;
}

export function Button({ variant, bg, children, ...rest }: ButtonProps) {
  return (
    <Btn variant={variant} bg={bg} {...rest}>
      {children}
    </Btn>
  );
}

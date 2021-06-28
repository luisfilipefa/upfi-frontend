import styled from "styled-components";

interface BtnProps {
  variant: "outline" | "fill";
  bg?: string;
}

export const Btn = styled.button<BtnProps>`
  height: 40px;

  padding: 0 1rem;

  border: ${(props) =>
    props.variant === "outline" ? "1px solid var(--orange-500)" : "none"};
  border-radius: 0.5rem;

  background: ${(props) =>
    props.variant === "outline" ? "inherit" : props.bg};
  color: var(--gray-50);
`;

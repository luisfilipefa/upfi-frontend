import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background: var(--gray-900);
  color: var(--gray-50);
  border: none;
  border-radius: 0.5rem;

  height: 40px;
  padding: 0 0.5rem;
`;

export const IconContainer = styled.i`
  svg {
    position: absolute;
    top: 50%;
    right: 0.5rem;

    transform: translateY(-50%);
  }
`;

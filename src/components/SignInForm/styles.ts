import { FiEye, FiEyeOff } from "react-icons/fi";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  background: var(--gray-800);
  border-radius: 0.5rem;
`;

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  height: 40px;
  background: var(--orange-500);
  border: none;
  border-radius: 0.5rem;
  color: var(--gray-50);
  font-weight: bold;
`;

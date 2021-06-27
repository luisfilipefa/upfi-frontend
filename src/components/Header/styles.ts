import styled from "styled-components";

export const Container = styled.header`
  height: 6rem;
  width: 100vw;
  padding: 0 1rem;

  background: var(--gray-800);
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`;

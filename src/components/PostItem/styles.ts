import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 350px;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const PostInfo = styled.div`
  width: 100%;
  height: 6.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: rgba(74, 73, 69, 0.8);
  color: var(--gray-50);

  padding: 0 1rem;

  position: absolute;
  bottom: 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

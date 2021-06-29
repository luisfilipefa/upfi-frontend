import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  padding: 2rem 1rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p:nth-child(1) {
    font-size: 2rem;
  }
`;

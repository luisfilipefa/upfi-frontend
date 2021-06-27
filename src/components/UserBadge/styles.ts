import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;

  span {
    font-size: 0.8rem;
  }
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
`;

import Image from "next/image";
import styled from "styled-components";

interface InfoProps {
  align: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 100%;

  position: relative;
`;

export const Info = styled.div<InfoProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  gap: 0.3rem;

  span {
    font-size: 0.8rem;
  }

  svg {
    cursor: pointer;
  }
`;

export const Avatar = styled(Image)`
  border-radius: 50%;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Menu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;

  width: 100%;

  padding: 1rem;
  border-radius: 0.5rem;

  background: var(--gray-800);

  z-index: 1;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;

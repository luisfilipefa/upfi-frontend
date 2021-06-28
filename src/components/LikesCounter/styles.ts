import styled from "styled-components";

interface ContainerProps {
  iconBg?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    cursor: pointer;

    svg {
      fill: ${(props) => props.iconBg || "transparent"};
    }
  }
`;

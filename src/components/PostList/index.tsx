import { Container } from "./styles";
import { ReactNode } from "react";

interface PostListProps {
  children: ReactNode;
}

export function PostList({ children }: PostListProps) {
  return <Container>{children}</Container>;
}

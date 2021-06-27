import { Avatar, Container, Info } from "./styles";

import { User } from "../../interfaces/user.interface";

interface UserBadgeProps {
  user: User;
}

export function UserBadge({ user }: UserBadgeProps) {
  return (
    <Container>
      <Info>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </Info>
      <Avatar
        src={user.avatar}
        alt={user.name}
        objectFit="cover"
        width="50px"
        height="50px"
      />
    </Container>
  );
}

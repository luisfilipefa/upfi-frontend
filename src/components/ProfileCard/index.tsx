import { Avatar, Container, Flex, UserInfo } from "./styles";

import { IUser } from "../../interfaces/user.interface";

interface ProfileCardProps {
  profile: IUser;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Container>
      <Flex>
        <Avatar
          src={profile.avatar}
          alt={profile.name}
          width="200px"
          height="200px"
          objectFit="cover"
        />
        <UserInfo>
          <p>Nome: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Nome de usuário: {profile.custom_username}</p>
        </UserInfo>
      </Flex>
    </Container>
  );
}

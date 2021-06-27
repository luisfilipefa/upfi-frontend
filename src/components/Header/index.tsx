import { Container, Content } from "./styles";

import Image from "next/image";
import React from "react";
import { UserBadge } from "../UserBadge";
import logoImg from "../../../public/logo.svg";

export function Header() {
  const user = {
    id: "1",
    name: "Luis",
    avatar: "https://avatars.githubusercontent.com/u/70351489?v=4",
    email: "luisfilipe@example.com",
    custom_username: "@luisfilipefa",
    created_at: Date.now(),
  };

  return (
    <Container>
      <Content>
        <Image src={logoImg} alt="Upfi" width="120px" objectFit="cover" />
        <UserBadge user={user} />
      </Content>
    </Container>
  );
}

import { Container, Content, Flex } from "./styles";

import { Button } from "../Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Router from "next/router";
import { UserBadge } from "../UserBadge";
import logoImg from "../../../public/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { useNewPostModal } from "../../hooks/useNewPostModal";

export function Header() {
  const { user, isAuthenticated } = useAuth();
  const { onOpen } = useNewPostModal();

  return (
    <Container>
      <Content>
        <Link href="/" passHref>
          <a>
            <Image src={logoImg} alt="Upfi" width="120px" objectFit="cover" />
          </a>
        </Link>
        {isAuthenticated ? (
          <Flex>
            <Button variant="fill" bg="var(--orange-500)" onClick={onOpen}>
              Novo post
            </Button>
            <UserBadge user={user} />
          </Flex>
        ) : (
          <Flex>
            <Button
              variant="fill"
              bg="var(--orange-500)"
              onClick={() => Router.push("/signin")}
            >
              Sign In
            </Button>
            <Button variant="outline" onClick={() => Router.push("/signup")}>
              Sign Up
            </Button>
          </Flex>
        )}
      </Content>
    </Container>
  );
}

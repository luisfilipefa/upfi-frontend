import { Avatar, Container, Info, Menu, MenuItem, MenuList } from "./styles";
import { FiChevronDown, FiX } from "react-icons/fi";

import { IUser } from "../../interfaces/user.interface";
import { handleSignOut } from "../../context/AuthContext";
import { useState } from "react";

interface UserBadgeProps {
  user: IUser;
}

export function UserBadge({ user }: UserBadgeProps) {
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <Container>
      <Info align="flex-start">
        <span>{user.name}</span>
        <span>{user.email}</span>
      </Info>
      <Info align="center">
        <Avatar
          src={user.avatar}
          alt={user.name}
          objectFit="cover"
          width="50px"
          height="50px"
        />
        <FiChevronDown onClick={() => setShowSignOut(!showSignOut)} />
        {showSignOut && (
          <Menu>
            <MenuList>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Info>
    </Container>
  );
}

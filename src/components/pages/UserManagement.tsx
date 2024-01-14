import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import { UserCard } from "../organisms/user/userCard";

export const UserManagement = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https:source.unsplash.com/randam"
          userName="じゃけ"
          fullName="じゃけえ"
        />
      </WrapItem>
    </Wrap>
  );
});

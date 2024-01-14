import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { UserCard } from "../organisms/user/userCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https:source.unsplash.com/randam"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});

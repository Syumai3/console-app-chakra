import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
} from "@chakra-ui/react";
import { VFC, memo, useEffect, useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClickUpdate = () => alert();

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={userName}
                  onChange={onChangeUserName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  onChange={onChangeName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

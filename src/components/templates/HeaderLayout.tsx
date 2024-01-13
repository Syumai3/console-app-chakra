import { VFC, memo } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

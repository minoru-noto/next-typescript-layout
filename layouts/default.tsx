import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout: NextPage<Props> = ({ children }: Props) => {
  return (
    <div>
      <p>レイアウト書き方！！</p>
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;

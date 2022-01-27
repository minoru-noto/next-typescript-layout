import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DifferentDefaultLayout: NextPage<Props> = ({ children }: Props) => {
  return (
    <div>
      <p>レイアウト2書き方！！</p>
      <main>{children}</main>
    </div>
  );
};

export default DifferentDefaultLayout;

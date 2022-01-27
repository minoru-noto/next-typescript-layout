import "../styles/globals.css";
import { NextPage } from "next";
import { ReactChild } from "react";
import PageWithLayoutType from "../layouts";

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: NextPage & { children?: ReactChild };
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import { Layout, Menu } from "antd";
import Head from "next/head";
import { FC } from "react";
import NotAuthorizedMenu from "../components/Menu/NotAuthorizedMenu";

interface AuthorizedLayoutProps {}

const NotAuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout.Header>
        <NotAuthorizedMenu />
      </Layout.Header>
      <Layout.Content style={{ padding: "2rem" }}>{children}</Layout.Content>
      {/* <Layout.Footer>
        <h2>Footer</h2>
      </Layout.Footer> */}
    </Layout>
  );
};

export default NotAuthorizedLayout;

import { Layout, Menu } from "antd";
import Head from "next/head";
import { FC } from "react";
import TriangleBackground from "../components/Background/TriangleBackground";
import NotAuthorizedMenu from "../components/Menu/NotAuthorizedMenu";

interface AuthorizedLayoutProps {}

const NotAuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => {
  return (
    <Layout className="image-triangle">
      {/* <TriangleBackground /> */}

      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout.Header>
        <NotAuthorizedMenu />
      </Layout.Header>

      <Layout.Content style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
        {children}
      </Layout.Content>
      {/* <Layout.Footer>
        <h2>Footer</h2>
      </Layout.Footer> */}
    </Layout>
  );
};

export default NotAuthorizedLayout;

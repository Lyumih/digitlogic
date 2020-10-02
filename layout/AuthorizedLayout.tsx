import { Layout, Menu } from "antd";
import { FC } from "react";
import AuthorizedMenu from "../components/Menu/AuthorizedMenu";

interface AuthorizedLayoutProps {}

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header>
        <AuthorizedMenu />
      </Layout.Header>
      <Layout.Content style={{ padding: "2rem" }}>{children}</Layout.Content>
      {/* <Layout.Footer>
        <h2>Footer</h2>
      </Layout.Footer> */}
    </Layout>
  );
};

export default AuthorizedLayout;

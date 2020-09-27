import { Layout } from "antd";
import { FC } from "react";

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      {/* <Layout.Header>
        <h1>Header</h1>
      </Layout.Header> */}
      <Layout.Content>{children}</Layout.Content>
      {/* <Layout.Footer>
        <h2>Footer</h2>
      </Layout.Footer> */}
    </Layout>
  );
};

export default MainLayout;

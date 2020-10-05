import { Layout, Menu } from "antd";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import AuthorizedMenu from "../components/Menu/AuthorizedMenu";

interface AuthorizedLayoutProps {}

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) {
      console.log(token);
    } else {
      let tokenClient = localStorage.getItem("token");

      if (tokenClient) {
        setToken(tokenClient);
      } else {
        window.location.href = "/login";
      }
    }
  }, [token]);
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout.Header>
        <AuthorizedMenu />
      </Layout.Header>
      {token && (
        <Layout.Content style={{ padding: "2rem" }}>{children}</Layout.Content>
      )}
      {/* <Layout.Footer>
          <h2>Footer</h2>
        </Layout.Footer> */}
    </Layout>
  );
};

export default AuthorizedLayout;

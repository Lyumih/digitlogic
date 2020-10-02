import { Layout, Menu } from "antd";
import { useRouter } from "next/dist/client/router";
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
      // router.push("/login");
    }
  }, [token]);
  return (
    <Layout>
      <Layout.Header>
        <AuthorizedMenu />
      </Layout.Header>
      <Layout.Content style={{ padding: "2rem" }}>
        {token && children}
      </Layout.Content>
      {/* <Layout.Footer>
        <h2>Footer</h2>
      </Layout.Footer> */}
    </Layout>
  );
};

export default AuthorizedLayout;

import { useRouter } from "next/dist/client/router";
import { FC, useEffect } from "react";
import { logout } from "../helpers/auth";

const LogoutPage: FC = () => {
  const router = useRouter();
  useEffect(() => {
    logout().then(() => router.push("/login"));
  });
  return <></>;
};

export default LogoutPage;

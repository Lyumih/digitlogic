import Head from "next/head";
import React from "react";
import { setSitename } from "../constants";
import AuthorizedLayout from "../layout/AuthorizedLayout";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>{setSitename("")}</title>
      </Head>
      <AuthorizedLayout></AuthorizedLayout>
    </div>
  );
};

export default HomePage;

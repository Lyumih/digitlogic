import Head from "next/head";
import React from "react";
import AuthorizedLayout from "../layout/AuthorizedLayout";

const HomePage = () => {
  

  return (
    <div>
      <Head>
        <title>Цифрология XXI века</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthorizedLayout>
        <h1>Цифрология XXI века</h1>
      </AuthorizedLayout>
    </div>
  );
};

export default HomePage;

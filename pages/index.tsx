import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Цифрологии XXI века</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Цифрологии XXI века</h1>
      <Link href="/pifagor">
        <Button>Начать</Button>
      </Link>
      <Link href="/login">
        <Button>Войти</Button>
      </Link>
      <Link href="/registration">
        <Button>Регистрация</Button>
      </Link>
    </div>
  );
};

export default HomePage;

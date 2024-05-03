import Head from "next/head";
import 'tokens-math/src/math.css';
import style from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Math App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className={style.title}>Hello Math!</h1>
      </main>
    </>
  );
}

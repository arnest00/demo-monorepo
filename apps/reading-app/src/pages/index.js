import Head from "next/head";
import 'tokens-education/src/education.css';
import 'tokens-reading/src/reading.css';
import style from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reading App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className={style.title}>Hello Reading!</h1>
      </main>
    </>
  );
}

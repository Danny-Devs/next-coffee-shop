import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/banner';

import styles from '../styles/Home.module.css';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('hi from the banner button!');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Find your favorite coffee shops!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerBtnClick}/>
      </main>
    </div>
  );
}

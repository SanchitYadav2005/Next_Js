import source from '../public/source.jpg';
import Image from 'next/image';
// so in next js you have to write stylesheet like this .
import styles from '../styles/basic.module.css';
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={inter.className}>
        <Image
          className={styles.img}
          alt='profile image'
          src={source}
          height={150}
          width={150}
        />
        <h1 className={styles.main_heading}>Sanchit Yadav</h1>
        <div className={styles.container}>
          <p className={styles.para}>
            Hello, I’m <b>Sanchit</b>. I’m a software engineer and a student(B.tech cs). You can contact me on <a className={styles.links} href='https://github.com/SanchitYadav2005'>Github</a>.
          </p>
          <p className={styles.para}>
          (This is a sample website - I’ll be building a site like this in <a className={styles.links} href='https://nextjs.org/learn'>my Next.js tutorial</a>.)
          </p>
        </div>
      </main>
    </>
  )
}

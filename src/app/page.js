import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Carsome domain for sale&nbsp;</p>
        <div></div>
      </div>

      <div className={styles.center}>
        <h1>Carsome</h1>
        <div className={styles.thirteen}>
          .in <br />
          .co.in <br />
          .uk
          <br />
          .us
        </div>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}

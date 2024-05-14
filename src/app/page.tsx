import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${styles.home} content-wrapper`}>
      <h1>Welcome to the Pokedex Project</h1>
      <Link href="/pokedex">Go to Pokedex</Link>
    </div>
  );
}

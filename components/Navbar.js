import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2>TravelLite</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/favourites">Favourites</Link>
        <Link href="/add-destination">Add Destination</Link>
      </div>
    </nav>
  );
}

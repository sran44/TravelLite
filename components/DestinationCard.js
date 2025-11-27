import Link from "next/link";
import styles from "../styles/card.module.css";

export default function DestinationCard({ dest }) {
  return (
    <div className={styles.card}>
      <img src={dest.image} alt={dest.name} className={styles.img} />
      <h3>{dest.name}</h3>
      <p>{dest.description}</p>

      <Link href={`/destination/${dest.id}`}>
        <button className={styles.button}>View Details</button>
      </Link>
    </div>
  );
}

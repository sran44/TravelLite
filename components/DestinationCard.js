import Link from "next/link";
<<<<<<< HEAD
import React, { useContext } from "react";
import styles from "../styles/card.module.css";
import { DestinationsContext } from "../pages/_app";

export default function DestinationCard({ dest }) {
  const { favourites, setFavourites } = useContext(DestinationsContext);

  const isFav = (favourites || []).map(String).includes(String(dest.id));

  function toggleFav(e) {
    e.preventDefault();
    const idNum = String(dest.id);
    if (isFav) {
      setFavourites(prev => prev.filter(f => String(f) !== idNum));
    } else {
      setFavourites(prev => [...(favourites || []), dest.id]);
    }
  }

  return (
    <article className={styles.card}>
      <Link href={`/destination/${dest.id}`} className={styles.cardLink}>
        <img src={dest.image} alt={dest.name} />
        <div className={styles.content}>
          <h3>{dest.name}</h3>
          <p>{dest.summary}</p>
        </div>
      </Link>

      <div className={styles.cardFooter}>
        <button className={styles.favBtn} onClick={toggleFav}>
          {isFav ? "★" : "☆"} Favourite
        </button>
      </div>
    </article>
=======
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
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
  );
}

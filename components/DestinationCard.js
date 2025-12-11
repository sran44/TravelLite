import Link from "next/link";
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
  );
}

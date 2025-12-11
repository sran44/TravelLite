<<<<<<< HEAD
import React, { useContext } from "react";
import { DestinationsContext } from "./_app";
import Link from "next/link";
import styles from "../styles/Favourites.module.css";

export default function FavouritesPage() {
  const { favourites, setFavourites, destinations } = useContext(DestinationsContext);

  function removeFromFavourites(id) {
    setFavourites((prev) => prev.filter((fid) => fid !== id));
  }

  const favouriteDestinations = (favourites || [])
    .map(fid => (destinations || []).find(d => Number(d.id) === Number(fid)))
    .filter(Boolean);

  return (
    <div className={styles.container}>
      <h1>Your Favourites</h1>
      {favouriteDestinations.length === 0 ? (
        <p>
          No favourites yet. Go to{" "}
          <Link href="/">Home</Link> and favourite a destination.
        </p>
      ) : (
        <div className={styles.list}>
          {favouriteDestinations.map(dest => (
            <article key={dest.id} className={styles.card}>
              <img src={dest.image || "/images/placeholder.jpg"} alt={dest.name} />
              <div className={styles.info}>
                <h3>
                  <Link href={`/destination/${dest.id}`}>
                    {dest.name}
                  </Link>
                </h3>

                <p>{dest.summary || dest.description}</p>

                <div className={styles.actions}>
                  <button onClick={() => removeFromFavourites(dest.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
=======
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Favourites() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Your Favourites</h1>
        <p>Favourites feature will be added in Phase 2.</p>
      </main>
      <Footer />
    </>
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
  );
}

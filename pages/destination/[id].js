import { useRouter } from "next/router";
<<<<<<< HEAD
import React, { useContext, useMemo } from "react";
import { DestinationsContext } from "../_app";
import styles from "../../styles/Destination.module.css";

export default function DestinationDetail() {
  const router = useRouter();
  const { id } = router.query;

  const {
    destinations,
    setDestinations,
    favourites,
    setFavourites
  } = useContext(DestinationsContext);

  const dest = useMemo(() => {
    if (!id || !Array.isArray(destinations)) return null;
    return destinations.find((d) => String(d.id) === String(id));
  }, [id, destinations]);

  if (!router.isReady) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!dest) {
    return (
      <div className={styles.notFound}>
        <h2>Destination not found</h2>
        <p>We couldn't locate that destination. It might have been removed.</p>
      </div>
    );
  }

  function toggleFav() {
    const idNum = String(dest.id);
    if (favourites.map(String).includes(idNum)) {
      setFavourites((prev) => prev.filter((f) => String(f) !== idNum));
    } else {
      setFavourites((prev) => [...prev, dest.id]);
    }
  }

  const isFav = favourites.map(String).includes(String(dest.id));
  function handleDelete() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${dest.name}"?`
    );
    if (!confirmDelete) return;
    const updated = destinations.filter(
      (d) => String(d.id) !== String(dest.id)
    );
    setDestinations(updated);
    setFavourites((prev) =>
      prev.filter((f) => String(f) !== String(dest.id))
    );

    setTimeout(() => {
      router.push("/");
    }, 200);
  }

  return (
    <div className={styles.container}>
      <h1>{dest.name}</h1>

      <div className={styles.hero}>
        <img
          src={dest.image || "/images/placeholder.jpg"}
          alt={dest.name}
        />

        <div className={styles.meta}>
          <p>{dest.summary || dest.description}</p>

          <div className={styles.actions}>
            <button onClick={toggleFav}>
              {isFav ? "Remove Favourite" : "Add to Favourites"}
            </button>
            <button
              onClick={handleDelete}
              className={styles.deleteBtn}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                marginLeft: "8px",
                cursor: "pointer"
              }}
            >
              Delete Destination
            </button>
          </div>
        </div>
      </div>

      <section className={styles.details}>
        <h2>About {dest.name}</h2>
        <p>{dest.description || dest.summary}</p>
      </section>
    </div>
=======
import destinations from "../../data/destinations.json";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DestinationDetails() {
  const router = useRouter();
  const { id } = router.query;

  const destination = destinations.find((d) => d.id.toString() === id);

  if (!destination) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>{destination.name}</h1>
        <img src={destination.image} width="300" />
        <p>{destination.description}</p>
      </main>
      <Footer />
    </>
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
  );
}

<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { DestinationsContext } from "./_app";
import styles from "../styles/AddDestination.module.css";
import { useRouter } from "next/router";

export default function AddDestination() {
  const { destinations, setDestinations } = useContext(DestinationsContext);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [saving, setSaving] = useState(false);

  const router = useRouter();

  if (destinations === undefined) {
    return <p style={{ padding: "20px" }}>Loading...</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    const existing = Array.isArray(destinations) ? destinations : [];

    const newId =
      existing.length > 0
        ? Math.max(...existing.map((d) => Number(d.id))) + 1
        : 1;

    const newDest = {
      id: newId,
      name: name.trim(),
      image: image.trim() || "/images/placeholder.jpg",
      summary: summary.trim() || "No summary provided.",
      description: summary.trim() || "No description provided.",
    };
    setDestinations([...existing, newDest]);
    setSaving(true);
    setTimeout(() => {
      router.push("/");
    }, 200);
  }

  return (
    <div className={styles.container}>
      <h1>Add Destination</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Bali"
            required
          />
        </label>

        <label>
          Image URL or /public path
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="/images/bali.jpg"
          />
        </label>

        <label>
          Summary
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={4}
          />
        </label>

        <button type="submit" disabled={saving} className={styles.primary}>
          {saving ? "Adding..." : "Add Destination"}
        </button>
      </form>
    </div>
=======
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddDestination() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Destination added (Phase 2 will save it).");
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Add New Destination</h1>

        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <label>Destination Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>
      </main>
      <Footer />
    </>
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
  );
}

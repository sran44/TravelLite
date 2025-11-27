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
  );
}

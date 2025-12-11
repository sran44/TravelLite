// pages/index.js
import React, { useContext } from "react";
import { DestinationsContext } from "./_app";
import DestinationList from "../components/DestinationList";

export default function Home() {
  const { destinations } = useContext(DestinationsContext);
  if (!Array.isArray(destinations)) {
    return <p style={{ padding: "20px" }}>Loading...</p>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Explore Destinations</h1>
      <DestinationList destinations={destinations} />
    </main>
  );
}

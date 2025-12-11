<<<<<<< HEAD
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
=======
import { useState } from "react";
import Navbar from "../components/Navbar";
import DestinationList from "../components/DestinationList";
import Footer from "../components/Footer";
import destinationsData from "../data/destinations.json";

export default function Home() {
  // State lifting: parent controls data
  const [destinations, setDestinations] = useState(destinationsData);

  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Explore Destinations</h1>
        <DestinationList destinations={destinations} />
      </main>
      <Footer />
    </>
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
  );
}

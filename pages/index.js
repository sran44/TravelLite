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
  );
}

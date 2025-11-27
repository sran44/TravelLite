import { useRouter } from "next/router";
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
  );
}

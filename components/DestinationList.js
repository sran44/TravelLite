import DestinationCard from "./DestinationCard";
<<<<<<< HEAD
import styles from "../styles/List.module.css";

export default function DestinationList({ destinations }) {
  return (
    <div className={styles.grid}>
=======

export default function DestinationList({ destinations }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
      {destinations.map((d) => (
        <DestinationCard key={d.id} dest={d} />
      ))}
    </div>
  );
}

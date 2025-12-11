import DestinationCard from "./DestinationCard";
import styles from "../styles/List.module.css";

export default function DestinationList({ destinations }) {
  return (
    <div className={styles.grid}>
      {destinations.map((d) => (
        <DestinationCard key={d.id} dest={d} />
      ))}
    </div>
  );
}

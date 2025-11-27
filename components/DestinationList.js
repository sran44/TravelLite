import DestinationCard from "./DestinationCard";

export default function DestinationList({ destinations }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {destinations.map((d) => (
        <DestinationCard key={d.id} dest={d} />
      ))}
    </div>
  );
}

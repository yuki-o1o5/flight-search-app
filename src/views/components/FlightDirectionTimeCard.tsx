import MoreVertIcon from "@mui/icons-material/MoreVert";

interface FightDirectionTimeCardProps {
  arrivalTime: string;
  departureTime: string;
}

export default function FightDirectionTimeCard({
  arrivalTime,
  departureTime,
}: FightDirectionTimeCardProps) {
  return (
    <div className="flex flex-col gap-3 pb-2">
      <div>
        {departureTime.substring(0, 10)} {"  "}
        {departureTime.substring(11, 16)}
      </div>
      <MoreVertIcon style={{ visibility: "hidden" }} />
      <div>
        {arrivalTime.substring(0, 10)} {"  "} {arrivalTime.substring(11, 16)}
      </div>
    </div>
  );
}

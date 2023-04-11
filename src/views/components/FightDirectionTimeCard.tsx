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
      <div>{departureTime}</div>
      <MoreVertIcon />
      <div>{arrivalTime}</div>
    </div>
  );
}

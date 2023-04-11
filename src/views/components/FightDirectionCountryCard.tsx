import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface FlightCountry {
  arrival: string;
  departure: string;
}

export default function FightDirectionCountryCard({
  arrival,
  departure,
}: FlightCountry) {
  return (
    <div className="flex flex-col gap-3 pb-2">
      <div className="flex items-center gap-2">
        <PanoramaFishEyeIcon />
        <div>{departure}</div>
      </div>
      <MoreVertIcon />

      <div className="flex items-center gap-2">
        <PanoramaFishEyeIcon />
        <div>{arrival}</div>
      </div>
    </div>
  );
}

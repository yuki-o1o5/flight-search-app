import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FlightDirectionCountryCard from "./FlightDirectionCountryCard";
import FlightDirectionTimeCard from "./FlightDirectionTimeCard";
import WifiIcon from "@mui/icons-material/Wifi";
import PowerIcon from "@mui/icons-material/Power";
import Co2Icon from "@mui/icons-material/Co2";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

interface Segment {
  aircraft: {
    code: string;
  };
  arrival: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  carrierCode: string;
  departure: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  numberOfStops: number;
}

interface Itineraries {
  segments: Segment[];
}

interface AccordionCardProps {
  information: {
    id: number;
    itineraries: Itineraries[];
    numberOfBookableSeats: number;
    oneWay: boolean;
    price: {
      base: string;
      currency: string;
      grandTotal: string;
    };
    travelerPricings: Array<object>;
  };
}

export default function AccordionCard({ information }: AccordionCardProps) {
  return (
    <div>
      <Accordion className="py-3 px-10">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="w-2/5">
            <div className="flex justify-center gap-20 text-xl">
              <div>
                {information.itineraries[0].segments[0].departure.iataCode}
              </div>
              <HorizontalRuleIcon />
              <div>
                {information.itineraries[0].segments[
                  information.itineraries[0].segments.length - 1
                ].arrival.iataCode + " "}
              </div>
            </div>
            <div className="flex justify-center gap-20 text-gray-500">
              <div>
                {information.itineraries[0].segments[0].departure.at.substring(
                  0,
                  10
                )}
                {"  "}
                {information.itineraries[0].segments[0].departure.at.substring(
                  11,
                  16
                )}
              </div>
              <div>
                {information.itineraries[0].segments[
                  information.itineraries[0].segments.length - 1
                ].arrival.at.substring(0, 10)}{" "}
                {"  "}
                {information.itineraries[0].segments[
                  information.itineraries[0].segments.length - 1
                ].arrival.at.substring(11, 16)}
              </div>
            </div>
          </div>
          <div className="flex justify-center w-1/4">
            <div className="text-xl">
              {information.itineraries[0].segments.length - 1 === 0
                ? "Nonstop"
                : information.itineraries[0].segments.length - 1 + " Step"}
            </div>
          </div>
          <div className="flex justify-center w-1/4">
            <div className="text-xl">
              {information.price.grandTotal} {information.price.currency}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex justify-between">
            <div className="flex pl-20">
              <div>
                {information.itineraries[0].segments.map(
                  (eachFlight, index) => {
                    return (
                      <FlightDirectionCountryCard
                        key={index}
                        arrival={eachFlight.arrival.iataCode}
                        departure={eachFlight.departure.iataCode}
                      />
                    );
                  }
                )}
              </div>
              <div className="pl-5">
                {information.itineraries[0].segments.map(
                  (eachFlight, index) => {
                    return (
                      <FlightDirectionTimeCard
                        key={index}
                        arrivalTime={eachFlight.arrival.at}
                        departureTime={eachFlight.departure.at}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 text-gray-500">
                <div className="flex">
                  <WifiIcon />
                  <div className="pl-2">Wi-Fi for a free</div>
                </div>
                <div className="flex">
                  <PowerIcon />
                  <div className="pl-2">In-seat power & USB outlets</div>
                </div>
                <div className="flex">
                  <Co2Icon />
                  <div className="pl-2">Less carbon emissions</div>
                </div>
                <div className="flex">
                  <OndemandVideoIcon />
                  <div className="pl-2">On-demand video</div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

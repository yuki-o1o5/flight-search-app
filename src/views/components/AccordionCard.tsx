import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
// interface AccordionCardProps {
//   information: {
//     id: number;
//     itineraries: Itineraries[];
//     numberOfBookableSeats: number;
//     oneWay: boolean;
//     price: {
//       base: string;
//       currency: string;
//       grandTotal: string;
//     };
//     travelerPricings: Array<object>;
//   };
// }
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
          <Typography sx={{ width: "45%", flexShrink: 0 }}>
            <div className="flex justify-center gap-20 text-xl">
              <div>
                {information.itineraries[0].segments[0].departure.iataCode}
              </div>
              <div>
                {information.itineraries[0].segments[
                  information.itineraries[0].segments.length - 1
                ].arrival.iataCode + " "}
              </div>
            </div>

            <div className="flex justify-center gap-20">
              <div>{information.itineraries[0].segments[0].departure.at}</div>
              <div>
                {
                  information.itineraries[0].segments[
                    information.itineraries[0].segments.length - 1
                  ].arrival.at
                }
              </div>
            </div>
          </Typography>
          <Typography
            sx={{ width: "25%", flexShrink: 0 }}
            className="flex justify-center"
          >
            <div className="text-xl">
              {information.itineraries[0].segments.length - 1 === 0
                ? "Nonstop"
                : information.itineraries[0].segments.length - 1 + " Step"}
            </div>
          </Typography>
          <Typography
            sx={{ width: "30%", flexShrink: 0 }}
            className="flex justify-center"
          >
            <div className="text-xl">
              {information.price.grandTotal} {information.price.currency}
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

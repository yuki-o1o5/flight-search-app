import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// interface Segment {
//   aircraft: {
//     code: string;
//   };
//   arrival: {
//     iataCode: string;
//     terminal: string;
//     at: string;
//   };
//   carrierCode: string;
//   departure: {
//     iataCode: string;
//     terminal: string;
//     at: string;
//   };
//   numberOfStops: number;
// }

// interface Itineraries {
//   segment: Segment[];
// }
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
    itineraries: Array<object>;
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
      <Accordion className="py-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {information.numberOfBookableSeats}
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {information.price.grandTotal} {information.price.currency}
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            I am an accordion
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

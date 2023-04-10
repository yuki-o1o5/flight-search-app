import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface TravelDestinationProps {
  img: string;
  alt: string;
  cityName: string;
  IataCode: string;
}

export default function TravelDestinationCard({
  img,
  alt,
  cityName,
  IataCode,
}: TravelDestinationProps) {
  return (
    <Card className="flex">
      <CardMedia component="img" sx={{ width: 151 }} image={img} alt={alt} />
      <Box className="flex flex-col">
        <CardContent>
          <Typography>{cityName}</Typography>
          <Typography>{IataCode}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

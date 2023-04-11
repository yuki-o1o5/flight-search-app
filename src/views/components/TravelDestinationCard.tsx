import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface TravelDestinationProps {
  url: string;
  cityName: string;
  iataCode: string;
}

export default function TravelDestinationCard({
  url,
  cityName,
  iataCode,
}: TravelDestinationProps) {
  return (
    <Card className="flex">
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={url}
        alt={cityName}
      />
      <Box className="flex flex-col">
        <CardContent>
          <Typography>{cityName}</Typography>
          <Typography>{iataCode}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

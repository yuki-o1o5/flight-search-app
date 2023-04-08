import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ImageTop from "../../images/top.jpg";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // ----------------------------------------------------------------
  // Today's Date
  // ----------------------------------------------------------------
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // add 1 to convert to 1-indexed month
  const day: number = today.getDate() + 1;
  const formattedMonth: string = String(month).padStart(2, "0");
  const formattedDay: string = String(day).padStart(2, "0");
  const dateString: string = `${year}-${formattedMonth}-${formattedDay}`;

  // ----------------------------------------------------------------
  // useState
  // ----------------------------------------------------------------
  const [originalLocation, setOriginalLocation] = React.useState("");
  const [destinationLocation, setDestinationLocation] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState<Dayjs | null>(
    dayjs(dateString)
  );
  const formattedDepartureDate = departureDate
    ? departureDate?.format("YYYY-MM-DD")
    : "";

  const [adult, setAdult] = React.useState("");
  const [child, setChild] = React.useState("");
  const [travelClass, setTravelClass] = React.useState("");

  // ----------------------------------------------------------------
  // function
  // ----------------------------------------------------------------

  const navigate = useNavigate();

  const handleAdultChange = (event: SelectChangeEvent) => {
    setAdult(event.target.value as string);
  };

  const handleChildChange = (event: SelectChangeEvent) => {
    setChild(event.target.value as string);
  };

  const handleTravelClassChange = (event: SelectChangeEvent) => {
    setTravelClass(event.target.value as string);
  };

  const handleBringQueryToNextPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      originalLocationCode: originalLocation,
      destinationLocationCode: destinationLocation,
      departureDate: formattedDepartureDate,
      adultNumber: adult,
      childNumber: child,
      travelClass: travelClass,
    }).toString();
    navigate(`/detail?${queryParams}`);
  };

  return (
    <div className="mt-19">
      <img src={ImageTop} alt="top" className="bg-cover" />
      <form onSubmit={handleBringQueryToNextPage}>
        <TextField
          placeholder="Original Location"
          value={originalLocation}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setOriginalLocation(event.target.value);
          }}
        />
        <TextField
          placeholder="Destination Location"
          value={destinationLocation}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDestinationLocation(event.target.value);
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue)}
          />
        </LocalizationProvider>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <Select value={adult} onChange={handleAdultChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <Select value={child} onChange={handleChildChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <Select value={travelClass} onChange={handleTravelClassChange}>
              <MenuItem value={"ECONOMY"}>Ecomnomy</MenuItem>
              <MenuItem value={"PREMIUM_ECONOMY"}>Premium Economy</MenuItem>
              <MenuItem value={"BUSINESS"}>Business</MenuItem>
              <MenuItem value={"FIRST"}>First</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <button>Search</button>
      </form>
    </div>
  );
}

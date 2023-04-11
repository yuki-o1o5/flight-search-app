import React from "react";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  preOriginalLocationCode: any;
  preDestinationLocationCode: any;
  preDepartureDate: any;
  preAdultNumber: any;
  preChildNumber: any;
  preTravelClass: any;
}

export default function SearchBar({
  preOriginalLocationCode,
  preDestinationLocationCode,
  preDepartureDate,
  preAdultNumber,
  preChildNumber,
  preTravelClass,
}: SearchBarProps) {
  // ----------------------------------------------------------------
  // Today's Date
  // ----------------------------------------------------------------
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // add 1 to convert to 1-indexed month

  const returnDay: number = today.getDate() + 2;
  const formattedMonth: string = String(month).padStart(2, "0");

  const formattedReturnDay: string = String(returnDay).padStart(2, "0");

  const returnDateString: string = `${year}-${formattedMonth}-${formattedReturnDay}`;

  // ----------------------------------------------------------------
  // useState
  // ----------------------------------------------------------------
  const [originalLocation, setOriginalLocation] = React.useState(
    preOriginalLocationCode
  );
  const [destinationLocation, setDestinationLocation] = React.useState(
    preDestinationLocationCode
  );
  const [departureDate, setDepartureDate] = React.useState<Dayjs | null>(
    dayjs(preDepartureDate)
  );
  const formattedDepartureDate = departureDate
    ? departureDate?.format("YYYY-MM-DD")
    : "";

  const [returnDate, setReturnDate] = React.useState<Dayjs | null>(
    dayjs(returnDateString)
  );
  const formattedReturnDate = returnDate
    ? returnDate?.format("YYYY-MM-DD")
    : "";

  const [adult, setAdult] = React.useState(preAdultNumber);
  const [child, setChild] = React.useState(preChildNumber);
  const [travelClass, setTravelClass] = React.useState(preTravelClass);

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

  // const handleBringQueryToNextPage = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const queryParams = new URLSearchParams({
  //     originalLocationCode: originalLocation,
  //     destinationLocationCode: destinationLocation,
  //     departureDate: formattedDepartureDate,
  //     returnDate: formattedReturnDate,
  //     adultNumber: adult,
  //     childNumber: child,
  //     travelClass: travelClass,
  //   }).toString();
  //   navigate(`/detail?${queryParams}`);
  // };

  return (
    <>
      <form
        // onSubmit={handleBringQueryToNextPage}
        className="bg-rose-900 pt-10 pb-20"
      >
        <div className="flex justify-center">
          <Paper className="bg-white">
            <TextField
              placeholder="Original Location"
              value={originalLocation}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setOriginalLocation(event.target.value);
              }}
            />
          </Paper>
          <Paper className="bg-white">
            <TextField
              placeholder="Destination Location"
              value={destinationLocation}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDestinationLocation(event.target.value);
              }}
            />
          </Paper>
          <Paper className="bg-white">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={departureDate}
                onChange={(newValue) => setDepartureDate(newValue)}
              />
            </LocalizationProvider>
          </Paper>
          <Paper className="bg-white">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={returnDate}
                onChange={(newValue) => setReturnDate(newValue)}
              />
            </LocalizationProvider>
          </Paper>
        </div>
        <div className="flex justify-center my-5">
          <Paper className="bg-white">
            <Box>
              <FormControl sx={{ minWidth: 90 }}>
                <InputLabel htmlFor="adult-select-placeholder">
                  Adult
                </InputLabel>
                <Select
                  label="Adult"
                  value={adult}
                  onChange={handleAdultChange}
                  inputProps={{
                    name: "adult",
                    id: "adult-select-placeholder",
                  }}
                >
                  <MenuItem value={0}>0</MenuItem>
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
          </Paper>
          <Paper className="bg-white">
            <Box>
              <FormControl sx={{ minWidth: 90 }}>
                <InputLabel htmlFor="child-select-placeholder">
                  Child
                </InputLabel>
                <Select
                  label="Child"
                  value={child}
                  onChange={handleChildChange}
                  inputProps={{
                    name: "child",
                    id: "child-select-placeholder",
                  }}
                >
                  <MenuItem value={0}>0</MenuItem>
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
          </Paper>
          <Paper className="bg-white">
            <Box>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel htmlFor="travelClass-select-placeholder">
                  Travel Class
                </InputLabel>
                <Select
                  value={travelClass}
                  onChange={handleTravelClassChange}
                  inputProps={{
                    name: "travelClass",
                    id: "travelClass-select-placeholder",
                  }}
                >
                  <MenuItem value={"ECONOMY"}>Ecomnomy</MenuItem>
                  <MenuItem value={"PREMIUM_ECONOMY"}>Premium Economy</MenuItem>
                  <MenuItem value={"BUSINESS"}>Business</MenuItem>
                  <MenuItem value={"FIRST"}>First</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </div>
        <div className="flex justify-center  ">
          <button className="bg-sky-500 hover:bg-sky-700 px-6 py-2 rounded-md text-white">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

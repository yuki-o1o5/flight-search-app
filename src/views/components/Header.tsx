import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/k0003_1.svg";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Header() {
  // ----------------------------------------------------------------
  // Today's Date
  // ----------------------------------------------------------------
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // add 1 to convert to 1-indexed month
  const day: number = today.getDate() + 1;
  const returnDay: number = today.getDate() + 2;
  const formattedMonth: string = String(month).padStart(2, "0");
  const formattedDay: string = String(day).padStart(2, "0");
  const formattedReturnDay: string = String(returnDay).padStart(2, "0");
  const dateString: string = `${year}-${formattedMonth}-${formattedDay}`;
  const returnDateString: string = `${year}-${formattedMonth}-${formattedReturnDay}`;

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

  const [returnDate, setReturnDate] = React.useState<Dayjs | null>(
    dayjs(returnDateString)
  );
  const formattedReturnDate = returnDate
    ? returnDate?.format("YYYY-MM-DD")
    : "";

  const [adult, setAdult] = React.useState("");
  const [child, setChild] = React.useState("");
  const [travelClass, setTravelClass] = React.useState("");
  const [directFlightChecked, setDirectFlightChecked] = React.useState(true);

  // ----------------------------------------------------------------
  // function
  // ----------------------------------------------------------------

  const navigate = useNavigate();

  const handleDirectFlightChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirectFlightChecked(event.target.checked);
  };
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
      returnDate: formattedReturnDate,
      adultNumber: adult,
      childNumber: child,
      travelClass: travelClass,
    }).toString();
    navigate(`/detail?${queryParams}`);
  };

  return (
    <>
      <nav className="bg-rose-900 px-2 sm:px-4 py-5 dark:bg-gray-900  w-full z-20 top-0 left-0 h-1/5">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            FlySeacher
          </span>
        </Link>
      </nav>

      <form
        onSubmit={handleBringQueryToNextPage}
        className="bg-rose-900 pt-10 pb-20"
      >
        <div className="text-center text-white mb-10 text-3xl tracking-wide font-extrabold">
          Let's search your ideal flight
        </div>
        <div className="flex justify-center">
          {/* <FormControlLabel
            label="direct"
            control={
              <Checkbox
                checked={directFlightChecked}
                onChange={handleDirectFlightChange}
              />
            }
            className="text-white "
          /> */}
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
          {/* <Paper className="bg-white">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={returnDate}
                onChange={(newValue) => setReturnDate(newValue)}
              />
            </LocalizationProvider>
          </Paper> */}
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

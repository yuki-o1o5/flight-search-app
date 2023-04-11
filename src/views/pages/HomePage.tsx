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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Roma from "../../images/roma.jpg";
import Paris from "../../images/paris.jpg";
import London from "../../images/london.jpg";
import Barcelona from "../../images/barcelona.jpg";
import Vancouver from "../../images/vancouver.jpg";
import Sanfrancisco from "../../images/sanfrancisco.jpg";
import Hawaii from "../../images/hawaii.jpg";
import Mexico from "../../images/mexico.jpg";
import Bali from "../../images/bali.jpg";
import Tokyo from "../../images/tokyo.jpg";
import Taipei from "../../images/taipei.jpg";
import Delhi from "../../images/delhi.jpg";

// import TravelDestinationCard from "../components/TravelDestinationCard";
// import { images } from "../../constants/images";

export default function HomePage() {
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
      returnDate: formattedReturnDate,
      adultNumber: adult,
      childNumber: child,
      travelClass: travelClass,
    }).toString();
    navigate(`/detail?${queryParams}`);
  };

  return (
    <>
      <form
        onSubmit={handleBringQueryToNextPage}
        className="bg-rose-900 pt-10 pb-20"
      >
        <p className="text-center text-white mb-10 text-3xl">
          Let's search your ideal flight
        </p>
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
      <p className="my-5 mx-8">Popular Travel Destitation</p>
      <div className="my-5 mx-8 grid grid-cols-4 gap-3">
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Roma}
            alt="Roma"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Roma</Typography>
              <Typography>IATA code: FCO</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Paris}
            alt="Paris"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Paris</Typography>
              <Typography>IATA code: CDG</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={London}
            alt="London"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>London</Typography>
              <Typography>IATA code: LHR</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Barcelona}
            alt="Barcelona"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Barcelona</Typography>
              <Typography>IATA code: BCN</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Vancouver}
            alt="Vancouver"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Vancouver</Typography>
              <Typography>IATA code: YVR</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Sanfrancisco}
            alt="San Francisco"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>San Francisco</Typography>
              <Typography>IATA code: SFO</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Hawaii}
            alt="Hawaii"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Hawaii</Typography>
              <Typography>IATA code: HNL</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Mexico}
            alt="Mexico"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Mexico</Typography>
              <Typography>IATA code: MEX</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Bali}
            alt="Bali"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Bali</Typography>
              <Typography>IATA code: DPS</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Tokyo}
            alt="Tokyo"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Tokyo</Typography>
              <Typography>IATA code: NRT</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Taipei}
            alt="Taipei"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Taipei</Typography>
              <Typography>IATA code: TPE</Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Delhi}
            alt="Dehli"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography>Dehli</Typography>
              <Typography>IATA code: DEL</Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
    </>
  );
}

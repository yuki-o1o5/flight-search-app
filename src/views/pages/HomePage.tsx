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
  // ----------------------------------------------------------------
  // useState
  // ----------------------------------------------------------------

  // ----------------------------------------------------------------
  // function
  // ----------------------------------------------------------------

  return (
    <div className="h-3/5 overflow-auto">
      <div className="text-2xl my-10 mx-20 px-10">
        Popular Travel Destitation
      </div>
      <div className="mt-10 mb-20 mx-20 px-10 grid grid-cols-4 gap-3 ">
        <Card className="flex">
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image={Roma}
            alt="Roma"
          />
          <Box className="flex flex-col">
            <CardContent>
              <Typography style={{ fontSize: "1.2rem" }}>Roma</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: FCO</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Paris</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: CDG</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>London</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: LHR</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Barcelona</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: BCN</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Vancouver</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: YVR</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>
                San Francisco
              </Typography>
              <Typography style={{ color: "grey" }}>IATA Code: SFO</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Hawaii</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: HNL</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Mexico</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: MEX</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Bali</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: DPS</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Tokyo</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: NRT</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Taipei</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: TPE</Typography>
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
              <Typography style={{ fontSize: "1.2rem" }}>Dehli</Typography>
              <Typography style={{ color: "grey" }}>IATA Code: DEL</Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
      <div className="text-2xl my-10 mx-20 px-10">
        What is the ideal Flight?
      </div>
      <div className="mt-10 mb-20 mx-20 px-10 ">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

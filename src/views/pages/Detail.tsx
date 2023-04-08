import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { apiAuthorize } from "../../constants/apiAuthorize";
import AccordionCard from "../components/AccordionCard";

export default function Detail() {
  // ----------------------------------------------------------------
  // useState
  // ----------------------------------------------------------------

  const [flightDatas, setFlightDatas] = React.useState<Flight[]>([]);

  // ----------------------------------------------------------------
  // useEffect
  // ----------------------------------------------------------------
  useEffect(() => {
    (async () => {
      await fetchFlightData(
        originalLocationCode,
        destinationLocationCode,
        departureDate,
        adultNumber,
        childNumber,
        travelClass
      );
    })();
  }, []);

  console.log(flightDatas);

  // ----------------------------------------------------------------
  // Type
  // ----------------------------------------------------------------

  type Flight = {
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

  // ----------------------------------------------------------------
  // function
  // ----------------------------------------------------------------
  const useQueryParams = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
  };

  const params = useQueryParams();

  const originalLocationCode = params.get("originalLocationCode");
  const destinationLocationCode = params.get("destinationLocationCode");
  const departureDate = params.get("departureDate");
  const adultNumber = params.get("adultNumber");
  const childNumber = params.get("childNumber");
  const travelClass = params.get("travelClass");

  const fetchFlightData = async (
    originalLocationCode: any,
    destinationLocationCode: any,
    departureDate: any,
    adultNumber: any,
    childNumber: any,
    travelClass: any
  ) => {
    try {
      const accessToken = await apiAuthorize();
      const res = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originalLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adultNumber}&children=${childNumber}&travelClass=${travelClass}&nonStop=false&currencyCode=USD&max=250`,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = res.data.data;
      setFlightDatas(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mt-2">
        {flightDatas.map((flightData, index) => (
          <AccordionCard key={index} information={flightData} />
        ))}
      </div>
    </div>
  );
}

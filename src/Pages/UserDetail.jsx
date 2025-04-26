import React, { useEffect, useState } from "react";
import { useLogin } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const [user] = useLogin();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  console.log(user)

    const [inputs, setInputs] = useState({
      N: "",
      P: "",
      K: "",
      temperature: "",
      humidity: "",
      ph: "",
      rainfall: "",
    });

    const [prediction, setPrediction] = useState("");

    // Handle input changes
    const handleChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    // Function to send data to Flask backend
    const getPrediction = async () => {
      try {
        const res = await axios.post(
          "https://final-project-backend-v47z.onrender.com/predict",
          inputs
        );
        setPrediction(res.data.crop);
      } catch (error) {
        console.error(error);
      }
    };

// >>>>>>> 94a955accd1c675278a07f7247d097ccaa21962d
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, []); 

  // function to get the access of the location
  // const handleEnableLocation = () => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         // This is where you get the location
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;

  //         console.log(latitude, longitude);

  //         setCoordinates({
  //           latitude,
  //           longitude,
  //         });
  //       },
  //       function (error) {
  //         console.log("Error Code: " + error.code + " - " + error.message);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };

  // handleEnableLocation()
  // if (!coordinates?.longitude) {
  //   handleEnableLocation();
  // }

  // useEffect(() => {
  //   if (coordinates.latitude && coordinates.longitude) {
  //     console.log("entered");
  //     fetchSoilData();
  //   }
  // }, [coordinates]);

  // const fetchSoilData = async () => {
  //   const baseUrl = "https://rest.isric.org/soilgrids/v2.0/properties/query";
  //   const latitude = 52.379189;  // Netherlands latitude
  //   const longitude = 4.900931;  // Netherlands longitude
  //   const properties = ["phh2o", "ocd", "cec"];
  //   const depth = "0-5cm";  // Depth range for the data
  
  //   const datas = {};
  
  //   for (let prop of properties) {
  //     const url = `${baseUrl}?lon=${longitude}&lat=${latitude}&property=${prop}&depth=${depth}`;
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       datas[prop] = data;
  //     } catch (error) {
  //       console.error("Error fetching soil data:", error);
  //     }
  //   }
  
  //   console.log(datas);
  
  //   const ph = datas?.phh2o?.properties?.layers?.[0]?.depths?.[0]?.values?.mean;
  //   const ocd = datas?.ocd?.properties?.layers?.[0]?.depths?.[0]?.values?.mean;
  //   const cec = datas?.cec?.properties?.layers?.[0]?.depths?.[0]?.values?.mean;
  
  //   console.log(ph, ocd, cec);
  
  //   const estimatedN = ocd ? (ocd / 10).toFixed(2) : "";
  //   const estimatedP = ph ? (ph * 1.5).toFixed(2) : "";
  //   const estimatedK = cec ? (cec * 0.2).toFixed(2) : "";
  
  //   console.log(estimatedN, estimatedP, estimatedK);
  // };
  

  return (
    <div className="flex item-center justify-between h-fit w-full ">
      <div className="w-1/2 flex  flex-col item-center p-6 justify-center ">
        <div className="">
          <div>
            <h2>User Details</h2>
            <p> Username : {user?.userId}</p>
          </div>
        </div>
        <div>
          <h2>Previous Datas</h2>
          <div>
            <p>Temperature : {}</p>
            <p>Moisture : {}</p>
            <p>Humidity : {}</p>
            <div>
              <h2>RGB Values :</h2>
              <p>Red : {}</p>
              <p>Green : {}</p>
              <p>Blue : {}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 items-center  justify-center  p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border-green-600 border-1 ">
          <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
            🌾 Crop Recommendation System
          </h1>

          <div className="grid grid-cols-2 gap-4">
            {Object.keys(inputs).map((key) => (
              <input
                key={key}
                type="number"
                name={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            ))}
          </div>

          <button
            onClick={getPrediction}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-6 transition duration-300"
          >
            Predict Crop 🌱
          </button>

          {prediction && (
            <div className="mt-6 text-center bg-green-100 text-green-800 font-bold py-2 rounded-lg">
              Recommended Crop:{" "}
              <span className="text-green-700">{prediction}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useLogin } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const [user] = useLogin();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, []); 

  console.log(user);

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

    return (
      <div className='flex flex-col items-center justify-center min-h-screen  p-6'>
        <div className='bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border-green-600 border-1 '>
          <h1 className='text-2xl font-bold text-center text-green-600 mb-6'>
            🌾 Crop Recommendation System
          </h1>

          <div className='grid grid-cols-2 gap-4'>
            {Object.keys(inputs).map((key) => (
              <input
                key={key}
                type='number'
                name={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
              />
            ))}
          </div>

          <button
            onClick={getPrediction}
            className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-6 transition duration-300'
          >
            Predict Crop 🌱
          </button>

          {prediction && (
            <div className='mt-6 text-center bg-green-100 text-green-800 font-bold py-2 rounded-lg'>
              Recommended Crop:{" "}
              <span className='text-green-700'>{prediction}</span>
            </div>
          )}
        </div>
      </div>
    );
  };


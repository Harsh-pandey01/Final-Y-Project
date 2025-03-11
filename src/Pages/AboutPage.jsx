import React from "react";

export default function AboutPage() {
  return (
    <div className='my-10 wrapper'>
      <div className='max-w-[1000px] mx-auto'>
        <h1 className='text-left poppins text-5xl font-bold'>
          About Our AI-Powered Smart Farming Solution
        </h1>

        <h3 className='poppins mt-10 mb-5 text-xl font-semibold'>
          🌍 Revolutionizing Agriculture with IoT & AI
        </h3>
        <p className='poppins leading-8 text-gray-700'>
          In today's world, precision agriculture is becoming essential due to
          climate change, soil degradation, and unpredictable weather patterns.
          Traditional farming methods often lack real-time insights, leading to
          inefficient farming decisions and lower yields. <br /> To solve this,
          we have developed a smart, AI-driven crop recommendation system that
          leverages IoT sensors, cloud computing, and machine learning to help
          farmers make data-driven decisions about their crops.
        </p>
        <div className='w-full h-[2px] bg-gray-200 my-5'></div>

        {/*  --------------------------------------------------------------------------------- */}

        <h2 className='poppins mt-10 mb-5 text-2xl font-semibold'>
          🚀 Project Overview
        </h2>
        <p className='py-5 text-gray-700'>
          Our project consists of three main components:
        </p>
        <h2 className='text-xl poppins font-semibold'>
          1️⃣ Smart Hardware for Soil Testing
        </h2>
        <p className='py-3 text-gray-700'>
          A custom-built Arduino-based hardware system equipped with multiple
          sensors to analyze the soil condition.
        </p>
        <h2 className='text-xl poppins font-semibold'>
          2️⃣ Cloud-Based Data Storage & User Access
        </h2>
        <p className='py-3 text-gray-700'>
          A Firebase Realtime Database for securely storing and managing soil
          test results for individual users.
        </p>
        <h2 className='text-xl poppins font-semibold'>
          3️⃣ AI-Powered Crop Recommendation System
        </h2>
        <p className='py-3 text-gray-700 leading-8'>
          A machine learning model that takes soil parameters as input and
          predicts the best-suited crops for optimal yield. <br /> With this
          end-to-end solution, users can test their soil, store data securely,
          and receive AI-powered crop suggestions—all from a single integrated
          platform.
        </p>

        <div className='w-full h-[2px] bg-gray-200 my-5'></div>

        {/* ------------------------------------------------------------------------------------ */}

        <h2 className='poppins mt-10 mb-2 text-2xl font-semibold'>
          🪛 1. Smart Hardware for Soil Testing
        </h2>

        <p className='py-5 text-gray-700'>
          Our hardware is built using Arduino Uno and multiple sensors to
          collect accurate real-time soil data. The device is portable,
          low-cost, and efficient for field use.
        </p>

        <h3 className='text-xl poppins font-semibold'>
          🔬 Sensors & Functionality
        </h3>
        <table className=' my-3 border-gray-200 rounded-md border-2 text-left '>
          <tr>
            <th className='p-2 border-1 min-w-[300px] border-gray-100 bg-gray-200 text-[15px] font-semibolds'>
              Firstname
            </th>
            <th className='p-2 border-1 border-gray-100 bg-gray-200 text-[15px] font-semibolds'>
              Purpose
            </th>
          </tr>
          <tr>
            <td className='p-2 border-1 border-gray-200'>Arduino Uno</td>
            <td className='p-2'>
              Microcontroller that processes sensor data and sends it to
              Firebase.
            </td>
          </tr>
          <tr className='border-1 border-gray-200'>
            <td className='p-2  border-1 border-gray-200'>Moisture Sensor</td>
            <td className='p-2'>
              Measures the water content in the soil to determine hydration
              levels.
            </td>
          </tr>
          <tr className='border-1 border-gray-200'>
            <td className='p-2 border-1 border-gray-200'>Temperature Sensor</td>
            <td className='p-2'>
              Detects ambient soil temperature, which affects plant growth.
            </td>
          </tr>
          <tr className='border-1 border-gray-200'>
            <td className='p-2 border-1 border-gray-200'>
              RGB Color Sensor (NPK Generator)
            </td>
            <td className='p-2'>
              Analyzes soil color and estimates Nitrogen (N), Phosphorus (P),
              and Potassium (K) values—critical nutrients for plant growth.
            </td>
          </tr>
        </table>

        <h3 className='text-xl mb-2 poppins font-semibold'>
          📡 How the Hardware Works
        </h3>
        <p className='py-2 text-gray-700'>
          1️⃣ The farmer places the device in the soil and starts the soil test.
        </p>
        <p className='py-2 text-gray-700'>
          2️⃣ Sensors analyze the soil parameters (moisture, temperature, NPK
          levels, etc.).
        </p>
        <p className='py-2 text-gray-700'>
          3️⃣ The Arduino processes the data and sends it to Firebase in
          real-time via an internet connection.
        </p>
        <p className='py-5 text-gray-700'>
          The data is then stored in the cloud, making it available for users
          whenever they log in to the system.
        </p>

        <div className='w-full h-[2px] bg-gray-200 my-5'></div>

        {/*--------------------------------------------------------------  */}

        <h2 className='poppins mt-10 mb-2 text-2xl font-semibold'>
          ☁️ 2. Cloud-Based Data Storage & User Access
        </h2>

        <p className='py-5 text-gray-700'>
          To ensure seamless access to soil data, we use Firebase Realtime
          Database, a scalable and secure cloud-based platform.
        </p>
      </div>
    </div>
  );
}

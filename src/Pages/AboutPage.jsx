import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌍 Revolutionizing Agriculture with IoT & AI
      </h1>
      <p className="text-lg text-center mb-8">
        In today's world, precision agriculture is essential due to climate change, soil degradation, and unpredictable weather patterns. Our AI-powered smart farming solution integrates IoT sensors, cloud computing, and machine learning to help farmers make data-driven decisions.
      </p>

      <h2 className="text-2xl font-semibold mt-8">🚀 Project Overview</h2>
      <ul className="list-disc pl-6">
        <li><strong>Smart Hardware for Soil Testing:</strong> Arduino-based device with multiple sensors.</li>
        <li><strong>Cloud-Based Data Storage:</strong> Secure Firebase Realtime Database for user-specific data.</li>
        <li><strong>AI-Powered Crop Recommendation:</strong> ML model to predict best crops based on soil parameters.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">🛠 1. Smart Hardware for Soil Testing</h2>
      <p>Our Arduino Uno-based hardware system collects accurate real-time soil data using various sensors.</p>
      
      <h3 className="text-xl font-semibold mt-4">🔬 Sensors & Functionality</h3>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Component</th>
            <th className="border border-gray-400 p-2">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Arduino Uno</td>
            <td className="border border-gray-400 p-2">Processes sensor data and sends to Firebase</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Moisture Sensor</td>
            <td className="border border-gray-400 p-2">Measures soil water content</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Temperature Sensor</td>
            <td className="border border-gray-400 p-2">Detects ambient soil temperature</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">RGB Color Sensor</td>
            <td className="border border-gray-400 p-2">Estimates NPK levels in soil</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8">☁️ 2. Cloud-Based Data Storage & User Access</h2>
      <p>Our Firebase-based system ensures real-time data updates, user authentication, and cross-device access.</p>
      <ul className="list-disc pl-6">
        <li>✅ Real-time data updates</li>
        <li>✅ User-specific data storage</li>
        <li>✅ Secure Firebase Authentication</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">🤖 3. AI-Powered Crop Recommendation System</h2>
      <p>Using machine learning, our system predicts the best crops for a given soil condition.</p>
      
      <h3 className="text-xl font-semibold mt-4">🌾 AI Model Workflow</h3>
      <ol className="list-decimal pl-6">
        <li>Input soil parameters (temperature, moisture, NPK values).</li>
        <li>ML model processes data and compares with training datasets.</li>
        <li>Users receive a ranked list of suitable crops.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8">🛠 Technology Stack</h2>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Component</th>
            <th className="border border-gray-400 p-2">Technology Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Hardware</td>
            <td className="border border-gray-400 p-2">Arduino Uno, Sensors</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Cloud Database</td>
            <td className="border border-gray-400 p-2">Firebase Realtime Database</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Authentication</td>
            <td className="border border-gray-400 p-2">Firebase Auth</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Web App</td>
            <td className="border border-gray-400 p-2">React.js, Tailwind CSS</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Machine Learning</td>
            <td className="border border-gray-400 p-2">Python (Scikit-learn, TensorFlow)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8">🔗 Conclusion</h2>
      <p className="mb-6">Our AI-powered farming system integrates IoT, cloud computing, and AI to enable precision agriculture. With our solution, farmers can make smarter decisions, increase productivity, and optimize resources.</p>
    </div>
  );
};

export default AboutPage;

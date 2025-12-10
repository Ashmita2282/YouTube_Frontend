// src/api/authApi.js

import axios from "axios";

// Register API call
export const registerUser = async (formData) => {
  const response = await axios.post(
    "https://youtube-backend-1-negc.onrender.com/api/register",
    formData
  );
  return response.data; // { success, message, data }
};

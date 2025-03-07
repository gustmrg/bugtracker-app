import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle global errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response if successful
  },
  (error) => {
    if (error.response) {
      // Handle specific HTTP errors
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized: Redirect to login");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("An error occurred");
      }
    }
    return Promise.reject(error); // Pass the error to the calling function
  }
);

export default axiosInstance;

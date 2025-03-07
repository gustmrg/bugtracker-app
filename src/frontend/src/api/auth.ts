import axios from "@/lib/axios";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email: string;
  password: string;
  name: string;
};

export const authApi = {
  login: async (data: LoginData) => {
    const response = await axios.post("/auth/login", data);
    return response.data;
  },
  register: async (data: RegisterData) => {
    const response = await axios.post("/auth/register", data);
    return response.data;
  },
  logout: async () => {
    const response = await axios.post("/auth/logout");
    return response.data;
  },
  getUser: async () => {
    const response = await axios.get("/auth/user");
    return response.data;
  },
};

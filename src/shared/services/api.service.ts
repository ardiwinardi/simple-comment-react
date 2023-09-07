import createAxiosInstance from "./axios.service";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const api = createAxiosInstance(`${API_URL}`);
export default api;

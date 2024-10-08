import axios from "axios";
import { Image } from "./components/App";

const API_KEY = "mq7ZxVWJVhP1ave3bX0cmTxKRM8CAZLl8PZN4xe2Pl0";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export interface Response {
  page: number;
  total_pages: number;
  results: Image[];
}

export const fetchPhotos = async (
  query: string,
  page: number
): Promise<Response | never> => {
  const response = await axios.get<Response>("/search/photos", {
    params: {
      query,
      per_page: 18,
      page,
      orientation: "landscape",
    },
  });

  return response.data;
};

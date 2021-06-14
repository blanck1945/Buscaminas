import Axios from "axios";
import { Router } from "../data/Router";

export const AxiosFetcher = async (path: string) => {
  try {
    const res = await Axios.get(Router.mongoURL + path);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

import axios from "axios";

export const FETCH_FLIGHT = "FETCH_FLIGHT";

export function getAllFights() {
  const request = axios.get("http://localhost:4000/api?nx=60&ny=127");
  console.log(request);
  return {
    type: FETCH_FLIGHT,
    payload: request,
  };
}

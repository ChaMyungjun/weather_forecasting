
// export const weatherData = async (nx, ny) => {
//   const data = await axios.get(`http://localhost:4000/api?nx=${nx}&ny=${ny}`);

//   const info = {};
//   info.baseTime = data.data.baseTime;
//   info.baseDate = data.data.baseDate;

//   info.TMP = data.data.T1H;
//   info.RNH = data.data.RN1;
//   info.SKY = data.data.PTY;

//   return info;
// };

// export function getAllFlights(request) {
//   console.log(request);
//   return {
//     type: WEATHER,
//     payload: request,
//   };
// }

import client from "./client";
// import { WEATHER } from "../../components/modules/weather";

// export function getAllFlights(request) {
//   console.log(request);
//   return {
//     type: WEATHER,
//     payload: request,
//   };
// }

export const weather = ({ nx, ny }) =>
  client.get(`http://localhost:4000/api?nx=${nx}&ny=${ny}`)

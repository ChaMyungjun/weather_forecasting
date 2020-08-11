// import axios from "axios";

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

// import axios from 'axios'

// export const FETCH_FLIGHT = 'FETCH_FLIGHT';

// export function getAllFlights() {
//   const request = axios.get('http://localhost:4000/api?nx=60&ny=127')

//   console.log(request)
// }

import client from "./client";

export const weather = ({ nx, ny }) => console.log(nx, ny);

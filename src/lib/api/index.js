import client from "client";

export const weather = ({ nx, ny }) =>
  client.get("http://localhost:4000/api?nx=${nx}&ny=${ny}");

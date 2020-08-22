import React, { useState } from "react";
import City from "./components/CityPicker/cityPicker";
import WeatherMain from "./components/Page/main/main";
import MainTemplate from "./components/templates/MainTemplate";
import Appbar from "./components/templates/Appbar";
import { Typography } from "@material-ui/core";
import styles from "./App.module.css";

const App = () => {
  const [nx, setNx] = useState(0);
  const [ny, setNy] = useState(0);
  const cityCode = (cityNx, cityNy) => {
    setNx(cityNx);
    setNy(cityNy);
  };

  return (
    <React.Fragment>
      <MainTemplate>
        <Appbar cityParsing={cityCode} nx={nx} ny={ny} />
        {/* <City cityParsing={cityCode} /> */}
      </MainTemplate>
    </React.Fragment>
  );
};

export default App;

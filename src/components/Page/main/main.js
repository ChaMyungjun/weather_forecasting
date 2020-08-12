import React, { useEffect, useState } from "react";
import { Typography, CssBaseline } from "@material-ui/core";
import clear from "../../../img/sun.png";
import snow from "../../../img/snow.png";
import shower from "../../../img/meteor-shower.png";
import ice from "../../../img/ice.png";
import rainy from "../../../img/rain.png";
import { weatherRead } from "../../modules/weather";
import Clock from "../../Clock/clock";
import styles from "./main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllFlights } from "../../../lib/api/weather";

const WeatherMain = ({ nx, ny }) => {
  const [temp, setTemp] = useState(0);
  const [rain, setRain] = useState(0);
  const [type, setType] = useState(0);

  const { data, error } = useSelector(({ weather }) => ({
    data: weather.data,
    error: weather.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherRead({ nx, ny }));
  }, [nx, ny]);

  useEffect(() => {
    dispatch(getAllFlights());
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await weatherData(nx, ny);
  //     setTemp(data.TMP);
  //     setRain(data.RNH);
  //     setType(data.SKY);
  //   }
  //   fetchData();
  // }, [nx, ny]);

  console.log({ data, error });

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.mainForm}>
        <div>
          {type === "1" ? (
            <img src={rainy} alt="rain" className={styles.imgForm} />
          ) : type === "2" ? (
            <img src={ice} alt="ice" className={styles.imgForm} />
          ) : type === "3" ? (
            <img src={snow} alt="snow" className={styles.imgForm} />
          ) : type === "4" ? (
            <img src={shower} alt="shower" className={styles.imgForm} />
          ) : type === "0" ? (
            <img src={clear} alt="clear" className={styles.imgForm} />
          ) : (
            <Typography className={styles.imgForm}>
              지역이 선택 되지않았습니다
            </Typography>
          )}
          <Clock />
        </div>
        <div className={styles.textForm}>
          <Typography className={styles.tempText} variant="h2" component="h1">
            {temp}&deg;
          </Typography>
          <Typography>시간당 강수량: {rain}mm</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherMain;

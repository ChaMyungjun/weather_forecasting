import React from "react";
import { TextField, MenuItem, CssBaseline } from "@material-ui/core";
import styles from "./cityPicker.module.css";
import data from "../../city.json";

const cityPciker = ({ cityParsing }) => {
  //const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.pickerForm}>
        <TextField
          color="secondary"
          select
          label="City"
          labe
          helperText="List of City"
          onChange={(e) =>
            cityParsing(data.nx[e.target.value], data.ny[e.target.value])
          }
          className={styles.picker}
        >
          {data.city.map((city, index) => {
            return (
              <MenuItem key={city} value={index}>
                {city}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    </React.Fragment>
  );
};

export default cityPciker;

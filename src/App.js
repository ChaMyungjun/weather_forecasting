// import React, { useState } from "react";
// import City from "./components/CityPicker/cityPicker";
// import WeatherMain from "./components/Page/main/main";
// import MainTemplate from "./components/templates/MainTemplate";
// import { Typography } from "@material-ui/core";
// import styles from "./App.module.css";

// const App = () => {
//   const [nx, setNx] = useState(0);
//   const [ny, setNy] = useState(0);
//   const cityCode = (cityNx, cityNy) => {
//     setNx(cityNx);
//     setNy(cityNy);
//   };

//   return (
//     <React.Fragment>
//       <MainTemplate>
//         <Typography
//           align="center"
//           className={styles.head}
//           variant="h2"
//           component="h1"
//         >
//           Today's Weather
//         </Typography>
//         <City cityParsing={cityCode} />
//         <WeatherMain nx={nx} ny={ny} />
//       </MainTemplate>
//     </React.Fragment>
//   );
// };

// export default App;


import React from 'react'
import {connect} from 'react'
import {bindActionCreators} from 'redux'
import {getAllFlights} from './lib/api/index'

class App extends React.Component {
  componentWillMount() {
    this.props.selectFlight()
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dest: state.icelandair
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectFlight: getAllFlights}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
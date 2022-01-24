import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

export default class app extends Component {
  render() {
    return (
      <div className={styles.container}> 
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

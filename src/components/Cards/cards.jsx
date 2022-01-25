import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from "./cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading..";
  }
  console.log(confirmed);
  console.log({ data: { confirmed, recovered, deaths, lastUpdate } });
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {/* Card for active cases */}
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">No.of Active Cases</Typography>
          </CardContent>
        </Grid>
        {/* Card for Recovered cases */}
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">No.of Recoveries</Typography>
          </CardContent>
        </Grid>
        {/* Card for Deaths */}
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">No.of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;

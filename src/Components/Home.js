import { CssBaseline, makeStyles, Button, Grid } from '@material-ui/core';
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';
import React, { useEffect, useState } from 'react';
import { MockData } from '../MockData';  // Corrected import statement


const Home = () => {
  const classes = useStyles();
  const [showdates, setShowdates] = useState(false)

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <Button onClick={()=>setShowdates(!showdates)}>
            {
              showdates ? "Hide" : "Search Dates"
            }
          </Button>
        </div>
        {
            showdates && <DatePicker/>
          }
        <Banner />
        <Grid container className={classes.section} spacing={3}>
          {
            MockData.map(({src, title, description}, index)=>(
              <Grid item sm="6" md='4' lg="3">
              <RoomCard src={src}
                  title={title}
                  description={description}
                  key={index} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </>
  );
};


const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      color: "rgba(255,103,0.4)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& botton:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    } 
  },
  
}));

export default Home;


import { CssBaseline, makeStyles, Button } from '@material-ui/core';
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';
import React, { useEffect, useState } from 'react';


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
        <div className={classes.section}>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </>
  );
};


const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    flexDirection: "column",
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


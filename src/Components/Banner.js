import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import background_image from './backgroundbanner.jpeg';

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant='h2'>Plan your getaway...</Typography>
        <Button variant='contained'>Check our Rooms</Button>       
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "65vh",
    position: "relative",
    backgroundImage: `url(${background_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",    
  },
  info: {
    backgroundColor: "#000",
    color: "#fff",
    width: "350px",
    padding: theme.spacing(2),
    "& h2":{
      marginBottom: theme.spacing(4)
    },
    "& buttom":{
      backgroundColor: "rgba(255,103,31)",
      color: "#fff",
      textTransform: "inherit",
      fontSize: "1,2rem",
      fontWeight: "bold",
    }
  }
}));

export default Banner;

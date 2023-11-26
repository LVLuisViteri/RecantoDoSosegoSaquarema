import { Typography, makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import React from 'react'

const RoomCard = ({src, title, description}) => {
  const classes = useStyles()
  return (
    <div className={ CallMissedSharp.root}>
        <figure className={classes.imageWrapper }>
            <img className={classes.media} src={src} alt={title }/>
    </figure>
        <Typography variant='h5' color="textPrimary">{title}</Typography>
        <Typography variant='h6' color="textSecondary">{description}</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme)=>({
  root: {
    margin: theme.spacing(4,0,2,0),
    [theme.breakpoints.down("xs")]: {
      "& h6": {
        wordWrap: "break-word",
      }
    }

  },
  imageWrapper: {
    overflow: "hidden",
  },
  media: {
    height: "400px",
    width: "600px",
    objectFit: 'cover',
    transform: "scale(1.1)",
    webkitTransform: "scale(1.1)",
    WebkitTransition: ".4 ease-in-out",
    transition: ".4 ease-in-out",
    "&:hover": {
      transform: "scale(1)",
      WebkitTransition: ".4 ease-in-out",
      webkitTransform: "scale(1)",
    },
    [theme.breakpoints.down("xs")]:{
      height: "200px",
      width: "100%"
    }
  }
}))

export default RoomCard;

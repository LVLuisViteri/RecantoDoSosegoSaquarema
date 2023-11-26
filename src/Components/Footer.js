import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const Footer = () => {
  const classes = useStyles(); // Agrega esta línea para definir las clases

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        2023 Copyright by @Recanto do Sossego solidaquarema
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Privacy - Terms - Sitemap 
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #ccc",
    textAlign: "center",
    fontStyle: "italic",
    margin: theme.spacing(2),
    background: "whiteSmoke"
  },
}));

export default Footer;


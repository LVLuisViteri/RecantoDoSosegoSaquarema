import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { AppBar, InputBase, Toolbar, Typography, Avatar, makeStyles, IconButton, Button, Drawer, List, ListItem } from '@material-ui/core'
import { People } from '@material-ui/icons';
import {useHistory} from 'react-router-dom'

const selectionRange = {
  startDate: new Date(2021, 3, 10),
  endDate: new Date(2021, 3, 10),
}

const DatePicker = () => {
  const classes = useStyles()
  const history = useHistory()
  const handleSelect = () => { }
  return (
    <div className={classes.root}>
        <DateRangePicker ranges={[selectionRange]} 
            onChange={handleSelect }
      />
        <div className={classes.inputSection}>
            <Typography variant='h5'>Number of Guest</Typography>
            <div className={classes.people}>
              <InputBase placeholder='2pax'
              inputProps={{classNam: classes.input }}
              />
              <People/>
            </div>
            <Button onClick={()=> history.push("/search")}>Search Rooms</Button>
        </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "13vh",
    left: "30vw",
    zIndex: "50",
    [theme.breakpoints.down("xs")]: {
      top: "16vh",
      left: 0,
    }
  },
  inputSection: {
    display: "flex",  // Añadida coma aquí
    flexDirection: "column",
    backgroundColor: "#fff",
    "& h5":{
      textAlign: "center"
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff"
    }
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "5vw",
    border: "1px solid #ccc",
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(1),
  }
}));

export default DatePicker;
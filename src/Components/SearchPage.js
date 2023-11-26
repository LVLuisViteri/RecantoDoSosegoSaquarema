import { Typography, makeStyles } from '@material-ui/core';
import {chips } from "../MockData"

const SearchPage = () => {
  const classes = useStyle()
  return (
    <div className={classes.root }>
      <Typography variant='h5' gutterBottom>
        Disponibilidade     
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default SearchPage

import { CssBaseline, makeStyles } from '@material-ui/core';
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';


const Home = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <DatePicker/>
        </div>
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

const useStyles = makeStyles((theme) => ({}));

export default Home;


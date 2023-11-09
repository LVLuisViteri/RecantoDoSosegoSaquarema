import React, { useEffect, useState } from 'react'
import { AppBar, InputBase, Toolbar, Typography, Avatar, makeStyles, IconButton, Drawer, List, ListItem } from '@material-ui/core'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobile, setMobile] =useState(true)
  const [draweropen, setDraweropen]=useState(false)
  const classes = useStyles()
  
  useEffect(()=>{
    const responsiveness = () => window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    responsiveness();
    window.addEventListener("resize", ()=> responsiveness())
  },[mobile])
  
  const displayMobile = () => {
    const handleDrawerOpen=() => {
      setDraweropen(true)
     }
    const handleDrawerClose=() => {
      setDraweropen(false)
     }

    const headersData = ['My Account', 'Previous bookings', 'Log out']

    const getDrawerChoices=() => {
      return headersData.map((data)=> {
        return (
          <List>
            <ListItem>{data}</ListItem>
          </List>
        )
      })
     }
    return(
      <Toolbar className={classes.toolbar} >
      <IconButton {...{
          edge: "start", 
          color: "#ccc",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
          }}>
        <MenuIcon fontSize='large'/>
      </IconButton>
          <Drawer {...{
            anchor: "left",
            open: draweropen,
            onClose: handleDrawerClose,
          }}>
            <div>{getDrawerChoices()}</div>
          </Drawer>
          <Link to="/">
              <img src={logo} className={classes.image} alt='logo'/>
          </Link>
          <div className={classes.right}>
            <Typography>Sign in </Typography>
            <Avatar className={classes.avatar}/>
          </div>
    </Toolbar>
    )
    }
  const displayDesktop = () => (
        <Toolbar className={classes.toolbar}>
          <Link to="/">
              <img src={logo} alt="Logo" className={classes.image} />
          </Link>
          
          <div className={classes.center}>
            <InputBase fullWidth placeholder='Search here...' inputProps={{className: classes.input}}/> 
            <SearchIcon/>
          </div>
          <div className={classes.right}>
            <Typography>Sign in </Typography>
            <Avatar className={classes.avatar}/>
          </div>
        </Toolbar>
    )
  return (
    <AppBar className={classes.root}>
      {
        mobile ? displayMobile() : displayDesktop()
      }
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#ECF8F1',
    zIndex: 99,

  },
  toolbar: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    maxWidth: '100px',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
  },
  input: {
    fontSize: '1.2rem',
    padding: theme.spacing(1,5,1,5)
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: '1px solid lightgray',
    minWidth: '300px',
    borderRadius: '999px',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  right: {
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(2)
  },
  avatar: {
    marginLeft: theme.spacing(2)
  }
}));
export default Header
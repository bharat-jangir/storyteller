import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import style from "../styles/adminlogin1680.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Hindistories from '../components/Hindistories.';
import Englishstories from '../components/Englishstories';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../redux/userSlice'
import Authentication from '../components/Authentication';

function Admindashboard() {
  const [hindi, setHindi] = useState(false)
  const [english, setEnglish] = useState(false)

  const User = useSelector(selectUser)
  const dispatch = useDispatch()


  const Logout=()=>{
    localStorage.removeItem("S_T_U")
    dispatch(logout())
  }


  const showHindi = () => {
    setHindi(true)
    setEnglish(false)
  }
  const showEnglish = () => {
    setEnglish(true)
    setHindi(false)
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List style={{ color: "red" }}>

        <ListItem button key={"Hindi"}>
          <ListItemText primary={"Hindi"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Hindi"} onClick={(e) => showHindi()}>
          <ListItemText primary={"Hindi Stories"} />
        </ListItem>
      </List>
      <List>

        <ListItem button key={"Hindi"}>
          <ListItemText primary={"Hindi Shayri"} />
        </ListItem>
      </List>
      <List style={{ color: "red" }}>
        <ListItem button key={"English"}>
          <ListItemText primary={"English"} />
        </ListItem>
      </List>
      <Divider />
      <List>

        <ListItem button key={"English"}>
          <ListItemText primary={"English Stories"} onClick={(e) => showEnglish()} />
        </ListItem>
      </List>
      <List>

        <ListItem button key={"Hindi"}>
          <ListItemText primary={"English Shayri"} />
        </ListItem>
      </List>



      <List>
        <ListItem button key={"Logout"} style={{backgroundColor:"red"}} onClick={()=>Logout()}>
          <ListItemText primary={"Logout"} />
          <LogoutIcon/>
        </ListItem>
      </List>



    </Box>
  );


  return (
    !User ? (<Authentication />) : (
      <>
        <div className={style.Admindashboard_header}>
          <h1>manish</h1>
          <MenuIcon className={style.Hamburger} onClick={toggleDrawer("left", true)} style={{ fontSize: "3rem", top: "20px", margin: "auto", right: "10px", position: "absolute" }} />

          <div className={style.Logout}>
            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "red", width: "5rem", display: "flex", justifyContent: "center", alignItem: "center" }}>
              Logout
              <LogoutIcon />
            </div>
          </div>
        </div>
        <div>
          {
            <React.Fragment key={"left"}>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </React.Fragment>
          }
        </div>
        <div>
          {
            hindi && <Hindistories /> ||
            english && <Englishstories /> ||
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: "absolute", backgroundColor: "rgba(52, -966, 45, 1.475)" }}>
              <h1 style={{ color: "white", fontSize: "2rem" }}>Never Stop..!</h1>
              <h2>Bharat jangir</h2>

            </div>
          }
        </div>

      </>)


  )
}

export default Admindashboard

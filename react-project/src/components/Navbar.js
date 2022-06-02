import React, { useEffect, useState } from "react"
// eslint-disable-next-line
import { auth, getSession } from "../api/auth"
import logo from "../assets/logo.svg";
import "../assets/css/Navbar.css"
import { Button } from "@mui/material";
import axios from "axios";
import { API_URL } from "../api/config"

export default function Navbar() {
  // TODO: answer here
  const [state, setState] = useState({});
  //eslint-disable-next-line
  const [user, setUser] = useState({});
  //eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  //console.log(props)
  const sessionApi = async () => {
    try {
      await axios.get(`${API_URL}/auth/session`, { withCredentials: true })
        .then((res) => {
          setState(res.data)
        }).catch((err) => {
          console.log(err);
        })
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const getUser = async () => {
      const session = await getSession();
      setUser(session?.data);
      if (session?.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    getUser();
  }, []);


  useEffect(() => {
    return () => {
      sessionApi()
    };
  }, [])


  const conditionApi = state.expires !== undefined ? true : false;
  let url = "/";
  return (
    <div className="navbar1" aria-label="Navbar">
      <div className="right1">
        <img src={logo} aria-label="App Logo" alt="Logo" />
        {/* harus pakek useNavigate */}
        <a aria-label="App Title" className="instagram" href={url}>Instagram</a>
      </div>
      <p className="nameUser" hidden aria-label="Profile1">{"John Doe"}</p>
      <div className="left">
        {
          (conditionApi === true)
            ?
            <div className="logTrue">
              <p className="nameUser" aria-label="Profile">{state.user.name}</p>
              <img className="gambarUser" src={state.user.image} alt="Profile" />
              <div className="button">
                <Button
                  variant="contained"
                  className="button_nav"
                  onClick={auth}
                >
                  LogOut
                </Button>
              </div>
            </div>
            :
            <div className="button">
              <Button
                aria-label="Login"
                variant="contained"
                className="logOutIn"
                onClick={auth}
              >
                Login
              </Button>
            </div>
        }

      </div>
    </div>
  )
}
//https://rg-km.riegan.my.id/api/auth/session
//https://rg-km.riegan.my.id/api/post/list

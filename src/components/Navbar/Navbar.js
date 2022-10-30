import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import modeContext from "../modeContext";
import uniqid from "uniqid";
import { style } from "@mui/system";
import axios from "axios";

function Navbar() {
  const color = useContext(modeContext);
  const path = useLocation().pathname;
  const params = useParams();
  const uid = params.uid;
  // const uid = 1;
  const [userName, setUserName] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/" + uid)
      .then((response) => {
        setUserName(response.data.fullname);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {userName && (
        <div
          className={`${styles.Navbar} ${color ? styles.true : styles.false}`}
        >
          <div className={styles.menu}>
            <Link
              to={`/home/${uid}`}
              className={` ${
                path.includes("/home") ? styles.active : styles.inactive
              } `}
            >
              Home
            </Link>
            <Link
              to={`/wishlist/${uid}`}
              className={` ${
                path.includes("/wishlist") ? styles.active : styles.inactive
              } `}
            >
              Wishlist
            </Link>
            <Link
              to={`/profile/${uid}`}
              className={` ${
                path.includes("/profile") ? styles.active : styles.inactive
              } `}
            >
              Profile
            </Link>
            <Link
              to={`/post/${uid}`}
              className={` ${
                path.includes("/post") ? styles.active : styles.inactive
              } `}
            >
              Post
            </Link>
            <p className={styles.userWelcome}> Welcome :) {userName}</p>
          </div>
          <div className="seperator"></div>
        </div>
      )}
    </div>
  );
}
export default Navbar;

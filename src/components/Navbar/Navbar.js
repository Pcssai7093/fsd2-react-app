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
        <div>
          <div className={styles.topnav} id="myTopnav">
            <Link
              to={`/home/${uid}`}
              className={path.includes("/home") ? styles.active : "inactive"}
            >
              Home
            </Link>
            <Link
              to={`/wishlist/${uid}`}
              className={
                path.includes("/wishlist") ? styles.active : "inactive"
              }
            >
              Wishlist
            </Link>
            <Link
              to={`/post/${uid}`}
              className={path.includes("/post") ? styles.active : "inactive"}
            >
              Post
            </Link>
            <Link
              to={`/profile/${uid}`}
              className={path.includes("/profile") ? styles.active : "inactive"}
            >
              Profile
            </Link>
            <Link href="#about">LogOut</Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;

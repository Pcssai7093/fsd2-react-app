import styles from "./Description.module.css";
import img1 from "./t1.jpg";
import modeContext from "../modeContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Description() {
  const color = useContext(modeContext);
  const params = useParams();
  const id = params.pid;
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/services/" + id + "?_expand=user")
      .then((response) => {
        console.log(response.data);
        setServiceData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="tw-">
      {serviceData && (
        <div
          className={`${styles.descriptionDiv} ${
            color ? styles.true : styles.false
          }`}
        >
          <div className="tw-">
            <h1>{serviceData.title}</h1>
          </div>

          <div className="imageSection">
            <img src={img1} alt="" className={styles.image} />
          </div>
          <div className={styles.hire}>
            {/* <p>Hire</p> */}
            {/* <div>Hire</div> */}
            <div className={styles.price}>
              Starting from {serviceData.price}/-
            </div>
            <div>
              <button className={styles.button}>
                <a href={`mailto:${serviceData.user.email}`}>Contact</a>
              </button>
            </div>
          </div>
          <div className={styles.description}>
            <h3>Description</h3>
            {serviceData.description}
          </div>
          <div className={styles.aboutOwner}>
            <h3>About Lancer</h3>
            {serviceData.user.about}
          </div>
        </div>
      )}
    </div>
  );
}

export default Description;

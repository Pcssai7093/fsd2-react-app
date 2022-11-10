import styles from "./Description.module.css";
import img1 from "./t1.jpg";
import modeContext from "../modeContext";
import { useContext, useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

function Description() {
  const color = useContext(modeContext);
  const params = useParams();
  const id = params.pid;
  const uid = params.uid;
  const history = useHistory();
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

  async function handleAddToWishlist(id) {
    await axios
      .post("http://localhost:4000/wishlist", { userId: uid, serviceId: id })
      .then((res) => {
        console.log(res.data);
      });
    history.push("/wishlist/" + uid);
  }

  return (
    <div className="tw-">
      {serviceData && (
        <div className={`${styles.descriptionDiv}`}>
          <div className={styles.serviceDiv}>
            <div className={styles.card}>
              <h1>{serviceData.title}</h1>
              <img src={img1} alt="John" className={styles.image} />
              {/* <p className={styles.title}>CEO & Founder, Example</p> */}
              <p></p>
              <p></p>
              <p>
                <button
                // onClick={() => {
                //   history.push(`/service/${userId}/${data.id}`);
                // }}
                >
                  <Link
                    // to={`/service/${userId}/${data.id}`}
                    style={{
                      textDecoration: "none",
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    {" "}
                    <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                  </Link>
                </button>
                <button
                  onClick={() => {
                    handleAddToWishlist(serviceData.id);
                  }}
                >
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </p>
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

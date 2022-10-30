import React, { useRef, useState } from "react";
import styles from "./Postform.module.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const Postform = () => {
  const history = useHistory();
  const params = useParams();
  const uid = params.uid;
  const pnam = useRef();
  const pdes = useRef();
  const pc = useRef();
  const bp = useRef();
  const [err, seterr] = useState({
    name: null,
    desc: null,
    bprice: null,
    bdesc: null,
    sprice: null,
    sdesc: null,
    pprice: null,
    prdesc: null,
  });

  const addposthandler = (event) => {
    event.preventDefault();
    const namp = pnam.current.value;
    const desp = pdes.current.value;
    const cp = pc.current.value;
    const pb = bp.current.value;

    if (namp.length === 0) {
      seterr({
        ...err,
        name: "Enter a valid product name",
      });
    }

    if (desp.length === 0) {
      seterr({
        ...err,
        desc: "Enter a valid product description",
      });
    }

    if (pb.length === 0 || parseInt(pb) < 0) {
      seterr({
        ...err,
        bprice: "Enter a valid basic price",
      });
    }

    // if(ps.length ===0 || ps <0)
    // {
    //     seterr({
    //         ...err,
    //         sprice : 'Enter a valid standard price'
    // })
    // }

    // if(prp.length ===0 || prp <0)
    // {
    //     seterr({
    //         ...err,
    //         pprice : 'Enter a valid premium price'
    // })
    // }

    // if(db.length ===0)
    // {
    //     seterr({
    //         ...err,
    //         bdesc : 'Enter a valid basic description'
    // })
    // }

    // if(ds.length ===0)
    // {
    //     seterr({
    //         ...err,
    //         sdesc : 'Enter a valid standard description'
    // })
    // }

    // if(dp.length ===0)
    // {
    //     seterr({
    //         ...err,
    //         prdesc : 'Enter a valid premium description'
    // })
    // }
    // props.Addpost(namp,desp,cp,pb,db,ps,ds,prp,dp)
    // if(namp!=null && desp!=null && cp!=null &&)
    if (
      namp !== "" &&
      desp !== "" &&
      cp !== "" &&
      pb !== "" &&
      parseInt(pb) >= 0
    ) {
      axios
        .post("http://localhost:4000/services", {
          title: namp,
          description: desp,
          price: pb,
          category: cp,
          userId: uid,
        })
        .then(() => {
          history.push("/home/" + uid);
          console.log("Post added successfully");
        });
    } else {
      console.log("Erripooka");
    }
  };
  console.log("hello");
  return (
    <>
      <div className={"container " + styles.container}>
        <form onSubmit={addposthandler}>
          <div className={styles.row}>
            <div className={styles["col-25"]}>
              <label className={styles.lb} htmlFor="pname">
                Product Name
              </label>
            </div>
            <div className={styles["col-45"]}>
              <input
                className={styles.ipt}
                type="text"
                ref={pnam}
                id="pname"
                name="pname"
              />
            </div>
            <div className={styles["col-30"]}></div>
          </div>
          {err.name && (
            <h5 className={styles.err}>Please Enter some product name</h5>
          )}
          <div className={styles.row}>
            <div className={styles["col-25"]}>
              <label className={styles.lb} htmlFor="pdesc">
                Product Description
              </label>
            </div>
            <div className={styles["col-45"]}>
              <textarea
                className={styles.ipt}
                id="pdesc"
                ref={pdes}
                name="pdesc"
                placeholder="Describe your product..."
                style={{ height: 200 }}
              ></textarea>
            </div>
            <div className={styles["col-30"]}></div>
          </div>
          {err.desc && (
            <h5 className={styles.err}>
              Please Enter something describing your product
            </h5>
          )}
          <div className={styles.row}>
            <div className={styles["col-25"]}>
              <label className={styles.lb} htmlFor="pcat">
                Product Category
              </label>
            </div>
            <div className={styles["col-45"]}>
              <select className={styles.ipt} ref={pc} id="pcat" name="pcat">
                <option value="programming">Programming</option>
                <option value="web development">Web Development</option>
                <option value="cloud computing">Cloud Computing</option>
                <option value="communication networks">
                  Communication Networks
                </option>
                <option value="machine learning">Machine Learning</option>
                <option value="game development">Game Development</option>
              </select>
            </div>
            <div className={styles["col-30"]}></div>
          </div>
          <div className={styles.row}>
            <div className={styles["col-25"]}>
              <label className={styles.lb} htmlFor="bprice">
                Product Price
              </label>
            </div>
            <div className={styles["col-45"]}>
              <input
                className={styles.ipt}
                type="text"
                ref={bp}
                id="bprice"
                name="bprice"
              />
            </div>
            <div className={styles["col-30"]}></div>
          </div>
          {err.bprice && (
            <h5 className={styles.err}>Please Enter a valid price</h5>
          )}
          <div className="row">
            <div className="col-3"></div>
            <div className={"col-3 " + styles.sub}>
              <input type="submit" value="Submit" className={styles.inp} />
            </div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
          <pre></pre>
        </form>
      </div>
    </>
  );
};

export default Postform;

import React from "react";
import styles from "./contact.module.css";

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img
          src="https://asset.velvetjobs.com/job-description-samples/covers/w992/customer-service-representative.jpeg"
          alt="repre"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>ContactUs</h1>
          </div>
          <div className={styles.Name}>
            <label>
              Name<sup>*</sup>
            </label>
            <div className={styles.inputfields}>
              <div className={styles.input1}>
                <div className={styles.inputWrapper}>
                  <input type="Text" placeholder="" className={styles.input} />
                  <div className={styles.line} />
                </div>
                <p>First</p>
              </div>
              <div className={styles.input1}>
                <div className={styles.inputWrapper}>
                  <input type="text" placeholder="" className={styles.input} />
                  <div className={styles.line} />
                </div>
                <p>Last</p>
              </div>
            </div>
          </div>
          <div className={styles.Email}>
            <label>
              Email<sup>*</sup>
            </label>

            <div className={styles.inputWrapper}>
              <input type="Text" placeholder="" className={styles.input} />
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.lastbox}>
            <label>
              leave us a few words<sup>*</sup>
            </label>
            <input type="Text" placeholder="" className={styles.input3} />
          </div>
          <div className={styles.buttoncon}>
            <button className={styles.button}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

import React from 'react';
import styles from './AboutUs.css';
import img from '../images/beachball.jpg';

const AboutUs = () => (
  <div>
    <div className={styles.AboutUs}>
      <h1>About Us</h1>
      <div className={styles.container}>
        <img
          src={img} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Rosalie Lee</h2>
          <p className={styles.abouttext}>
            Rosalie is awesome!
        </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={img} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Erik Graciosa</h2>
          <p className={styles.abouttext}>
            Erik is awesome!
        </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={img} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Katie Berry</h2>
          <p className={styles.abouttext}>
            Katie is awesome!
        </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

import React from 'react';
import styles from './AboutUs.css';
// import background from '../images/pool-background.jpeg';
// import img from '../images/beachball.jpg';
import katie from '../images/beanie.jpg';
import rosalie from '../images/rosalie.jpg';
import erik from '../images/erik.jpg';

const AboutUs = () => (
  <div
  // style={{
  //   backgroundImage: `url(${pink})`,
  //   backgroundRepeat: 'no-repeat',
  // }}
  >
    <div className={styles.AboutUs}>
      <h1>About Us</h1>
      <div className={styles.container}>
        <img
          src={rosalie} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Rosalie Lee</h2>
          <p className={styles.abouttext}>
            Rosalie is awesome!
        </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={erik} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Erik Graciosa</h2>
          <p className={styles.abouttext}>
            Erik is awesome!
        </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={katie} type='image' alt="Katie Berry" />
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

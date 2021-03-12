import React from 'react';
import styles from './AboutUs.css';
// import background from '../images/pool-background.jpeg';
// import img from '../images/beachball.jpg';
import katie from '../images/beanie.jpg';
import rosalie from '../images/rosalie.jpg';
import erik from '../images/erik.jpg';

const AboutUs = () => (
  <div>
    <div className={styles.AboutUs}>
      {/* <h1>About Us</h1> */}
      <div className={styles.container} style={{ marginTop: "9vh" }}>
        <img src={rosalie} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name} >Rosalie Lee</h2>
          <p className={styles.abouttext}>
            I’m seeking opportunities that will allow me to develop and promote technologies that are innovative and benefit human health/wellbeing. Specific fields of interest include AI/ML Software Engineering, Developer Advocacy, Human Factors Engineering, and UI/UX Design.
        </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={erik} type='image' alt="beachball" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Erik Graciosa</h2>
          <p className={styles.abouttext}>
            I’m seeking opportunities that will allow me to develop and promote technologies that are innovative and benefit human health/wellbeing. Specific fields of interest include AI/ML Software Engineering, Developer Advocacy, Human Factors Engineering, and UI/UX Design.
        </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={katie} type='image' alt="Katie Berry" />
        <div className={styles.nametext}>

          <h2 className={styles.name}>Katie Berry</h2>
          <p className={styles.abouttext}>
            I share many expenses with my partner, and we've had to get creative how to track our individual payments. It's great to have a method of paying rent that doesn't involve one of us paying-back the other!
        </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

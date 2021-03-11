import React from 'react';
import styles from './AboutUs.css';
import img from '../images/beachball.jpg';

const AboutUs = () => (
  <div>
    <div className={styles.AboutUs}>
      <h1>About Us</h1>
      <div className="container">
        <img className="profile-pic" src={img} type='image' alt="beachball" />
        <div className="name-text">

          <h2 className="name">Rosalie Lee</h2>
          <p className="about-text">
            Rosalie is awesome!
        </p>
        </div>
      </div>

      <div className="container">
        <img className="profile-pic" src={img} type='image' alt="beachball" />
        <div className="name-text">

          <h2 className="name">Erik Graciosa</h2>
          <p className="about-text">
            Erik is awesome!
        </p>
        </div>
      </div>

      <div className="container">
        <img className="profile-pic" src={img} type='image' alt="beachball" />
        <div className="name-text">

          <h2 className="name">Katie Berry</h2>
          <p className="about-text">
            Katie is awesome!
        </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

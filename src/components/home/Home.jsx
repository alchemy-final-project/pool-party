/* eslint-disable max-len */
import React from 'react';
import desktopImage from '../../../public/assets/PoolParty.jpg';
import mobileImage from '../../../public/assets/PoolParty.jpg';
import styles from './Home.css';
import style from './Banner.css';

export default function Home() {

  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <>
      <div className={styles.homeContainer} style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '98.5vh'
      }}>
        <div className={styles.HomeItems}>
          {/* <h1>Pineapples</h1>
          <p>They are good</p> */}
        </div>
        <div className={style.Banner}>
          <div className={style.container}>
            <p className={style.aboutText}>Make Pooled Payments With Your Roomies!
            See your roomates' payment activity and know when your pooled payments are processed.</p>
          </div>
        </div>
      </div>

    </>
  );
}

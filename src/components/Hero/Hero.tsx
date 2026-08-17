import clsx from 'clsx';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={clsx(styles.heroSection, 'outline')}>
      <div className={styles.heroImg}>
        <ul className={styles.heroTagList}>
          <li className={styles.heroTagItem}>
            <button className={styles.heroTagLink}>Sport</button>
          </li>
          <li className={styles.heroTagItem}>
            <button className={styles.heroTagLink}>Healthy</button>
          </li>
          <li className={styles.heroTagItem}>
            <button className={styles.heroTagLink}>Workout</button>
          </li>
          <li className={styles.heroTagItem}>
            <button className={styles.heroTagLink}>Diet</button>
          </li>
        </ul>
      </div>
      <div className={styles.heroDescr}>
        <h1 className={styles.heroTitle}>
          Get <span className={styles.heroTitleAccent}>Body</span> in shape,
          Stay healthy
        </h1>
        <p className={styles.heroText}>
          Transform your physiqu e and embrace a healthier lifestyle with our
          comprehensive fitness and nutrition support.
        </p>
      </div>
    </section>
  );
};

export default Hero;

import styles from './FavoritesAdvice.module.css';

const FavoritesAdvice = () => {
  return (
    <div className={styles.favoritesAdvice}>
      <div className={styles.favoritesAdviceImg}>
        <svg>
          <use href={'/img/sprite.svg#icon-dumbbell-black'}></use>
        </svg>
      </div>
      <p className={styles.favoritesAdviceTime}>110 min</p>
      <p className={styles.favoritesAdviceText}>Daily norm of sports</p>
    </div>
  );
};

export default FavoritesAdvice;

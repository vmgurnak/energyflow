import clsx from 'clsx';

import QuoteDay from '../Quote/QuoteDay';
import FavoritesAdvice from './FavoritesAdvice';

import styles from './FavoritesQuote.module.css';

const FavoritesQoute = () => {
  return (
    <section className={clsx(styles.favoritesQuoteSection, 'outline')}>
      <QuoteDay />
      <div className={styles.favoritesQuoteImg}></div>
      <FavoritesAdvice />
    </section>
  );
};

export default FavoritesQoute;

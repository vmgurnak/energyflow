import clsx from 'clsx';

import Header from '@/components/Header';
import FavoritesQoute from '@/components/FavoritesQuote';

import styles from './page.module.css';

const FavoritesPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <FavoritesQoute />
    </div>
  );
};

export default FavoritesPage;

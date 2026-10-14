import clsx from 'clsx';

import QuoteDay from './QuoteDay';

import styles from './Quote.module.css';

const Quote = () => {
  return (
    <section className={clsx(styles.quoteSection, 'outline')}>
      <QuoteDay />
      <div className={styles.quoteImg}></div>
    </section>
  );
};

export default Quote;

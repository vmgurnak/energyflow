'use client';

import { useQuote } from '@/hooks/useQuote';

import styles from './QuoteDay.module.css';

const QuoteDay = () => {
  const { quote } = useQuote();

  return (
    <div className={styles.infoQuote}>
      <h2 className={styles.infoQuoteTitle}>Quote of the day</h2>
      <p className={styles.infoQuoteText}>{quote?.quote}</p>
      <p className={styles.infoQuoteAuthor}>{quote?.author}</p>
      <div className={styles.infoIconWrap}>
        <svg className={styles.infoIconItem} width="18" height="20">
          <use href={'/img/sprite.svg#icon-running-men'}></use>
        </svg>
      </div>
      <div className={styles.infoMarksWrap}>
        <svg className={styles.infoMarkItem}>
          <use href={'/img/sprite.svg#icon-inverted-commas'}></use>
        </svg>
      </div>
    </div>
  );
};

export default QuoteDay;

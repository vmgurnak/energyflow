import Header from '@components/Header';
import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import Exercises from '@/components/Exercises';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Quote />
      <Exercises />
    </div>
  );
}

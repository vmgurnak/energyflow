import Link from 'next/link';

import clsx from 'clsx';

import HeaderNavigation from './HeaderNavigation';
import HeaderSocialLinks from './HeaderSocialLinks';

import styles from './Header.module.css';
import MobileMenuController from './MobileMenuController';

const Header = () => {
  return (
    <header className={clsx(styles.header, 'outline')}>
      <Link className={styles.headerLogo} href="/">
        energy.flow
      </Link>

      <HeaderNavigation />

      <HeaderSocialLinks />

      <MobileMenuController />
    </header>
  );
};

export default Header;

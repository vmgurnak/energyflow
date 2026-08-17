'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { navigation } from '@/constants/navigation';

import styles from './Header.module.css';

const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className={styles.headerNavList}>
        {navigation.map(({ id, href, title }) => (
          <li key={id} className={styles.headerNavItem}>
            <Link
              href={href}
              className={clsx(
                styles.headerNavLink,
                pathname === href && styles.active,
              )}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;

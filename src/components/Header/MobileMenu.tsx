import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import clsx from 'clsx';

import { navigation } from '@/constants/navigation';
import { socialLinks } from '@/constants/socialLinks';

import styles from './MobileMenu.module.css';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const media = window.matchMedia('(min-width: 768px)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        onClose();
      }
    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={clsx(styles.mobileMenuBackdrop, isOpen && styles.isOpen)}
      onClick={onClose}
    >
      <nav
        className={styles.menuModal}
        aria-label="Mobile navigation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menuModalHeader}>
          <Link className={styles.menuModalLogo} href="/" onClick={onClose}>
            energy.flow
          </Link>

          <button
            className={styles.menuModalCloseButton}
            onClick={onClose}
            aria-label="Close mobile menu"
            type="button"
          >
            <svg className={styles.menuModalCloseIcon} width="20" height="20">
              <use href="/img/sprite.svg#icon-x-big-white"></use>
            </svg>
          </button>
        </div>

        <ul className={styles.modalMenuNav}>
          {navigation.map(({ id, href, title }) => (
            <li key={id} className={styles.modalMenuNavItem}>
              <Link
                href={href}
                className={clsx(
                  styles.modalMenuNavLink,
                  pathname === href && styles.active,
                )}
                onClick={onClose}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.modalMenuSocialsList}>
          {socialLinks.map(({ id, href, icon, label }) => (
            <li key={id} className={styles.modalMenuSocialsItem}>
              <a
                className={styles.modalMenuSocialsLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <svg
                  className={styles.modalMenuSocialsIcon}
                  width="28"
                  height="28"
                >
                  <use href={`/img/sprite.svg#${icon}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;

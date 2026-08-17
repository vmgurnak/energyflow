import { socialLinks } from '@/constants/socialLinks';

import styles from './Header.module.css';

const HeaderSocialLinks = () => {
  return (
    <ul className={styles.headerSocialList}>
      {socialLinks.map(({ id, href, icon, label }) => (
        <li key={id} className={styles.headerSocialItem}>
          <a
            className={styles.headerSocialLink}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <svg className={styles.socialIcon} width="28" height="28">
              <use href={`/img/sprite.svg#${icon}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSocialLinks;

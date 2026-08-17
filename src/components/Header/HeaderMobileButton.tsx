import styles from './Header.module.css';

type HeaderMobileButtonProps = {
  isOpen: boolean;
  onOpen: () => void;
};

const HeaderMobileButton = ({ isOpen, onOpen }: HeaderMobileButtonProps) => {
  return (
    <button
      className={styles.headerMobileBtn}
      type="button"
      onClick={onOpen}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
    >
      <svg className={styles.mobileMenuIcon} width="32" height="16">
        <use href="/img/sprite.svg#icon-burger"></use>
      </svg>
    </button>
  );
};

export default HeaderMobileButton;

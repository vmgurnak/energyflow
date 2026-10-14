import clsx from 'clsx';

import styles from './ExercisesSubtypesPagination.module.css';

type ExercisesSubtypesPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const ExercisesSubtypesPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ExercisesSubtypesPaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={clsx(styles.exercisesTypesPagination, 'outline')}>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            className={clsx(
              styles.exercisesTypesPaginationBtn,
              currentPage === page && styles.exercisesTypesPaginationBtnActive,
            )}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default ExercisesSubtypesPagination;

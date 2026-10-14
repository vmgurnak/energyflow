import clsx from 'clsx';

import { exerciseFilters } from '@/constants/exercises';
import type { ExerciseFilter } from '@/types/exercises';

import styles from './ExercisesSubtypesFilter.module.css';

type ExercisesSubtypesFilterProps = {
  activeFilter: ExerciseFilter;
  onFilterChange: (filter: ExerciseFilter) => void;
};

const ExercisesSubtypesFilter = ({
  activeFilter,
  onFilterChange,
}: ExercisesSubtypesFilterProps) => {
  return (
    <ul className={styles.exercisesFilterList}>
      {exerciseFilters.map(({ value, label }) => (
        <li key={value} className={styles.exercisesFilterItem}>
          <button
            className={clsx(
              styles.exercisesFilterBtn,
              activeFilter === value && styles.btnActive,
            )}
            type="button"
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExercisesSubtypesFilter;

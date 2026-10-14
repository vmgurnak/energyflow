'use client';

import { useState } from 'react';

import clsx from 'clsx';

import ExercisesSubtypesFilter from './ExercisesSubtypesFilter';
import ExercisesSubtypesList from './ExercisesSubtypesList';
import ExercisesSubtypesPagination from './ExercisesSubtypesPagination';

import { useExercisesSubtypes } from '@/hooks/useExercisesSubtypes';
import type { ExerciseFilter } from '@/types/exercises';

import styles from './Exercises.module.css';

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState<ExerciseFilter>('Muscles');

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useExercisesSubtypes(
    activeFilter,
    currentPage,
  );

  const handleFilterChange = (filter: ExerciseFilter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className={clsx(styles.exercisesSection, 'outline')}>
      <h2 className={styles.exercisesTitle}>Exercises</h2>

      <ExercisesSubtypesFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <ExercisesSubtypesList subtypes={data?.results ?? []} />
      )}

      {data && data.totalPages > 1 && (
        <ExercisesSubtypesPagination
          currentPage={currentPage}
          totalPages={data.totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};

export default Exercises;

import { useEffect, useState } from 'react';

import { fetchExercisesSubtypes } from '@/api/exercises';
import type {
  ExerciseFilter,
  ExercisesSubtypesResponse,
} from '@/types/exercises';

export const useExercisesSubtypes = (
  activeFilter: ExerciseFilter,
  currentPage: number,
) => {
  const [data, setData] = useState<ExercisesSubtypesResponse | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getExercisesSubtypes = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetchExercisesSubtypes({
          filter: activeFilter,
          page: currentPage,
        });

        setData(response);
      } catch (error) {
        console.error('Failed to get exercises subtypes:', error);

        setError('Failed to load exercises');
      } finally {
        setIsLoading(false);
      }
    };

    getExercisesSubtypes();
  }, [activeFilter, currentPage]);

  return {
    data,
    isLoading,
    error,
  };
};

import { EXERCISES_PER_PAGE } from '@/constants/exercises';
import type {
  ExerciseFilter,
  ExercisesSubtypesResponse,
} from '@/types/exercises';

type FetchExercisesSubtypesParams = {
  filter: ExerciseFilter;
  page?: number;
  limit?: number;
};

export const fetchExercisesSubtypes = async ({
  filter,
  page = 1,
  limit = EXERCISES_PER_PAGE,
}: FetchExercisesSubtypesParams): Promise<ExercisesSubtypesResponse> => {
  const params = new URLSearchParams({
    filter,
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/filters?${params}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch exercises subtypes');
  }

  return response.json();
};

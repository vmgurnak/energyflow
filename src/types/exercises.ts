import type { exerciseFilters } from '@/constants/exercises';

export type ExerciseFilter = (typeof exerciseFilters)[number]['value'];

export type ExerciseSubtype = {
  name: string;
  filter: ExerciseFilter;
  imgUrl: string;
};

export type ExercisesSubtypesResponse = {
  page: string;
  perPage: string;
  totalPages: number;
  results: ExerciseSubtype[];
};

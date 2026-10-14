import type { ExerciseSubtype } from '@/types/exercises';

import ExercisesSubtypesCard from './ExercisesSubtypesCard';

import styles from './ExercisesSubtypesList.module.css';

type ExercisesSubtypesListProps = {
  subtypes: ExerciseSubtype[];
};

const ExercisesSubtypesList = ({ subtypes }: ExercisesSubtypesListProps) => {
  if (subtypes.length === 0) {
    return <p className={styles.emptyMessage}>No exercises found.</p>;
  }

  return (
    <ul className={styles.exercisesTypesList}>
      {subtypes.map((subtype) => (
        <ExercisesSubtypesCard key={subtype.name} subtype={subtype} />
      ))}
    </ul>
  );
};

export default ExercisesSubtypesList;

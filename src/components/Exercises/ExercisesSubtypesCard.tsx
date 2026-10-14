import type { CSSProperties } from 'react';

import type { ExerciseSubtype } from '@/types/exercises';

import styles from './ExercisesSubtypesCard.module.css';

type ExercisesSubtypesCardProps = {
  subtype: ExerciseSubtype;
};

const ExercisesSubtypesCard = ({ subtype }: ExercisesSubtypesCardProps) => {
  const { name, filter, imgUrl } = subtype;

  const cardStyle = {
    '--card-bg-image': `url(${imgUrl})`,
  } as CSSProperties;

  return (
    <li className={styles.exercisesTypesItem} style={cardStyle}>
      {/* <button className={styles.exercisesTypesCard} type="button"> */}
        <h3 className={styles.exercisesTypesTitle}>{name}</h3>
        <p className={styles.exercisesTypesName}>{filter}</p>
      {/* </button> */}
    </li>
  );
};

export default ExercisesSubtypesCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './goBackButtton.module.css';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button className={styles.button} type="button" onClick={goBack}>
      Go back
    </button>
  );
};

export default GoBackButton;

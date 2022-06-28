import React from 'react';

import styles from './LoaderBlock.module.scss';
import pizzaLogo from '../../assets/img/logo.png';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={pizzaLogo} alt="INDUVAZ Logo" />
    </div>
  );
};

export default Loader;

import React from 'react';

import Menu from 'components/Menu';

import styles from './styles.css';

export default props => (
  <div className={styles['sidebar']}>
    <Menu className={styles['sidebar-item']} />
  </div>
);

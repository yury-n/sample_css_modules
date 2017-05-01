import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export default props => (
  <ul className={classNames(styles['menu'], props.className)}>
    <li className={styles['menu-item']}>Item 1</li>
    <li className={styles['menu-item']}>Item 2</li>
  </ul>
);

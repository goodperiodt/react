import React from 'react';
import Card from '../UI/Card';
import styles from './AddUsers.module.css';

const UserList = () => {
  return (
    <Card className={styles.users}>
      <ul></ul>
    </Card>
  );
};

export default UserList;

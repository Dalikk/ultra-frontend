import React from 'react';
import styles from './Header.module.scss';
import { Layout, Menu } from 'antd';
import { WifiOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export const Header: React.FC = ({}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <WifiOutlined />
            ULTRA
          </h2>

          <Menu
            className={styles.topMenu}
            theme={'dark'}
            mode={'horizontal'}
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: '/', label: 'Главная' },
              { key: '/operations', label: 'Операции' },
            ]}
          />
        </div>
      </div>
    </Layout.Header>
  );
};

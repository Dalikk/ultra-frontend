import { NextPage } from 'next';
import { Layout } from '@/layouts/DefaultLayout';
import { Table } from 'antd';

import * as API from '@/api';
import styles from '@/styles/Operations.module.scss';
import { IOperation } from '@/api/dto/operations.dto';
import type { ColumnsType } from 'antd/es/table';

interface IOperationsPageProps {
  operations: IOperation[];
}

const operationTypeHumanize = {
  mobileBank: 'Мобильный банк',
  cash: 'Наличные',
  credit: 'Кредит',
};

const OperationsPage: NextPage<IOperationsPageProps> = ({ operations }) => {
  const columns: ColumnsType<IOperation> = [
    {
      title: 'Сумма',
      dataIndex: 'value',
      key: 'value',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Дата',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <>
      <Layout title={'Операции'}>
        <div className={styles.root}>
          <h1 className={styles.title}>Операции</h1>
          <Table
            className={styles.table}
            columns={columns}
            dataSource={operations}
          />
        </div>
      </Layout>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OperationsPage.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Операции'}>{page}</Layout>;
};

export const getServerSideProps = async () => {
  const operations: IOperation[] = await API.operations.getAll();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  operations.map((item) => (item.type = operationTypeHumanize[item.type]));

  return {
    props: {
      operations,
    },
  };
};

export default OperationsPage;

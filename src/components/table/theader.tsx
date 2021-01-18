import React from 'react';
import { Ceil, Header } from './style';

const TableHeader: React.FC = () => (
  <>
    <Header>
      <Ceil width="40px">№</Ceil>
      <Ceil width="20%">Имя</Ceil>
      <Ceil width="20%">Фамилия</Ceil>
      <Ceil width="20%">Почта</Ceil>
      <Ceil width="20%">Адрес</Ceil>
      <Ceil width="20%">Телефон</Ceil>
    </Header>
  </>
);

export default TableHeader;

import React from 'react';
import { Ceil, Row } from './style';

type PropsType = {
  index: number | string
  name: string
  lastName: string
  phone: string
  email: string
  address: string
  click:() => void
};

const UserRow: React.FC<PropsType> = ({ name, lastName, email, address, phone, index, click }) => (
  <>
    <Row id="row" onClick={click}>
      <Ceil width="40px">{index}</Ceil>
      <Ceil width="20%">{name}</Ceil>
      <Ceil width="20%">{lastName}</Ceil>
      <Ceil width="20%">{email}</Ceil>
      <Ceil width="20%">{address}</Ceil>
      <Ceil width="20%">{phone}</Ceil>
    </Row>
  </>
);

export default UserRow;

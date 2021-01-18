import React from 'react';
import { ModalField, UserRow, Ceil, UserCard, Close } from './style';

type PropsType = {
  name: string
  lastName: string
  phone: string
  email: string
  address: string
  click(): void
};

const Modal:React.FC<PropsType> = ({ name, lastName, email, address, click, phone }) => (
  <ModalField>
    <Close onClick={click}>Назад</Close>
    <UserCard>
      <UserRow>
        <Ceil width="20%"><b>Имя:</b></Ceil>
        <Ceil width="60%">{name}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil width="20%"><b>Фамилия:</b></Ceil>
        <Ceil width="60%">{lastName}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil width="20%"><b>Почта:</b></Ceil>
        <Ceil width="60%">{email}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil width="20%"><b>Телефон:</b></Ceil>
        <Ceil width="60%">{phone}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil width="20%"><b>Адрес:</b></Ceil>
        <Ceil width="60%">{address}</Ceil>
      </UserRow>
    </UserCard>
  </ModalField>
);

export default Modal;

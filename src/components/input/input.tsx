import React from 'react';
import { Input } from './style';
import UserData from '../../state/mobX';

interface PropsType {
  input(): void
}

const InputField: React.FC<PropsType> = ({ input }) => (
  <Input
    id="inputField"
    onInput={input}
    onChange={(event) => UserData.setSearch(event.target.value)}
    placeholder="Введите данные пользователя"
  />
);

export default InputField;

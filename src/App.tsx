import React from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';
import UserRow from './components/table/table';
import InputField from './components/input/input';
import Modal from './components/userInfo/userInfo';
import { Container, Header } from './style';
import UserData from './state/mobX';
import TableHeader from './components/table/theader';

UserData.getUsers();
const App = observer(() => (
  <Container>
    <Header>Найти пользователя</Header>
    <InputField input={UserData.getUsers} />
    {(UserData.isLoad && <CircularProgress />)}
    {(UserData.user && !UserData.info) ? <TableHeader /> : null}
    {(UserData.user && !UserData.info) ? UserData.user.map((user, index) => (
      <UserRow
        click={() => UserData.getUserInfo(user!)}
        key={user!.id}
        address={user!.address}
        lastName={user!.lastName}
        email={user!.email}
        name={user!.name}
        phone={user!.phone}
        index={index + 1}
      />
    )) : null }
    {(UserData.info) ? (
      <Modal
        click={UserData.closeModal}
        name={UserData.userInfo!.name}
        lastName={UserData.userInfo!.lastName}
        phone={UserData.userInfo!.phone}
        email={UserData.userInfo!.email}
        address={UserData.userInfo!.address}
      />
    ) : null}
  </Container>
));

export default App;

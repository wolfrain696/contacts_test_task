import React, { BaseSyntheticEvent } from 'react';
import { Paper, Typography, styled } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import { PageContainer } from '../../layout/PageContainer';
import { Input } from '../../layout/Input';
import { MainButton } from '../../layout/Button';
import user from '../../store/user';

const StyledFormWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 24px;
  width: 320px;
  height: 320px;
  background-color: white;
`;

const StyledPageTitle = styled(Typography)`
  font-size: 24px;
`;

const LogIn = () => {
  const { userName, changeUserName, logIn, userData } = user;

  const handleChangeUserName = (e: BaseSyntheticEvent) => {
    changeUserName(e.target.value);
  };

  const handleLogIn = () => {
    if (!userName) return;
    logIn(userName);
  };

  console.log(toJS(user));

  return (
    <PageContainer>
      <StyledFormWrapper>
        <StyledPageTitle>Авторизация</StyledPageTitle>
        <Input
          value={userName}
          onChange={handleChangeUserName}
          placeholder="Введите ваше имя"
          label="Введите ваше имя"
        />
        <MainButton onClick={handleLogIn}>Войти</MainButton>
      </StyledFormWrapper>
    </PageContainer>
  );
};

export default observer(LogIn);

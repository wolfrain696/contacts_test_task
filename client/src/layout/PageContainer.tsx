import React, { FC, ReactNode } from 'react';
import { Container, styled } from '@mui/material';

interface Props {
  children: ReactNode;
}

const StyledPageContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageContainer: FC<Props> = ({ children }) => (
  <StyledPageContainer maxWidth="sm">{children}</StyledPageContainer>
);

import React, { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';

interface Props {
  children: ReactNode;
}

const StyledContainer = styled(Box)`
  min-width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #f598a8, #f6edb2);
`;

export const PageWrapper: FC<Props> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

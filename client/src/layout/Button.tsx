import { Button, styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledMainButton = styled(Button)`
  max-width: 320px;
  background: linear-gradient(90deg, #f598a8, #f6edb2);
`;

export const MainButton: FC<Props> = ({ children, onClick }) => (
  <StyledMainButton onClick={onClick} size="large" variant={'contained'}>
    {children}
  </StyledMainButton>
);

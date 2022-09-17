import { TextField, styled } from '@mui/material';
import React, { ChangeEventHandler, FC } from 'react';

const StyledInput = styled(TextField)`
  max-width: 320px;
`;

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  label?: string;
}

export const Input: FC<Props> = ({ placeholder, label, value, onChange }) => (
  <StyledInput
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    label={label}
    size="small"
  />
);

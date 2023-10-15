import { type TextFieldProps } from '@mui/material';
import React from 'react';
import { useIMask } from 'react-imask';
import { TextField } from '@mui/material';

interface PhoneInputProps extends Omit<TextFieldProps, ''> {
  onChangeValue: (value: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  onChangeValue,
  ...props
}) => {
  const { ref, value } = useIMask({
    mask: '+7 (000) 000-0000',
    lazy: true
  });

  React.useEffect(() => {
    onChangeValue?.(value);
  }, [value]);

  return <TextField inputRef={ref} {...props} />;
};

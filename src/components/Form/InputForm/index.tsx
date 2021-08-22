import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Error } from './styles';

type InputFormProps = TextInputProps & {
  control: Control;
  name: string;
  error: string;
};

export function InputForm({ control, name, error, ...props }: InputFormProps) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...props} value={value} onChangeText={onChange} />
        )}
      ></Controller>

      {error && <Error>{error}</Error>}
    </Container>
  );
}

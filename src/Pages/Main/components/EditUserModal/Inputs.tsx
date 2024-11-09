import React, { ChangeEvent, FC, MouseEvent } from 'react';
import { UserDTO } from '@shared/types';

type InputsProps = {
  id: string;
  value: unknown;
  onChange: (value: string | boolean | number) => void;
};

export const TextInput: FC<InputsProps> = ({ onChange, value, id }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input id={id} name={id} value={value as string} onChange={handleChange} type="text" />;
};

export const TextareaInput: FC<InputsProps> = ({ onChange, value, id }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea value={value as string} onChange={handleChange} id={id} name={id}>
      {value as string}
    </textarea>
  );
};

export const DatePicker: FC<InputsProps> = ({ onChange, value, id }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input id={id} name={id} value={value as string} onChange={handleChange} type="date" />;
};

export const EmailInput: FC<InputsProps> = ({ onChange, value, id }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input id={id} name={id} value={value as string} onChange={handleChange} type="email" />;
};

export const NumberInput: FC<InputsProps> = ({ onChange, value, id }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input id={id} name={id} value={value as string} onChange={handleChange} type="number" />;
};

export const RadioButton: FC<InputsProps> = ({ onChange, value, id }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(!(e.target as HTMLInputElement).checked);
  };

  return <input id={id} name={id} defaultChecked={value as boolean} onChange={handleChange} type="checkbox" />;
};

// despite the task, defining input type by its value is awful idea. here is adjustable map.
const idToTypeMap: Partial<Record<keyof UserDTO, FC<InputsProps>>> = {
  name: TextInput,
  email: EmailInput,
  age: NumberInput,
  about: TextareaInput,
  address: TextInput,
  picture: TextInput,
  isActive: RadioButton,
  registered: DatePicker,
};

export const UserInput: FC<InputsProps> = ({ onChange, value, id }) => {
  const InputType = idToTypeMap[id as keyof UserDTO];

  if (!InputType) {
    return null;
  }

  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <InputType value={value} onChange={onChange} id={id} />
    </div>
  );
};

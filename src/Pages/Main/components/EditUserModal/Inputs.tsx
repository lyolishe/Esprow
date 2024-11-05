import React, { ChangeEvent, FC, MouseEvent } from 'react';

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
  const handleChange = (e: MouseEvent<HTMLInputElement>) => {
    onChange(!(e.target as HTMLInputElement).checked);
  };

  return <input id={id} name={id} checked={value as boolean} onClick={handleChange} type="radio" />;
};

const isNumber = (value: unknown): value is number => typeof value === 'number';
const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
const isString = (value: unknown): value is string => typeof value === 'string';
const isEmail = (value: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
const isDate = (value: string) => !isNaN(Number(new Date(value.split(' ').slice(0, 1).join(''))));
const isLongString = (value: string) => value.length > 40;

export const getInputByValue = (value: unknown) => {
  if (isNumber(value)) {
    return NumberInput;
  }

  if (isBoolean(value)) {
    return RadioButton;
  }

  if (isString(value)) {
    if (isEmail(value)) {
      return EmailInput;
    }
    if (isDate(value)) {
      return DatePicker;
    }
    if (isLongString(value)) {
      return TextareaInput;
    }
    return TextInput;
  }
  return null;
};

export const UserInput: FC<InputsProps> = ({ onChange, value, id }) => {
  const InputType = getInputByValue(value);

  if (InputType === null) {
    return null;
  }

  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <InputType value={value} onChange={onChange} id={id} />
    </div>
  );
};

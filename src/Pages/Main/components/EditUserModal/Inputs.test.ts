import {
  DatePicker,
  EmailInput,
  getInputByValue,
  NumberInput,
  RadioButton,
  TextareaInput,
  TextInput,
} from '@pages/Main/components/EditUserModal/Inputs';

describe('Inputs', () => {
  it('value "42" returns number input', () => {
    expect(getInputByValue(42)).toBe(NumberInput);
  });
  it('value "true" returns radio toggle', () => {
    expect(getInputByValue(true)).toBe(RadioButton);
  });
  it('value "short string" returns text input', () => {
    expect(getInputByValue('short string')).toBe(TextInput);
  });
  it('value "short string"x10 returns text input', () => {
    expect(getInputByValue(new Array(10).fill('short string').join(''))).toBe(TextareaInput);
  });
  it('value "my@email.net" returns Email input', () => {
    expect(getInputByValue('my@email.net')).toBe(EmailInput);
  });
  it('value "2015-05-08T12:39:06 -02:00" returns Date picker', () => {
    expect(getInputByValue('2015-05-08T12:39:06 -02:00')).toBe(DatePicker);
  });
});

import { TypePlugin } from '../types';
import { getTypedEntries } from '../utils/getTypedEntries';

export const replaceDynamic: TypePlugin = ({ values, text }) => {
  let textWithValues = text;

  getTypedEntries(values).forEach(([paramName, value]) => {
    if (value == null) return;

    textWithValues = textWithValues.replaceAll(`{${paramName}}`, String(value));
  });

  return textWithValues;
};

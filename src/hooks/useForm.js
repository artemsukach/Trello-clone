import { useState } from 'react';

export const useForm = ({ defaultValues, validationRules }) => {
  const [values, setValues] = useState(defaultValues);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    const validationRule = validationRules[name] || (() => true);
    const isValid = validationRule(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const value = values[name];
    const validationRule = validationRules[name] || (() => true);
    const isValid = validationRule(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid,
    }));
  };

  const validate = () => {
    const updatedErrors = {};

    for (let value in values) {
      if (!validationRules.username(values[value])) {
        updatedErrors[value] = true;
      }
    }

    const isValid = Object.values(updatedErrors).every((v) => !v);

    setErrors(updatedErrors);

    return isValid;
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    setErrors,
    validate,
  };
};

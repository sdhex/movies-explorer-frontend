import { useEffect, useState } from 'react';

export const useForm = (initialValues, validationRules, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  const validateField = (value, validationRules) => {
    for (const rule of validationRules) {
      const error = rule(value);
      if (error) {
        return error;
      }
    }
    return '';
  };

  const handleChange = (name, validationRules) => (event) => {
    const { value, checked, type } = event.target;
    const error =
      validationRules && validationRules.length > 0
        ? validateField(value, validationRules)
        : '';
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setErrors((prevErrors) => {
      if (error === '') {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      } else {
        return {
          ...prevErrors,
          [name]: error,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const newErrors = {};
    for (const key in values) {
      const error = validateField(values[key], validationRules[key]);
      if (error) {
        newErrors[key] = error;
      }
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit?.(values);
    }
  };

  const hasError = (name) => {
    return errors[name] ? true : false;
  };

  const getErrorMessage = (name) => {
    return errors[name] ? errors[name] : '';
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(touched).length === Object.keys(validationRules).length
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [touched, errors, validationRules]);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    isValid,
    values,
    errors,
    hasError,
    getErrorMessage,
    handleChange,
    handleSubmit,
  };
};

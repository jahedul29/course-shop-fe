import * as yup from 'yup';

export const loginFormSchema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const registerFormSchema = yup.object({
  name: yup.string().required('name is required'),
  role: yup.string().required('role is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

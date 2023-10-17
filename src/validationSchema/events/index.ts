import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  event_date: yup.date().nullable(),
  location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

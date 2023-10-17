import * as yup from 'yup';

export const publicationValidationSchema = yup.object().shape({
  title: yup.string().required(),
  abstract: yup.string().nullable(),
  publication_date: yup.date().nullable(),
  publisher: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  research_id: yup.string().nullable().required(),
});

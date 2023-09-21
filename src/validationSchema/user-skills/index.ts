import * as yup from 'yup';

export const userSkillValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  skill_id: yup.string().nullable().required(),
});

import axios from 'axios';
import queryString from 'query-string';
import { UserSkillInterface, UserSkillGetQueryInterface } from 'interfaces/user-skill';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserSkills = async (
  query?: UserSkillGetQueryInterface,
): Promise<PaginatedInterface<UserSkillInterface>> => {
  const response = await axios.get('/api/user-skills', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserSkill = async (userSkill: UserSkillInterface) => {
  const response = await axios.post('/api/user-skills', userSkill);
  return response.data;
};

export const updateUserSkillById = async (id: string, userSkill: UserSkillInterface) => {
  const response = await axios.put(`/api/user-skills/${id}`, userSkill);
  return response.data;
};

export const getUserSkillById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-skills/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserSkillById = async (id: string) => {
  const response = await axios.delete(`/api/user-skills/${id}`);
  return response.data;
};

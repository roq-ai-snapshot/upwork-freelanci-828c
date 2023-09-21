import { UserSkillInterface } from 'interfaces/user-skill';
import { GetQueryInterface } from 'interfaces';

export interface SkillInterface {
  id?: string;
  name: string;
  description?: string;
  level?: number;
  created_at?: any;
  updated_at?: any;
  user_skill?: UserSkillInterface[];

  _count?: {
    user_skill?: number;
  };
}

export interface SkillGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}

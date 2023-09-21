import { UserInterface } from 'interfaces/user';
import { SkillInterface } from 'interfaces/skill';
import { GetQueryInterface } from 'interfaces';

export interface UserSkillInterface {
  id?: string;
  user_id: string;
  skill_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  skill?: SkillInterface;
  _count?: {};
}

export interface UserSkillGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  skill_id?: string;
}

import { TaskInterface } from 'interfaces/task';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  company_id: string;
  project_manager_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  company_id?: string;
  project_manager_id?: string;
}

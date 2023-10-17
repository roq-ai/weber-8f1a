import { EventInterface } from 'interfaces/event';
import { ProjectInterface } from 'interfaces/project';
import { ResearchInterface } from 'interfaces/research';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  event?: EventInterface[];
  project?: ProjectInterface[];
  research?: ResearchInterface[];
  user?: UserInterface;
  _count?: {
    event?: number;
    project?: number;
    research?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

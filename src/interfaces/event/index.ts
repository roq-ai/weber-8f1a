import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  title: string;
  description?: string;
  event_date?: any;
  location?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  user_id?: string;
  organization_id?: string;
}

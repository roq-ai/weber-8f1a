import { PublicationInterface } from 'interfaces/publication';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ResearchInterface {
  id?: string;
  title: string;
  abstract?: string;
  keywords?: string;
  publication_date?: any;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  publication?: PublicationInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    publication?: number;
  };
}

export interface ResearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  abstract?: string;
  keywords?: string;
  user_id?: string;
  organization_id?: string;
}

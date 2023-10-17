import { UserInterface } from 'interfaces/user';
import { ResearchInterface } from 'interfaces/research';
import { GetQueryInterface } from 'interfaces';

export interface PublicationInterface {
  id?: string;
  title: string;
  abstract?: string;
  publication_date?: any;
  publisher?: string;
  user_id: string;
  research_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  research?: ResearchInterface;
  _count?: {};
}

export interface PublicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  abstract?: string;
  publisher?: string;
  user_id?: string;
  research_id?: string;
}

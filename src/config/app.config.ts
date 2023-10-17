interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Network Owner'],
  customerRoles: [],
  tenantRoles: ['Network Owner', 'Researcher', 'Scientist', 'Collaborator', 'Guest User'],
  tenantName: 'Organization',
  applicationName: 'Weber',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage organizations',
    'Manage research',
    'Manage publications',
    'Manage events',
    'Manage projects',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/72422141-d1b1-4337-8263-ec955b7c8560',
};

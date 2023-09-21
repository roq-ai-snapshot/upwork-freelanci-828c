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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Project Manager', 'Freelancer', 'Team Member', 'Client'],
  tenantName: 'Company',
  applicationName: 'upwork freelancing app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read project information',
    'Read task information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage project data', 'Manage task data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/fb846f35-f9aa-45f7-a0f4-5344b41779c9',
};

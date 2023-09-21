const mapping: Record<string, string> = {
  companies: 'company',
  projects: 'project',
  skills: 'skill',
  tasks: 'task',
  users: 'user',
  'user-skills': 'user_skill',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

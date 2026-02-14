const allRoles = {
  customer: [],
  staff: [],
  admin: ['getUsers', 'manageUsers', 'manageUserActivities', 'getUserActivities'],
  manager: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

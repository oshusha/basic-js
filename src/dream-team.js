module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  members = members.filter(item => typeof item == 'string');
  members = members.map(item => item.replace(/^(\s+)/,''));
  const team = members.map(item => item.toUpperCase()).sort().map(item => item[0]).join("");
  return team;
};

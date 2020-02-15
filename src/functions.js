import {groups} from './groups';

export const getGroup = (groupId) => {
  return groups[groupId] || [];
};

export const hasGroup = (groupId) => {
  return getGroup(groupId).length > 0;
}
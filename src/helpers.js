export const findGroup = (groups = [], groupId) => 
groups.find((group) => group.id === groupId);

export const findEvent = (events = [], eventId) =>
events.find((event) => event.id === eventId);

export const findGroupsForUser = (groups = [], userGroup) =>
!userGroup ? groups : groups.find((group) => group.user_ids == userGroup);

export const getEventsForGroup = (events = [], groupId) =>
!groupId ? events : events.filter((event) => event.group_id === groupId);

export const countEventsForGroup = (events = [], groupId) => 
events.filter((event) => event.group_id === groupId).length;

export const getPrayersForGroup = (prayers = [], groupId) =>
!groupId ? prayers : prayers.filter((prayer) => prayer.group_id === groupId) 
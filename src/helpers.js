export const findGroup = (groups = [], groupId) => 
groups.find((group) => group.id === groupId);

export const findEvent = (events = [], eventId) =>
events.find((event) => event.id === eventId);

export const getEventsForGroup = (events = [], groupId) =>
!groupId ? events : events.filter((event) => event.group_id === groupId);

export const countEventsForGroup = (events = [], groupId) => 
events.filter((event) => event.group_id === groupId).length;

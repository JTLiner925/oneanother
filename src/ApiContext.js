import React from "react";

export default React.createContext({
  groups: [],
  events: [],
  eventId: '',
  groupId: '',
  addEvent: () => {},
  addGroup: () => {},
  deleteEvent: () => {},
  deleteGroup: () => {},
});

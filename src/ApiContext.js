import React from "react";

export default React.createContext({
  groups: [],
  events: [],
  addEvent: () => {},
  addGroup: () => {},
  deleteEvent: () => {},
  deleteGroup: () => {},
});

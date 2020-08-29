import React from "react";

// Reacts' contexts can act like component state, globally
const Global = React.createContext({
	username: null,
	token: null,
});

export default Global;

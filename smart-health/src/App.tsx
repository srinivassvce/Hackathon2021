import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Register from "./login/register";

import Login from "./login/login";
import SignUpSuccessful from "./signupsuccessful";
import Routes from "./routes";
const App = () => (
	<Routes />
);

export default App;

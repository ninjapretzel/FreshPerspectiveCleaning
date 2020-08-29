// dependencies
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// components need to change case in nav and footer

import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

// page components
import Home from "./pages/Home"
import Checklist from "./pages/Checklist"
import Estimate from "./pages/Booking"
import Booking from "./pages/Booking"
import NotFound from "./pages/NotFound"
import EmployeePortal from "./pages/EmployeePortal"

// styling css
import 'materialize-css/dist/css/materialize.min.css'
import "./css/Navbar.css"
import "./css/Footer.css"
import './css/App.css';
import Global from './Global'

// Class components are more explicit definitions of components than functional components.
// see https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108#dd07 for more information.
// apparently, class components can use lifecycle methods now, but they use hooks, but I would still typically stick with class Components.
class App extends React.Component {
  // Class-components are typically initialized in their constructor
  constructor() {
    super(); 
    // this is typically where one would set up their component's state.
    // Every class-component automatically has a capture like
    // let [ state, setState ] = useState({});
    // and then those captured variables are placed into the object:
    // this.state = state;
    // this.setState = setState;
    
    // In App, this state will become the application's Global context.
    // We can put any global data/functions here.
    // Use this pattern sparingly- too much global state is good way to make your app unmaintainable!
    this.state = {
      username: null, // Currently logged in user's username
      token: null, // Currently logged in user's access token
      onLogin: (creds) => { // used when the user has been logged in.
        localStorage["userLogin"] = JSON.stringify(creds);
        this.setState(creds);
        window.location = "/"
      },
      logout: () => { // Used when the user should be logged out 
        localStorage["userLogin"] = "";
        this.setState({ username: null, token: null });
        window.location = "/"
      }
    }
  }
  // Class-components are able to bind more lifecycle methods than just the default `render()`
  // See more about component lifecycle: https://reactjs.org/docs/react-component.html#the-component-lifecycle
  // or a diagram here: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  async componentDidMount() {
    // After this component is mounted, we'll check for login information
    if (localStorage["userLogin"]) {
      // If we have a login, we'll parse it out, and update our state.
      const userLogin = JSON.parse(localStorage["userLogin"]);
      const {username, token} = userLogin;
      this.setState({username, token});
      
      // TODO: Verify token is still valid
      // I might make a /checkLogin route on the server that would do this, 
      // and would return an object like `{ valid: true }` or `{ valid: false }`
      // if the token is not valid, then it would use the `this.state.logout` function.
    }
  }

  render() {
    return (
      // A react context (like Global) has a `Provider` component defined within it.
      // We'll wrap the entire application in a `Global.Provider`, using the App's `this.state` as the value.
      // This will make the application's state object become globally accessible.
      // In this case, we are using it to minimize friction when accessing/using login information
      // But I will reiterate again- do this sparingly, 
      // and only put things in the global state if you know you will actually need them app-wide.
      <Global.Provider value={this.state}>
        <Router>
          <Navbar />
          <div className="container app-content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/checklist" component={ Checklist } />
              <Route exact path="/estimate" component={ Estimate } />
              <Route exact path="/booking" component={ Booking } />
              <Route exact path="/employee" component={ EmployeePortal } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Global.Provider>
    );
  }
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./View/Home";
import Signin from './View/Signin';
import Signup from './View/Signup';

function App() {
  return <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  </>;
}

export default App;

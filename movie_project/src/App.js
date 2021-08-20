import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import News from "./pages/News";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import { HomeTemplate } from "./template/HomeTemplate";
import { Suspense, lazy } from "react";
import Checkout from "./pages/Checkout";
import CheckoutTemplate from "./template/CheckoutTemplate";
import {UserTemplate} from "./template/UserTemplate";
// import CheckoutTemple from './template/CheckoutTemplate'

// const CheckoutTemplateLazy = lazy(() => import('./template/CheckoutTemplate'))

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <Route path="/register" exact Component={Register} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <UserTemplate path="/signin" exact Component={Signin} />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

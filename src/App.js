import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navs from "./Components/Navs";
import NotFounds from "./Components/NotFounds";
import Services from "./Components/Services";
import { Apps } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <Apps>
        <Navs />
        <Switch>
          <Route path="/about">
            <h1>This is About</h1>
          </Route>
          <Route path="/contact">
            <h1>This is Contact</h1>
          </Route>
          <Route path="/services">
            <h1>This is Services</h1>
            <Services />
          </Route>
          <Route path="/feedback">
            <h1>This is Feedback</h1>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <NotFounds />
        </Switch>
        <Footer />
      </Apps>
    </BrowserRouter>
  );
}

export default App;

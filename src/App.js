import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navs from "./Components/Navs";
import NotFounds from "./Components/NotFounds";
import Services from "./Components/Services";
import ServiceSection from "./Components/ServiceSection";
import { Apps, CustomSection } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <Apps>
        <Switch>
          <Route path="/about">
            <Home />
            <h1 className="text-4xl uppercase text-center p-12 font-medium tracking-wide">
              About Us
            </h1>
            <CustomSection>
              <About />
            </CustomSection>
          </Route>
          <Route path="/contact">
            <Home />
            <h1 className="text-4xl uppercase text-center p-12 font-medium tracking-wide">
              Contact US
            </h1>
            <CustomSection />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/feedback">
            <Home />
            <h1 className="text-4xl uppercase text-center p-12 font-medium tracking-wide">
              Feedback
            </h1>
            <CustomSection>
              <Feedback />
            </CustomSection>
          </Route>
          <Route path="/home">
            <Home />
            <ServiceSection />
          </Route>
          <Route exact path="/">
            <Home />
            <ServiceSection />
          </Route>
          <NotFounds />
        </Switch>
      </Apps>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

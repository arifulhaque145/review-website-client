import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
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
            <h1 className="bg-gray-100 text-4xl uppercase text-center p-12 font-medium tracking-wide">
              Contact US
            </h1>
            <div className="bg-gray-100">
              <p className="text-center block w-3/4 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti quis facere beatae repudiandae, ducimus ipsum
                doloremque reiciendis delectus. Reprehenderit natus enim
                obcaecati neque assumenda doloremque facere, sed eos iste
                perspiciatis.
              </p>
            </div>
            <CustomSection className="bg-gray-100">
              <Contact />
            </CustomSection>
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/feedback">
            <Home />
            <h1 className="bg-gray-100 text-4xl uppercase text-center p-12 font-medium tracking-wide">
              Feedback
            </h1>
            <div className="bg-gray-100">
              <p className="text-center block w-3/4 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti quis facere beatae repudiandae, ducimus ipsum
                doloremque reiciendis delectus. Reprehenderit natus enim
                obcaecati neque assumenda doloremque facere, sed eos iste
                perspiciatis.
              </p>
            </div>
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

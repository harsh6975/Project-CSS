import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Browse from "./Component/Browse/Browse";
 import Discover from './Component/Discover/Discover';
 import ComingSoon from "./Component/ComingSoon/ComingSoon";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Discover} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/comingsoon" exact component={ComingSoon} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

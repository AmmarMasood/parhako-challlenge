import React, { useEffect, useContext } from "react";
// Components
import Nav from "./Pages/Nav";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";
// routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { picsContext, loadingContext } from "./Store";

function App() {
  const [pics, setPics] = useContext(picsContext);
  const [loading, setLoading] = useContext(loadingContext);

  useEffect(() => {
    getPicsFromUrl();
  }, []);

  const getPicsFromUrl = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      let data = await res.json();
      setPics(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error while loading images");
    }
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Photos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

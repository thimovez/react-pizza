import React from "react";

import { Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from './pages';
// import { fetchPizzas } from './redux/action/pizzas';
// import filters from "./redux/reducers/filter";

function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/>
    </div>
  </div>
  );
}

export default App;
import React from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from './pages';
import { setPizzas } from './redux/action/pizzas';
import filters from "./redux/reducers/filter";

function App() {
  const dispatch = useDispatch();
   

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

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



// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   }
// };

// const mapDispatchToProps = { 
//   setPizzas,
// };


export default App;
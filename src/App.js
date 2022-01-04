import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />

            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />

            <Route path="/posts/:year?/:month?" component={Posts} />

            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

/*
Switch : if our first route is matched then it doesn't move on the other route
> If we use the "exact keyword then if the route is exact the given route then it will print the output
<Route path="/" exact component={Home} />

> If we want to pass some extra props the we have to  use like this  <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />

> We can also use Redirect like this
<Redirect from="/posts" to="admin" />

*/

export default App;

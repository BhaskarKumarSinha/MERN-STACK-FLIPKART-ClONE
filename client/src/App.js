import React from "react";
import Header from "./componants/header/Header";
import Home from "./componants/Home/Home";
import DetailView from "./componants/itemDetails/DetailView.js";
import NotFound from "./componants/NotFound.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./componants/cart/Cart";
import TemplateProvider from "./componants/templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={DetailView} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;

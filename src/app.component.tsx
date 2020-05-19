import React from "react";
import Navigation from "./shared/components/Navigation.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./features/home/home.component";
import Todos from "./features/todos/todos.component";

function App() {
  return (
    <React.Fragment>
      <header>header</header>
      <Navigation />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/todos" component={Todos} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

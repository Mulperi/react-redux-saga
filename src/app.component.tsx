import React from "react";
import Navigation from "./shared/components/navigation.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./features/home/home.component";
import Todos from "./features/todos/todos.component";
import Header from "./shared/components/header.component";
import Footer from "./shared/components/footer.component";

function App() {
  return (
    <div className="app-container">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './header/Header'
import List from "./list/List";
import Todo from "./todo/Todo";
import Login from "./login/login"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Suzan Naeem",
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <div className="container"><br/>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/list" component={List} />
                        <Route path="/todo" component={Todo} />
                        <Route path="/">
                            <h1 className="h1">Welcome {this.state.name} </h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

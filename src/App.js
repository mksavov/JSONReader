import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import tablePage from "./components/TablePage"
export default class App extends React.Component{

   render() {
       return (
           <div>
               <Router>
                   <Switch>
                       <Route exact path={"/"} component={tablePage} />
                   </Switch>
               </Router>
           </div>
       )
   }
}



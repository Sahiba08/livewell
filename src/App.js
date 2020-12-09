import React,{Component} from 'react';
import Home from './Home.js';
import './App.css';
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeTrainer from './HomeTrainer.js';
import HomeClient from './HomeClient.js';
import Profcontent from './Profcontent.js';
import Details from './Details.js';
import FitnessTrainers from './FitnessTrainers.js';
import Plans from './Plans.js';

class App extends Component {
  render(){
 return(
<div className="App">
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/HomeTrainer" component={HomeTrainer} />
<Route exact path="/HomeClient" component={HomeClient} />
<Route exact path="/content" component={Profcontent} />
<Route exact path="/details" component={Details} />
<Route exact path="/fitnesstrainers" component={FitnessTrainers} />
<Route exact path="/plans" component={Plans} />
</Switch>
</div>
  );



  }

}

export default App;

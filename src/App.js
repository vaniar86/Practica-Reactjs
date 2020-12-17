import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'

import ExercisesContainer from './pages/ExercisesContainer';
import NewExercisesContainer from './pages/NewExercisesContainer';
import NotFound from './component/NotFound'

const App = () =>(
  <Router>
    <Switch>

        <Route exact path="/" component= {ExercisesContainer} />
        <Route exact path="/exercises" component= {NewExercisesContainer} />
        <Route component= {NotFound} />
    </Switch>   
</Router>
)

export default App;

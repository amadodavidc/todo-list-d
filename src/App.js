import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import List from '@material-ui/core/List';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/List';


import todoList from './task.js';
import TaskForm from './components/tasks/TaskForm.js';
import TaskList from './components/tasks/TaskList.js';

function Index () {
  return(<div>
         <center><h2>Index</h2>
         <p>Bienvenido a ToDo-List</p>
         </center>
         </div>)
}
function About () {
  return(
    <div>
    <center><h2>About</h2>
    <p>Contenido de About</p></center>
    </div>
       )
}
function Tasks ({ match }) {
  return(
  <div>
  <center><h2>Tasks</h2></center>
  <Route exact path={`${match.path}/new`} component={TaskForm} />
  <Route
  exact
  path={`${match.path}/edit/:taskId`}
  component={TaskForm}
  />
  <Route exact path={`${match.path}/`} component={TaskList} />
  </div>
  );
}
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const {classes} = props;
  return (
    <Router>
      <div style = {{padding: 30}}>
        <Grid container spacing = {3}>
         <Grid item xs={12}>
          <center><h1 style = {{color : 'blue', }}>ToDo-List</h1></center>
          </Grid>
          <Grid item xs ={2}  sm={6}>
          <nav>
            <ul>
              <li>
                <Link to="/index">Index</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/tasks">Tasks</Link>
              </li>
            </ul>
          </nav>
          </Grid>
        </Grid>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tasks">
            <Tasks />
            <todoList />
          </Route>
          <Route path="/index">
            <Index/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

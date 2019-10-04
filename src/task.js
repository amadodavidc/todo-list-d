import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class todoList extends React.Component {
state = {count: 0,
        value: null,
        tasks: []
        }

componentDidMount () {
  axios.get ('ws/rest/tasks')
    .then(res => {
      this.setState({tasks: res.data});
})
    .catch(err => console.log(err)
    );
}

  render () {
    console.log('render');
    const {tasks} = this.state;
    console.log(tasks);
    return(
      <div>
        <List>
          {tasks.map(p => {
            console.log(p);
            return (
      <ListItem key={p.name}>
      <ListItemText primary={p.name}
        secundary={p.description}
        />
        </ListItem>
                  )
        })
      }
        </List>
      </div>
    );
        }
}

export default todoList;
// # todo-list-d/src

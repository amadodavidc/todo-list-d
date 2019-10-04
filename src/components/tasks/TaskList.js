import React from 'react';
import axios from 'axios';

function TaskList () {
  React.useEffect(() =>
axios.get('ws/rest/tasks/paginated', {params : {pageSize: rowsPerPage, first page * rowsPerPage}})
.then(res => {
  setRows(res.data);
  setCount(res.data.count);
})
cath(err =>{
  console.log(err);
});

axios.get(`/ws/rest/tasks/${id}`)
.then(res => {
  setRows(res.data.tasks);
  setCount(res.data.count);
})
.catch(err => {
  console.log(err);
});

axios.post('/ws/rest/tasks', task)
.then(res => {
alert('Tarea actualizada correctamente');
})
.catch(err => {
  console.log(err);
});

axios.put(`/ws/rest/tasks/${task.id}`, task)
.then(res =>{
alert('Tarea actualizada correctamente');
})
.catch (err => {
console.log(err);
});

axios.delete(`/ws/rest/tasks/${id}`)
.then(res => {
alert('Tarea borrada correctamente');
})
.catch(err => {
console.log(err);  
});
)}

export TaskList;

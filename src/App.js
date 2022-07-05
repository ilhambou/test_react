import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';



// import React from 'react';

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Dox',
            day: 'feb',
            reminder: true,
        },
        {
            id: 2,
            text: 'Dox2',
            day: 'feb2',
            reminder: true,
        },
        {
          id: 3,
          text: 'Dox3',
          day: 'feb23',
          reminder: false,
      },
    ]
)

const addTask=(task)=>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks,newTask])
}
  
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleRemider = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? { ...task,reminder: !task.reminder} : task))
}
  return (
    <div className="container">
      <Header title={'Test'} />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemider}/>) : ('No Tasks to show')
      }
    </div>
      
  )
}

export default App;
// class App extends React.Component{
//   render(){
//     return <h1>hhh</h1>
//   }
// }
// export default App;

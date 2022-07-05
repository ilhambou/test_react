
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState , useEffect } from "react"
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

// import React from 'react';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([  ])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

const addTask=(task)=>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks,newTask])
}
  
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
})

  setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleRemider = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? { ...task,reminder: !task.reminder} : task))
}
  return (
    <Router>
    <div className="container">
      <Header title={'Test'} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
      <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleRemider}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>

      <Footer />
     
     
    </div>
    </Router>
    

      
  )
}

export default App;
// class App extends React.Component{
//   render(){
//     return <h1>hhh</h1>
//   }
// }
// export default App;

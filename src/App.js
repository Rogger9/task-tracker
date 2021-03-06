import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
	const [showAddTask, setShowAddTask] = useState(false)

	const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    }
	])

	const addTask = (task) => {
		//task id
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//Toggle reminder (alternar recordatorio) al darle doble click sobre la tarea
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task))
	}

	return <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To Show'}
  </div>
}

export default App
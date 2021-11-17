import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, day, reminder } = task

	return <div className={`task ${reminder ? 'reminder' : undefined}`} onDoubleClick={() => onToggle(id)}>
    <h3>
      {text}
      <FaTimes style={{ color: '#B36868', cursor: 'pointer' }} onClick={() => onDelete(id)} />
    </h3>
    <p>{day}</p>
	</div>
}

export default Task
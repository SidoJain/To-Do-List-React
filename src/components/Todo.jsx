import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    const [isClicked, setIsClicked] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 300);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>
            <div className="icons">
                <FontAwesomeIcon className={`copy-icon ${isClicked ? 'clicked' : ''}`} icon={faCopy} onClick={() => copyToClipboard(task.task)} />
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}
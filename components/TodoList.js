import React, { useState } from 'react';
import { View } from 'react-native';
import TodoTask from './TodoTask';
const TodoList = ({tasks, setTasks}) => {


    function toggleCompleted(id) {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));

    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <View>
            {tasks.map(task => (
                <TodoTask
                    key={task.id}
                    task={task}
                    toggleCompleted={toggleCompleted}
                    deleteTask={deleteTask}
                />
            ))}
        </View>
    )
}
export default TodoList
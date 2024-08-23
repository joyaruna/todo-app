import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TodoTask = ({ task, toggleCompleted, deleteTask }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                {task.completed ?
                    <Ionicons name="checkmark-circle-outline" size={32} color="#B2BEB5" onPress={() => toggleCompleted(task.id)} />
                    :
                    <Ionicons name="ellipse-outline" size={32} color="#B42719" onPress={() => toggleCompleted(task.id)} />

                }
                <Text style={task.completed ? styles.taskUncompletedTitle : styles.taskTitle}>{task.title}</Text>
            </View>
            <Pressable onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 18,
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskTitle: {
        textDecorationLine: 'none',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 4,
    },
    taskUncompletedTitle: {
        textDecorationLine: 'line-through',
        opacity: 0.4,
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic',
    },
    deleteButton: {
        backgroundColor: '#B42719',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    deleteText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#fff'
    }
})

export default TodoTask;
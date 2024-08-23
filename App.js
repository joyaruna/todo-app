import React, { useState, useEffect } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import TodoList from './components/TodoList';

export default function App() {

  const [title, setTitle] = useState('');
  const [canAddTask, setCanAddTask] = useState(false);


  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Doctor's appointment",
      completed: true,
    },
    {
      id: 2,
      title: "Lawyer appointment",
      completed: false,
    }
  ]);

  console.log(tasks.length)

  function addTask() {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTitle('');
  }

  useEffect(() => {

    const invalid = title === "";
    setCanAddTask(!invalid);

  }, [title])

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }} style={styles.container}>
      {tasks.length < 1 ?
        <></>
        :
        <>
          <TodoList tasks={tasks} setTasks={setTasks} />
        </>
      }
      <View style={styles.addTaskContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder='Input new task'
          style={styles.inputBox}
          placeholderTextColor="#B2BEB5"
          multiline={true}
          autoFocus={false}
        />
      </View>
      <Pressable onPress={addTask} style={[styles.addButton, !canAddTask ? styles.disabled : {}]} disabled={!canAddTask}>
        <Text style={styles.addText}>Add Task</Text>
      </Pressable>






    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B42719',
    paddingHorizontal: 18,
  },
  inputBox: {
    color: '#fff',
    fontSize: 15
  },
  addTaskContainer: {
    marginVertical: 25,
    backgroundColor: '#000000',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 18,

  },
  addButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 18,
  },
  addText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B42719'
  },
  disabled: {
    backgroundColor: '#EA8663',
    opacity: 0.3
  }
})

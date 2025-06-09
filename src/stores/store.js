import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {

  const tasks = ref({
    toDo: [
      { id: 1, text: 'First Task', status: 'toDo' },
      { id: 5, text: 'Fifth Task', status: 'toDo' }
    ],
    inProgress: [
      { id: 2, text: 'Second Task', status: 'inProgress' }
    ],
    done: [
      { id: 3, text: 'Third Task', status: 'done' }
    ],
  })

  function getTasks() {
    return tasks.value
  }

  function addTask(text, type = 'toDo') {
    tasks.value[type].push({
      id: Date.now(),
      text,
      status: type
    });
  }

  return { tasks, getTasks, addTask }
})

export const useModalStore = defineStore('modal', () => {
  const isModalVisible = ref(false)
  return { isModalVisible }
})

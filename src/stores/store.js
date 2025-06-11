import { ref } from 'vue'
import { defineStore } from 'pinia'

/* Store с задачами */
export const useTasksStore = defineStore('tasks', () => {

  const tasks = ref({
    toDo: [
      { id: 1, text: 'Убраться', status: 'toDo' },
      { id: 2, text: 'Вынести мусор', status: 'toDo' }
    ],
    inProgress: [
      { id: 3, text: 'Закончить рабочую задачу', status: 'inProgress' }
    ],
    done: [
      { id: 4, text: 'Утренний уход', status: 'done' }
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

  function moveTask(target, id, type) {
    const taskIndex = tasks.value[type].findIndex(task => task.id === Number(id));

    const task = tasks.value[type][taskIndex];
    if (!task) {
      console.warn('Задача не найдена по индексу');
      return;
    }

    tasks.value[type].splice(taskIndex, 1);
    task.status = target;
    tasks.value[target].push(task);
  }

  return { tasks, getTasks, addTask, moveTask }
})

/* Store по добавлению задачи */
export const useAddModalStore = defineStore('modal', () => {
  const isModalVisible = ref(false)
  return { isModalVisible }
})

/* Store по передвижению задачи */
export const useMoveModalStore = defineStore('moveModal', () => {
  const isMoveModalVisible = ref(false)
  const currentType = ref(null)
  const currentId = ref(null);
  return { isMoveModalVisible, currentType, currentId }
})

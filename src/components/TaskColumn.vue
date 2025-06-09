<script setup>
import TaskCard from './TaskCard.vue';
import TaskModal from './TaskModal.vue';
import { useTasksStore, useModalStore } from '../stores/store.js';

const modalStore = useModalStore();

const props = defineProps({
  type: String,
  label: String,
});

const store = useTasksStore();
const tasks = store.tasks[props.type];

const handleClick = () => {
  modalStore.isModalVisible = true;
};
</script>

<template>
  <Teleport to="body"><TaskModal v-if="modalStore.isModalVisible" /></Teleport>
  <div class="container">
    <div class="header">
      <h1 class="label">{{ label }}</h1>
      <img
        v-if="type === 'toDo'"
        class="add"
        src="/add.svg"
        alt="Иконка кнопки добавить новую задачу"
        @click="handleClick"
      />
    </div>

    <div class="column">
      <TaskCard v-for="task in tasks" :text="task.text" :id="String(task.id)" :key="task.id" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 0 18px 0 18px;
}

.label {
  font-size: 24px;

  height: 32px;
}

.add {
  cursor: pointer;
}

.column {
  width: 300px;
  height: 100%;

  padding: 18px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 16px;

  border-radius: 18px;

  background-color: var(--column-background-color);
}
</style>

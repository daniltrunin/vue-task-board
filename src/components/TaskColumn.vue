<script setup>
import TaskCard from './TaskCard.vue';
import TaskModal from './TaskModal.vue';
import { useTasksStore, useAddModalStore } from '../stores/store.js';

const addModalStore = useAddModalStore();

const props = defineProps({
  type: String,
  label: String,
});

const store = useTasksStore();
const tasks = store.tasks[props.type];

const handleOpenModal = () => {
  addModalStore.isModalVisible = true;
};
</script>

<template>
  <Teleport to="body"><TaskModal v-if="addModalStore.isModalVisible" /></Teleport>
  <div class="container">
    <div class="header">
      <h1 class="label">{{ label }}</h1>
      <img
        v-if="type === 'toDo'"
        class="add"
        src="/add.svg"
        alt="Иконка кнопки добавить новую задачу"
        @click="handleOpenModal"
      />
    </div>

    <div class="column">
      <TaskCard
        v-for="task in tasks"
        :type="type"
        :text="task.text"
        :id="String(task.id)"
        :key="task.id"
      />
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
  margin-bottom: 32px;
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
  height: auto;
  max-height: 100vh;

  overflow: scroll;
  overscroll-behavior: contain;

  padding: 18px 18px 18px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 18px;

  border-radius: 18px;

  background-color: var(--column-background-color);
}
</style>

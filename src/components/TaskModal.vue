<script setup>
import { ref } from 'vue';
import { useAddModalStore, useTasksStore } from '@/stores/store';

const input = ref('');
const addModalStore = useAddModalStore();
const tasksStore = useTasksStore();

const handleClose = () => {
  addModalStore.isModalVisible = false;
};

const handleAdd = () => {
  const value = input.value;

  if (value) {
    addModalStore.isModalVisible = false;
    tasksStore.addTask(value, 'toDo');
  }

  if (!value) return;

  // console.log('text: ', value);
  // console.log('length: ', value.length);
};
</script>

<template>
  <div class="modal">
    <div class="window">
      <h1 class="heading">Добавьте новую таску</h1>
      <input v-model="input" type="text" />
      <div class="buttons">
        <button @click="handleClose" class="close">Закрыть</button>
        <button @click="handleAdd" class="add">Добавить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: var(--modal-background-color);

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.window {
  background-color: var(--modal-background-window-color);

  width: auto;
  height: auto;

  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  padding: 24px 36px;
}

input {
  border: none;
  border-radius: 6px;

  width: 100%;
  height: auto;

  padding: 10px;

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  font-weight: 500;
}

input:focus {
  outline: none;
}

.heading {
  font-size: 24px;

  height: 32px;
}

.buttons {
  display: flex;
  gap: 8px;

  width: 100%;
}

button {
  border: none;
  border-radius: 6px;

  font-size: 12px;
  font-weight: bold;

  padding: 8px 12px;

  background-color: var(--secondary-color);
  color: white;

  cursor: pointer;

  width: 100%;
}

.close {
  background-color: var(--close-button-color);
}
</style>

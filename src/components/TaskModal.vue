<script setup>
import { ref } from 'vue';

const input = ref('');
</script>

<template>
  <div class="modal">
    <div class="window">
      <input v-model="input" type="text" />
      <div class="buttons">
        <button class="remove">Убрать</button>
        <button class="add">Добавить</button>
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

  width: 400px;
  height: 150px;

  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 0 36px;
}

input {
  border: none;
  border-radius: 6px;

  width: 100%;
  height: 34px;

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

.buttons {
  align-self: flex-end;

  display: flex;
  gap: 8px;
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

  width: 80px;
}

.remove {
  background-color: rgb(237, 77, 77);
}
</style>

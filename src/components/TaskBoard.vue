<script setup>
import TaskColumn from './TaskColumn.vue';

const types = [
  { key: 'toDo', label: 'Выполнить' },
  { key: 'inProgress', label: 'В процессе' },
  { key: 'done', label: 'Выполнено' },
];
</script>

<template>
  <div class="container">
    <TaskColumn v-for="type in types" :key="type.key" :type="type.key" :label="type.label" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;

  min-height: 100vh;
  max-height: 100vh;

  padding: 28px 0 28px 0;

  column-gap: 64px;
  row-gap: 24px;
}
</style>

<script setup>
const props = defineProps({
  id: String,
  text: String,
});
</script>

<template>
  <div class="card">
    <div class="id">Номер {{ id }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;

  border-radius: 18px;

  background-color: var(--card-background-color);

  padding: 16px 38px 16px 22px;

  text-align: start;

  display: flex;
  flex-direction: column;
  gap: 8px;
}

.id {
  font-size: 16px;
  font-weight: 600;

  color: black;
}

.text {
  font-size: 14px;
  font-weight: 500;

  color: black;
}
</style>

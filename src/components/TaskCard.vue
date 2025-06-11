<script setup>
import { computed } from 'vue';
import { useMoveModalStore, useTasksStore } from '@/stores/store';

const props = defineProps({
  id: String,
  type: String,
  text: String,
});

const moveModalStore = useMoveModalStore();
const tasksStore = useTasksStore();

const options = {
  toDo: ['В процессе', 'Выполнено'],
  inProgress: ['Выполнить', 'Выполнено'],
  done: ['Выполнить', 'В процессе'],
};

const targets = computed(() => {
  return options[moveModalStore.currentType] || [];
});

const handleOpenModal = (id, type) => {
  moveModalStore.currentType = type;
  moveModalStore.currentId = id;
  moveModalStore.isMoveModalVisible = true;
};

const handleCloseModal = () => {
  moveModalStore.isMoveModalVisible = false;
};

const handleMoveTask = (target) => {
  const id = moveModalStore.currentId;
  const type = moveModalStore.currentType;

  if (target === 'Выполнить') {
    tasksStore.moveTask('toDo', id, type);
  } else if (target === 'В процессе') {
    tasksStore.moveTask('inProgress', id, type);
  } else if (target === 'Выполнено') {
    tasksStore.moveTask('done', id, type);
  }

  moveModalStore.isMoveModalVisible = false;
};
</script>

<template>
  <Teleport to="body">
    <div v-if="moveModalStore.isMoveModalVisible === true" class="modal">
      <div class="window">
        <h1 class="heading">Куда перенести таску?</h1>

        <div v-if="targets.length" class="column-fields">
          <div
            v-for="target in targets"
            :key="target"
            class="column-field"
            @click="() => handleMoveTask(target)"
          >
            {{ target }}
          </div>
        </div>

        <button @click="handleCloseModal" class="close">Закрыть</button>
      </div>
    </div>
  </Teleport>
  <div @click="() => handleOpenModal(id, type)" class="card">
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

  cursor: pointer;

  transition: all 0.3s ease;
}

.card:hover {
  background-color: var(--card-background-color-hover);
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
  gap: 30px;

  padding: 24px 36px;
}

.heading {
  font-size: 24px;

  height: 32px;
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

.column-fields {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.column-field {
  font-weight: 500;
  font-size: 14px;

  width: 100%;

  padding: 8px 10px;

  border-radius: 6px;

  color: white;
  background-color: var(--secondary-color);

  transition: all 0.3s ease;

  cursor: pointer;
}

.column-field:hover {
  background-color: var(--secondary-color-hover);
}

.close {
  background-color: var(--close-button-color);

  width: 100%;
}
</style>

<script setup>
import {ref} from "vue";
import InputText from 'primevue/inputtext';

const emit = defineEmits(['search']);

const value = ref('');
const placeholder = 'Введите ЖК / корпус / № квартиры / № паркинга'

const search = () => {
  emit('search', value.value);
}
</script>

<template>
  <InputText
      v-model="value"
      type="text"
      class="input p-inputtext-sm w-full my-5 border-noround p-3"
      :placeholder="placeholder"
      @input="search"
  />
</template>

<style scoped>
.input {
  background: inherit;
}
</style>
<template>
  <div class="container p-3">
    <search-field @search="onSearch"/>

    <div class="mb-5 flex">
      <div class="flex align-items-center">
        <Checkbox v-model="selectAll" name="all" value="all" />
        <label for="all" class="ml-2"> все </label>
      </div>
      <Button label="Удалить" class="deleteBtn" />
    </div>

    <apartment :apartments.sync="filteredApartments" />
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import SearchField from "../components/SearchField.vue";
import Apartment from "../components/Apartment.vue";
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const selectAll = ref(false);
const filteredApartments = ref([]);
const apartments = ref([
  {
    id: 1,
    type: 'Квартира',
    title: 'Чистое Небо',
    titleIcon: 'src/assets/floorplan.png',
    tooltip: 'Квартира',
    housing: 'корпус 10, III кв. 2022 г.',
    price: '7 733 300',
    apartmentNumber: 'кв. 62',
    apartmentArea: '234.38',
    numberOfRooms: '1 комн.кв.',
    floor: '7 этаж',
    address: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
    image: 'src/assets/image.png',
    status: 'Уступка от юр. лица',
    checked: false,
    name: 'first',
    statusColor: 'red',
    addedDate: '21/11/2020',
  },
  {
    id: 2,
    type: 'Квартира',
    title: 'Чистое Небо',
    titleIcon: 'src/assets/floorplan.png',
    tooltip: 'Квартира',
    housing: 'корпус 11, III кв. 2022 г.',
    price: '7 733 300',
    apartmentNumber: 'кв. 62',
    apartmentArea: '234.38',
    numberOfRooms: '1 комн.кв.',
    floor: '7 этаж',
    address: 'Комендантский пр., уч. 1 Каменка',
    image: 'src/assets/image.png',
    status: 'Уступка от физ. лица',
    name: 'second',
    checked: false,
    statusColor: 'blue',
    addedDate: '21/11/2020',
  },
  {
    id: 3,
    type: 'Паркинг',
    title: 'Зеленый квартал на Пулковских высотах',
    titleIcon: 'src/assets/car.png',
    tooltip: 'Подземная встроенно-пристроенная',
    housing: 'корпус 12, III кв. 2022 г.',
    price: '800 300',
    apartmentNumber: '№ 7-10-2 (ПИБ №68)',
    apartmentArea: '15 м²',
    numberOfRooms: null,
    floor: null,
    address: 'Ленинградская область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
    image: 'src/assets/image.png',
    status: 'Забронировано',
    checked: false,
    name: 'third',
    statusColor: 'lightGrey',
    addedDate: '21/11/2020',
  },
  {
    id: 4,
    type: 'Паркинг',
    title: 'Зеленый квартал на Пулковских высотах',
    titleIcon: 'src/assets/car.png',
    tooltip: 'Подземная встроенно-пристроенная',
    housing: 'корпус 13, III кв. 2022 г.',
    price: '800 300',
    apartmentNumber: '№ 7-10-2 (ПИБ №68)',
    apartmentArea: '15 м²',
    numberOfRooms: null,
    floor: null,
    address: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
    image: 'src/assets/image.png',
    status: 'Продано',
    checked: false,
    name: 'fourth',
    statusColor: 'darkGrey',
    addedDate: '21/11/2020',
  },
]);

onMounted(() => {
  filteredApartments.value = apartments.value;
});

const onSearch = (value) => {
  filteredApartments.value = apartments.value.filter(item => {
    return item.title.toLowerCase().includes(value) ||
        item.housing.toLowerCase().includes(value) ||
        item.apartmentNumber.toLowerCase().includes(value);
  });
}
</script>

<style scoped>
.deleteBtn {
  background: url("../assets/bin.png") no-repeat 90% 50% #E5E5E5;
  padding: 16px 40px 16px 25px;
  color: #000;
  font-size: 13px;
  border-radius: 0;
  margin-left: 2rem;
  border: none;
}

.p-button:enabled:hover {
  background: url("../assets/bin.png") no-repeat 90% 50% #E5E5E5;
  color: #000000;
}

::v-deep .p-button-label {
  font-weight: 400;
}

::v-deep .p-checkbox .p-checkbox-box {
  border-radius: 0;
}
</style>
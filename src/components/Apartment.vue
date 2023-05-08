<script setup>
import Checkbox from 'primevue/checkbox';
import {ref} from "vue";

defineProps({
  apartments: Array,
})

const selectedItems = ref([]);
</script>

<template>
  <div class="flex flex-wrap justify-content-between gap-5">
    <div v-for="apartment in apartments" :key="apartment.id" class="card p-5 pl-3">

      <div class="flex">
        <div class="flex align-items-center mx-4">
          <Checkbox
              v-model="selectedItems"
              :name="apartment.name"
              :value="apartment.id"
          />
        </div>

        <div class="w-full">
          <div class="flex justify-content-between">
            <div class="price">{{ apartment.price }} руб.</div>
            <div
                class="card-type py-2 px-5"
                v-tooltip.bottom="{value: apartment.tooltip, escape: true}"
            >
              <img
                  :src="apartment.titleIcon"
                  :alt="apartment.type"
                  class="mr-2"
              >
              {{ apartment.type }}
            </div>
            <div :class="apartment.statusColor" class="p-2 pl-5 status">{{ apartment.status }}</div>
          </div>

          <div class="card-title mt-1">
            {{ apartment.title }}
            <span class="text-color-secondary">
          {{ apartment.housing }}
        </span>
          </div>

          <div class="flex justify-content-between my-3">
            <div class="flex flex-column justify-content-between">
              <div class="content-info flex justify-content-between">
                <div class="border-right py-1">
                  <div>{{ apartment.apartmentNumber }}</div>
                  <div>{{ apartment.numberOfRooms }} </div>
                </div>
                <div class="py-1">
                  <div>{{ apartment.apartmentArea }}</div>
                  <div>{{ apartment.numberOfRooms }} </div>
                </div>
              </div>

              <div class="address">
                <img src="../assets/location.png" alt="location" class="location-icon" />
                {{ apartment.address }}
              </div>
            </div>

            <div>
              <img :src="apartment.image" alt="plan image" />
              <div class="date mt-1">
                Добавлено
                {{ apartment.addedDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 673px;
  border: 1px solid #E5E5E5;
  background: #ffffff;
}
.card-type {
  box-shadow: 0 0 2px rgba(94, 119, 157, 0.25);
  border-radius: 32px;
  cursor: pointer;
}
.price {
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #FF0D29;
}
.card-title {
  max-width: 276px;
}
.blue {
  background: #D6F5FF;
  color: #0291C1;
}
.red {
  background: #FFE4E4;
  color: #DD4C5D;
}
.lightGrey {
  background: #EDEDED;
  color: #686868;
}
.darkGrey {
  background: #CCCCCC;
  color: #808080;
}
.status {
  position: relative;
}
.red::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}
.blue::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0291C1;
}
.lightGrey::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #686868;
}
.darkGrey::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #808080;
}
.content-info {
  max-width: 250px;
  padding: 5px 0;
}
.border-right {
  border-right: 1px solid #C4C4C4;
  padding-right: 3rem;
}
.address{
  max-width: 280px;
}
.location-icon {
  margin-left: -25px;
}
.date {
  color: #9B9B9B;
  font-size: 13px;
}

@media screen and (max-width: 768px){
  .card {
    width: 100%;
  }
}
</style>
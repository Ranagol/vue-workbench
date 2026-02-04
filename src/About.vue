<template>
  <div>
    <h3>About</h3>
    <!-- <div :class="myObject.color2">0</div> -->
    <div class="purple">0</div>

    <hr />
    <ButtonCounter />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ButtonCounter from '@/ButtonCounter.vue';

const myObject = reactive({
  color2: 'purple',
});
</script>

<style scoped>
.purple {
  width: 100px;
  height: 100px;
  background-color: purple;
  display: inline-block;
  margin: 10px;
}
</style>
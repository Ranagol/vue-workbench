<template>
  <div :class="myObject.color2">0</div>
</template>

<script setup>
import { reactive } from 'vue';

let myObject = reactive({
  color2: 'purple'
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

.green {
  background-color: green;
  width: 100px;
  height: 100px;
}

</style>

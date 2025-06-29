<script setup>
import { ref } from 'vue'
import ThreeJS  from './ThreeJS.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <ThreeJS></ThreeJS>
  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    </div> -->

</template>
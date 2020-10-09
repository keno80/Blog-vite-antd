<template>
  <div>
    <b-header/>
    <b-main/>
  </div>
</template>

<script>
import BHeader from './header.vue'
import BMain from './main.vue'

export default {
  name: "index",
  components: {
    BHeader,
    BMain
  }
}
</script>


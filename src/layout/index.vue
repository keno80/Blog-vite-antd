<template>
  <div>
    <b-header/>
    <b-main/>
    <b-footer/>
  </div>
</template>

<script>
import BHeader from './header.vue'
import BMain from './main.vue'
import BFooter from './footer.vue'

export default {
  name: "index",
  components: {
    BHeader,
    BMain,
    BFooter
  }
}
</script>


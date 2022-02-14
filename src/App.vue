<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="scss">
  h1 {
    color : red;
  }
</style>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      testNum: 1,
      testBool: true
    }
  }
}
</script>

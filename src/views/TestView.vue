<template>
  <h1>Test View</h1>
  <h2>{{ testData }}</h2>
  <div class="container">
    <div class="row">
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">One of three columns</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestView',
  props: [],
  data () {
    return {
      testData: 'testData'
    }
  }
}
</script>

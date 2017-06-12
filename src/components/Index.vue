<template>
  <div class="index">
    <div>{{ msg }}</div>
    <div class="d1">

    </div>
    <div class="d2">

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'indexindexindexindex'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .index {
    text-align: center;
  }
  div {
    height: 100px;
    font-size: 50px;
  }
  .d1 {
    height: 320px;
  }
  .d2 {
    height: 91px;
  }
</style>

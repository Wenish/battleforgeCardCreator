<template>
  <div class="page-container">
    <el-button @click="visible = true">Awesome Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <Test></Test>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
  </div>
</template>

<script>
import Test from '@/components/Test'

export default {
  name: 'hello',
  components: { Test },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{

}
</style>

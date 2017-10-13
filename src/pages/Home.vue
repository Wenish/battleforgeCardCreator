<template>
  <div class="page-container">
    <CardSettings></CardSettings>
    <BfCard></BfCard>
    <el-button @click="visible = true">Awesome Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
  </div>
</template>

<script>
import CardSettings from '@/components/CardSettings'
import BfCard from '@/components/BfCard'

export default {
  name: 'home',
  components: {
    CardSettings,
    BfCard
  },
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
  width: 500px;
  margin: auto;
}
</style>
